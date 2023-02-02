<template>
  <div class="navbar">
    <div class="left-elements">
      <NuxtLink to="/" class="link"><h5 class="element" :class="{ textdark: store.lightOrDark == true }">Profile</h5></NuxtLink>
      <NuxtLink to="/portfolio" class="link"><h5 class="element" :class="{ textdark: store.lightOrDark == true }">Portfolio</h5></NuxtLink>
      <NuxtLink to="/curriculumvitae" class="link"
        ><h5 class="element" :class="{ textdark: store.lightOrDark == true }">Curriculum Vitae</h5></NuxtLink
      >
    </div>
    <NuxtLink to="/contact" class="link"><h5 class="element" :class="{ textdark: store.lightOrDark == true }">Contact</h5></NuxtLink>
  </div>
</template>

<script setup lang="ts">
const store = useNuxtStore()
</script>

<style scoped lang="scss">
@import '@/assets/css/variables.scss';

.navbar {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  padding: 0px;
  gap: 50px;
  width: 100%;
  height: 10px;
  .left-elements {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 50px;
  }
  .link {
    text-decoration: none;
  }
  .element {
    &:hover {
      cursor: pointer;
      color: $halmar-beige;
      scale: 1.1;
    }
  }
}
</style>
