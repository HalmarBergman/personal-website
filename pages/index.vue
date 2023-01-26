<template>
  <div class="portfolio">
    <div class="background" :class="{ backgrounddark: store.lightOrDark == true }">
      <div class="section" :class="{ sectiondark: store.lightOrDark == true }">
        <label class="toggle-wrapper" :class="{ dark: store.lightOrDark == true }" @click="mode()">
          <div class="toggle">
            <input class="toggle-state" type="checkbox" name="check" value="check" @click="mode()" />
            <div class="indicator"></div>
          </div>
        </label>
        <div class="title">
          <h1 class="my-name" :class="{ textdark: store.lightOrDark == true }">Halmar</h1>
          <h1 class="my-name" :class="{ textdark: store.lightOrDark == true }">Henrik Bjarne</h1>
          <h1 class="my-name" :class="{ textdark: store.lightOrDark == true }">Bergman</h1>
        </div>
        <Navbar />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useNuxtStore()

function mode() {
  store.lightOrDark = !store.lightOrDark
  console.log(store.lightOrDark)
}
</script>

<style scoped lang="scss">
@import '@/assets/css/variables.scss';
</style>
