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
        <div class="text-subtitle1"> {{todaysDate}}</div>
      </div>
      
      <q-img 
        src="..\statics\mountains.jpg"
        class="header-image absolute-top"
        />
    </q-header>

    <q-drawer
        v-model="leftDrawerOpen"
        show-if-above
        :width="250"
        :breakpoint="600"
      >
        <q-scroll-area style="height: calc(100% - 192px); margin-top: 192px; border-right: 1px solid #ddd">
          <q-list padding>
            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="inbox" />
              </q-item-section>

              <q-item-section>
                Inbox
              </q-item-section>
            </q-item>

            <q-item active clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="star" />
              </q-item-section>

              <q-item-section>
                Star
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="send" />
              </q-item-section>

              <q-item-section>
                Send
              </q-item-section>
            </q-item>

            <q-item clickable v-ripple>
              <q-item-section avatar>
                <q-icon name="drafts" />
              </q-item-section>

              <q-item-section>
                Drafts
              </q-item-section>
            </q-item>
          </q-list>
        </q-scroll-area>

        <q-img class="absolute-top" src="../statics/mountains.jpg" style="height: 192px">
          <div class="absolute-bottom bg-transparent">
            <q-avatar size="56px" class="q-mb-sm">
              <img src="https://cdn.quasar.dev/img/boy-avatar.png">
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
import EssentialLink from 'components/EssentialLink.vue'
import { date } from 'quasar'


export default {
  name: 'MainLayout',
  data () {
    return {
      leftDrawerOpen: false,
    }
  },
  computed: {
    todaysDate(){
      let timeStamp = Date.now();
      return date.formatDate(timeStamp, 'DD MMMM YYYY - dddd')
    }
  }

}
</script>


<style lang="scss">
  .header-image{
    height: 100%;
    z-index: -1;
    opacity: 0.7;
    filter: grayscale(50%);
  }
</style>