<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="leftDrawerOpen = !leftDrawerOpen"
        />
      </q-toolbar>
      <div class="q-px-lg q-pt-xl q-nb-md">
        <div class="text-h3">To do</div>
        <div class="text-subtitle1">{{ todaysDate }}</div>
      </div>

      <q-img
        src="https://res.cloudinary.com/cemox35/image/upload/f_auto,q_auto/v1602936028/mountains_mxxugr.jpg"
        class="header-image absolute-top"
      />
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      :width="250"
      :breakpoint="600"
    >
      <q-scroll-area
        style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd"
      >
        <q-list padding>
          <q-item to="/" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="list" />
            </q-item-section>

            <q-item-section>
              To do
            </q-item-section>
          </q-item>

          <q-item to="/profile" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="perm_identity" />
            </q-item-section>

            <q-item-section>
              Profile
            </q-item-section>
          </q-item>

          <q-item to="/help" exact clickable v-ripple>
            <q-item-section avatar>
              <q-icon name="help" />
            </q-item-section>

            <q-item-section>
              Help
            </q-item-section>
          </q-item>
        </q-list>
      </q-scroll-area>

      <q-img
        class="absolute-top"
        src="https://res.cloudinary.com/cemox35/image/upload/f_auto,q_auto/v1602936028/mountains_mxxugr.jpg"
        style="height: 192px"
      >
        <div class="absolute-bottom bg-transparent">
          <q-avatar size="56px" class="q-mb-sm">
            <img
              src="https://res.cloudinary.com/cemox35/image/upload/f_auto,q_auto,w_1000,c_fill,ar_1:1,g_auto,r_max,bo_5px_solid_red,b_rgb:262c35/v1602935368/boy-avatar_nflprv.png"
            />
          </q-avatar>
          <div class="text-weight-bold">Cem Ayar</div>
          <div>@cemayar9</div>
        </div>
      </q-img>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import EssentialLink from "components/EssentialLink.vue";
import { date } from "quasar";

export default {
  name: "MainLayout",
  data() {
    return {
      leftDrawerOpen: false
    };
  },
  computed: {
    todaysDate() {
      let timeStamp = Date.now();
      return date.formatDate(timeStamp, "DD MMMM YYYY - dddd");
    }
  }
};
</script>

<style lang="scss">
.header-image {
  height: 100%;
  z-index: -1;
  opacity: 0.7;
  filter: grayscale(50%);
}
</style>
