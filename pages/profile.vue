<template>
  <div class="content">
    <div class="first-section">
      <div class="text">
        <h3 :class="{ textdark: store.lightOrDark == true }">Me, myself and I</h3>
        <h6 :class="{ textdark: store.lightOrDark == true }">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia
          deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
          dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
          irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
        </h6>
      </div>
    </div>
    <div class="second-section">
      <div class="image">
        <img src="~/assets/images/staand.jpg" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useNuxtStore()
</script>

<style scoped lang="scss">
@import '@/assets/css/variables.scss';

.content {
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: 20px 0px 0px;
  width: 100%;
  height: 100%;
  gap: 40px;
  overflow-y: scroll;
  .first-section {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 0px;
    gap: 25px;
    width: 60%;
    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      padding: 0px 14px 0px 0px;
    }
  }
  .second-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 40%;
    .image {
      width: 100%;
      img {
        width: 100%;
        object-fit: cover;
      }
    }
  }
}
</style>
