<template>
  <div class="text-center">
    <q-parallax
      class="relative-position"
      src="https://res.cloudinary.com/cemox35/image/upload/f_auto,q_auto/v1602936140/parallax2_hpyoh4.jpg"
    >
      <h2 class="text-white text-weight-bolder">
        Welcome to Cemox Todo App
      </h2>

      <div>
        <div
          class="text-white  text-weight-bold text-h4 q-pt-xl"
          style="opacity:.9"
        >
          Before starting, we need to some information about you...
        </div>
      </div>
    </q-parallax>

    <div class="bg-light">
      <q-form
        class="column items-center q-pa-xl q-gutter-md"
        @submit="onSubmit"
      >
        <label>Name & Surname</label>
        <q-input
          filled
          v-model="name"
          label="Enter Your Name"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
        <label>Nickname</label>
        <q-input
          filled
          v-model="nickname"
          label="Enter Your Nickname"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
        <label>Gender</label>
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
        <q-btn
          class="q-mt-xl"
          color="black"
          text-color="white"
          unelevated
          type="submit"
          label="Register"
          no-caps
        />
      </q-form>
    </div>
  </div>
</template>

<script>
import { LocalStorage } from "quasar";

export default {
  data() {
    return {
      name: "",
      nickname: "",
      gender: "Male",
      avatar: ""
    };
  },

  mounted() {
    if (LocalStorage.getItem("profile")) {
      this.$router.push("/");
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
        avatar:
          this.gender == "Male"
            ? "https://res.cloudinary.com/cemox35/image/upload/f_auto,g_auto,w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1602936638/oeqrw528z5xro20y4cpe.png"
            : "https://res.cloudinary.com/cemox35/image/upload/f_auto,g_auto,w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1602936596/pxr6l9hwanibfehlsmfj.png"
      };

      LocalStorage.set("profile", profile);
      this.$router.push("/");
    }
  }
};
</script>

<style lang="scss" scoped>
.my-custom-toggle {
  border: 1px solid #027be3;
}
</style>
