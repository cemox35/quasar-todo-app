<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">
      <!-- Cem Ayar -->
      <q-uploader
        url="https://api.cloudinary.com/v1_1/cemox35/image/upload"
        :form-fields="[
          { name: 'upload_preset', value: 'ctpreset' },
          { name: 'tags', value: 'browser_upload' }
        ]"
        field-name="file"
        style="max-width: 300px"
        label="Upload your avatar"
        accept=".jpg, image/*"
        @rejected="onRejected"
      />
    </h5>
  </q-page>
</template>

<script>
import { LocalStorage } from "quasar";
export default {
  data() {
    return {
      name: "",
      nickname: "",
      gender: "",
      avatar: ""
    };
  },
  mounted() {
    if (LocalStorage.getItem("profile")) {
      this.profile = LocalStorage.getItem("profile");
    }
  },
  methods: {
    onRejected(rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: "negative",
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      });
    }
  }
};
</script>
