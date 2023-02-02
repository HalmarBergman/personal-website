<template>
  <div class="content">
    <div class="first-section">
      <div class="image">
        <div class="wrapper">
          <img src="~/assets/images/table.jpg" />
        </div>
        <div class="background" :class="{ whiten: store.lightOrDark == true }"></div>
      </div>
    </div>
    <div class="second-section">
      <div class="text">
        <h3 :class="{ textdark: store.lightOrDark == true }">Me, myself and I</h3>
        <h6 :class="{ textdark: store.lightOrDark == true }">
          Welcome to the digital realm of a creative problem-solver where design and development seamlessly intersect. I'm a UI/UX designer and
          front-end developer, driven by a passion for crafting seamless user experiences and bringing ideas to life. With a keen eye for detail and a
          love for turning complex problems into elegant solutions, I use my skills to turn users' needs into visually stunning and functional
          websites and apps. So, take a look around, get inspired and let's create something amazing together.
        </h6>
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
    .image {
      position: relative;
      width: 100%;
      height: 100%;
      .background {
        position: absolute;
        width: 100%;
        height: 98%;
        background: #505050;
        z-index: 0;
        top: 5px;
        left: 5px;
        &.whiten {
          background: #1a1a1a;
        }
      }
      .wrapper {
        position: relative;
        width: 100%;
        height: 100%;
        z-index: 1;
        img {
          width: 100%;
          height: 100%;
          object-fit: contain;
        }
      }
      &:hover {
        .wrapper {
          transform: translate(-5px, -5px);
        }
      }
    }
  }
  .second-section {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 0px;
    width: 40%;
    .text {
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      gap: 10px;
      h3 {
        font-size: 42px;
        font-weight: 600;
        color: lightgrey;
        line-height: 42px;
        &.textdark {
          color: $text-dark;
        }
      }
    }
  }
}

@media (width < 480px) {
}

@media (width > 480px) {
}

@media (width > 760px) {
}

@media (width > 1200px) {
}
</style>
