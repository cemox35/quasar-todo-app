<template>
  <q-page class="q-pa-lg">
    <h5 class="q-mt-none">
      <!-- Cem Ayar -->
      Profile Page
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
  }
};
</script>
