<template>
  <div class="content">
    <div class="portfolio first">
      <img src="~/assets/images/portfolio/phishing.png" />
      <div class="text">
        <h4>Lorem Ipsum</h4>
        <div class="arrow"></div>
      </div>
    </div>
    <div class="portfolio second">
      <img src="~/assets/images/portfolio/phishing.png" />
      <div class="text">
        <h4>BSc Thesis</h4>
        <div class="arrow"></div>
      </div>
    </div>
    <div class="portfolio third">
      <img src="~/assets/images/portfolio/phishing.png" />
      <div class="text">
        <h4>Lorem Ipsum</h4>
        <div class="arrow"></div>
      </div>
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
  .portfolio {
    position: absolute;
    cursor: pointer;
    &.first {
      top: 0;
      left: 0;
      width: 50%;
      height: 100%;
    }
    &.second {
      top: 0;
      left: 65%;
      width: 35%;
      height: 38%;
    }
    &.third {
      top: 40%;
      left: 55%;
      width: 45%;
      height: 60%;
    }

    &:hover {
      img {
        filter: grayscale(0);
      }
      .text {
        .arrow {
          transform: translateX(10px);
        }
      }
    }
    img {
      width: 100%;
      height: 100%;
      object-fit: cover;
      filter: grayscale(1);
    }
    .text {
      position: absolute;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      align-items: center;
      bottom: 20px;
      left: 25px;
      z-index: 1;
      gap: 20px;
      width: 80%;
      h4 {
        font-size: 18px;
        color: white;
      }
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
