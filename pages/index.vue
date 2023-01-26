<template>
  <div class="home-page">
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
.home-page {
  .background {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 120px;
    position: relative;
    height: 100vh;
    width: 100vw;
    background-color: $background-light;
    &.dark {
      background-color: $background-dark;
    }
  }
  .section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 60px 250px 0px 250px;
    width: 100%;
    max-width: 1200px;
    height: 100%;
    max-height: 700px;
    gap: 25px;
    background-color: $section-light;
    &.dark {
      background-color: $section-dark;
    }
  }
}
</style>
