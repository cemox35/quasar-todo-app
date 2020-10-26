<template>
  <q-page class="q-pa-md">
    <!-- Cem Ayar -->
    <h5 class="text-blue-6 bg-grey-3 shadow-10">Profile Page</h5>
    <q-form class="row justify-center" @submit="onSubmit">
      <q-uploader
        class="col-auto"
        url="https://api.cloudinary.com/v1_1/cemox35/image/upload"
        :form-fields="[
          { name: 'upload_preset', value: 'ctpreset' },
          { name: 'tags', value: 'browser_upload' },
          { name: 'folder', value: 'UserPPUpload' }
        ]"
        field-name="file"
        style="max-width: 300px"
        label="Upload your avatar"
        accept=".jpg, image/*"
        @rejected="onRejected"
        @uploaded="onUploaded"
      />
      <h5 class="col-xs-12 text-center">Name Surname</h5>
      <q-input rounded outlined v-model="name" label="Rounded outlined" />
      <h5 class="col-xs-12 text-center">Nickname</h5>
      <q-input rounded outlined v-model="nickname" label="Rounded outlined" />
      <h5 class="col-xs-12 text-center">Gender</h5>
      <q-btn-toggle
        v-model="gender"
        class="my-custom-toggle"
        no-caps
        rounded
        unelevated
        toggle-color="primary"
        color="white"
        text-color="black"
        :options="[
          { label: 'Male', value: 'Male' },
          { label: 'Female', value: 'Female' }
        ]"
      />
      <div class="col-xs-12" />
      <q-btn
        class="q-mt-xl"
        color="black"
        text-color="white"
        unelevated
        type="submit"
        label="Edit"
        no-caps
      />
    </q-form>
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
      this.name = LocalStorage.getItem("profile").name;
      this.nickname = LocalStorage.getItem("profile").nickname;
      this.gender = LocalStorage.getItem("profile").gender;
      this.avatar = LocalStorage.getItem("profile").avatar;
    }
  },
  methods: {
    onSubmit() {
      this.$q.notify({
        color: "green-4",
        textColor: "white",
        icon: "cloud_done",
        message: "Register Successfully!"
      });

      const profile = {
        name: this.name,
        nickname: this.nickname,
        gender: this.gender,
        avatar: this.avatar
      };

      LocalStorage.set("profile", profile);
      this.$router.push("/register"); //for reloading page (profile -> register -> homepage).
    },
    onRejected(rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: "negative",
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`
      });
    },
    onUploaded(info) {
      var obj = JSON.parse(info.xhr.responseText);
      this.avatar = obj.url;
    }
  }
};
</script>
