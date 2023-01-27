<template>
  <div id="app">
    <v-app>
      <v-main>
        <div class="background" :class="{ dark: store.lightOrDark == true }">
          <div class="section" :class="{ dark: store.lightOrDark == true }">
            <label class="toggle-wrapper" :class="{ dark: store.lightOrDark == true }">
              <div class="toggle">
                <input class="toggle-state" type="checkbox" name="check" value="check" @click="lightOrDark()" />
                <div class="indicator">
                  <div class="icon-wrapper">
                    <v-icon
                      size="15"
                      class="toggle-icon"
                      color="#f6f6f6"
                      :class="{ hide: store.lightOrDark == true }"
                      icon="mdi-moon-waning-crescent"
                    />
                  </div>
                  <div class="icon-wrapper">
                    <v-icon size="15" class="toggle-icon" color="#505050" :class="{ hide: store.lightOrDark == true }" icon="mdi-weather-sunny" />
                  </div>
                </div>
              </div>
            </label>
            <div class="title">
              <h1 class="my-name" :class="{ textdark: store.lightOrDark == true }">Halmar</h1>
              <h1 class="my-name" :class="{ textdark: store.lightOrDark == true }">Henrik Bjarne</h1>
              <h1 class="my-name" :class="{ textdark: store.lightOrDark == true }">Bergman</h1>
            </div>
            <Navbar />
            <NuxtPage />
          </div>
        </div>
      </v-main>
    </v-app>
  </div>
</template>

<script setup lang="ts">
function lightOrDark() {
  store.lightOrDark = !store.lightOrDark
  console.log(store.lightOrDark)
}

//* Page Meta
useHead({
  title: 'Nuxt app',
  meta: [{ name: 'Nuxt app', content: 'Nuxt app' }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  bodyAttrs: {
    class: 'body',
  },
  script: [{ children: "console.log('Nuxt app')" }],
})

//* Stores
const store = useNuxtStore()

//* Created
if (store.env === '') {
  const env = await $fetch('/api/env')
  store.env = env
}
if (process.client) {
  console.log('Nuxt 3 app listening on ' + window.location.protocol + '//' + window.location.host + ' in ' + store.env + ' environment.')
}
</script>

<style src="@/assets/css/main.scss" lang="scss" />
