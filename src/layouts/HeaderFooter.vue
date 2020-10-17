<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <router-view />
    </q-page-container>

    <q-page-sticky expand position="top">
      <q-toolbar class="bg-primary text-white">
        <q-avatar>
          <img
            src="https://res.cloudinary.com/cemox35/image/upload/f_auto,q_auto/v1602936035/unicorn_zbae0n.svg"
          />
        </q-avatar>
        <q-toolbar-title>
          Cemox Todo App
        </q-toolbar-title>
      </q-toolbar>
    </q-page-sticky>
  </q-layout>
</template>

<script>
export default {
  data() {
    return {};
  }
};
</script>
