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
      <q-form class="column items-center q-pa-xl q-gutter-md">
        <label>Name & Surname</label>
        <q-input
          filled
          v-model="name"
          label="Your name *"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
        <label>Nickname</label>
        <q-input
          filled
          v-model="nickname"
          label="Your nickname *"
          lazy-rules
          :rules="[val => (val && val.length > 0) || 'Please type something']"
        />
        <label>Gender</label>
        <q-btn-toggle
          v-model="model"
          class="my-custom-toggle"
          no-caps
          rounded
          unelevated
          toggle-color="primary"
          color="white"
          text-color="black"
          :options="[
            { label: 'Male', value: 'one' },
            { label: 'Female', value: 'two' }
          ]"
        />
        <q-btn
          class="q-mt-xl"
          color="black"
          text-color="white"
          unelevated
          to="/"
          label="Register"
          no-caps
        />
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      model: "one"
    };
  }
};
</script>

<style lang="scss" scoped>
.my-custom-toggle {
  border: 1px solid #027be3;
}
</style>
