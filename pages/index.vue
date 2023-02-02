<template>
  <div class="content">
    <div class="firstPortfolio">
      <img src="~/assets/images/staand.jpg" />
    </div>
    <div class="secondPortfolio">
      <img src="~/assets/images/sitting.jpg" />
    </div>
    <div class="thirdPortfolio">
      <img src="~/assets/images/table.jpg" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
@import '@/assets/css/variables.scss';

.content {
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 20px 0px 0px;
  width: 100%;
  height: 100%;
  gap: 40px;
  overflow-y: scroll;
  .firstPortfolio {
    position: absolute;
    top: 0;
    left: 0;
    width: 50%;
    height: 100%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .secondPortfolio {
    position: absolute;
    top: 0;
    left: 65%;
    width: 35%;
    height: 38%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  .thirdPortfolio {
    position: absolute;
    top: 40%;
    left: 55%;
    width: 45%;
    height: 60%;
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
}

@media (width < 480px) {
  .content {
    .secondPortfolio {
      display: none;
    }
  }
}

@media (width > 480px) {
}

@media (width > 760px) {
}

@media (width > 1200px) {
}
</style>
