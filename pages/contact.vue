<template>
  <div class="contact">
    <div class="background" :class="{ backgrounddark: store.lightOrDark === 'dark' }">
      <div class="section" :class="{ sectiondark: store.lightOrDark === 'dark' }">
        <div class="title">
          <h1 class="my-name" :class="{ textdark: store.lightOrDark === 'dark' }">Halmar</h1>
          <h1 class="my-name" :class="{ textdark: store.lightOrDark === 'dark' }">Henrik Bjarne</h1>
          <h1 class="my-name" :class="{ textdark: store.lightOrDark === 'dark' }">Bergman</h1>
        </div>
        <Navbar />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useNuxtStore()
</script>

<style scoped lang="scss">
@import '@/assets/css/variables.scss';
</style>
