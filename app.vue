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
            <div class="title-test-column">
              <div class="title-test">
                <h1 class="number" :class="{ letter: animation.firstflip == true }">{{ animation.first }}</h1>
                <h1 class="number" :class="{ letter: animation.secondflip == true }">{{ animation.second }}</h1>
                <h1 class="number" :class="{ letter: animation.thirdflip == true }">{{ animation.third }}</h1>
                <h1 class="number" :class="{ letter: animation.fourthflip == true }">{{ animation.fourth }}</h1>
                <h1 class="number" :class="{ letter: animation.fifthflip == true }">{{ animation.fifth }}</h1>
                <h1 class="number" :class="{ letter: animation.sixthflip == true }">{{ animation.sixth }}</h1>
              </div>
              <div class="title-test">
                <h1 class="number" :class="{ letter: animation.seventhflip == true }">{{ animation.seventh }}</h1>
                <h1 class="number" :class="{ letter: animation.eighthflip == true }">{{ animation.eighth }}</h1>
                <h1 class="number" :class="{ letter: animation.ninthflip == true }">{{ animation.ninth }}</h1>
                <h1 class="number" :class="{ letter: animation.tenthflip == true }">{{ animation.tenth }}</h1>
                <h1 class="number" :class="{ letter: animation.eleventhflip == true }">{{ animation.eleventh }}</h1>
                <h1 class="number" :class="{ letter: animation.twelfthflip == true }">{{ animation.twelfth }}</h1>

                <h1 class="number" :class="{ letter: animation.thirteenthflip == true }">{{ animation.thirteenth }}</h1>
                <h1 class="number" :class="{ letter: animation.fourteenthflip == true }">{{ animation.fourteenth }}</h1>
                <h1 class="number" :class="{ letter: animation.fifteenthflip == true }">{{ animation.fifteenth }}</h1>
                <h1 class="number" :class="{ letter: animation.sixteenthflip == true }">{{ animation.sixteenth }}</h1>
                <h1 class="number" :class="{ letter: animation.seventeenthflip == true }">{{ animation.seventeenth }}</h1>
                <h1 class="number" :class="{ letter: animation.eighteenthflip == true }">{{ animation.eighteenth }}</h1>
              </div>
              <div class="title-test">
                <h1 class="number" :class="{ letter: animation.nineteenthflip == true }">{{ animation.nineteenth }}</h1>
                <h1 class="number" :class="{ letter: animation.twentiethflip == true }">{{ animation.twentieth }}</h1>
                <h1 class="number" :class="{ letter: animation.twentyfirstflip == true }">{{ animation.twentyfirst }}</h1>
                <h1 class="number" :class="{ letter: animation.twentysecondflip == true }">{{ animation.twentysecond }}</h1>
                <h1 class="number" :class="{ letter: animation.twentythirdflip == true }">{{ animation.twentythird }}</h1>
                <h1 class="number" :class="{ letter: animation.twentyfourthflip == true }">{{ animation.twentyfourth }}</h1>
                <h1 class="number" :class="{ letter: animation.twentyfifthflip == true }">{{ animation.twentyfifth }}</h1>
              </div>
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
const animation = useAnimationStore()

function lightOrDark() {
  store.lightOrDark = !store.lightOrDark
  console.log(store.lightOrDark)
}

function randomTime1() {
  return 2 + Math.random() * (3 - 2)
}
function randomTime2() {
  return 3.5 + Math.random() * (4.5 - 3.5)
}
function randomTime3() {
  return 5 + Math.random() * (6 - 5)
}

setInterval(A, randomTime1() * 1000)
setInterval(B, randomTime1() * 1000)
setInterval(C, randomTime1() * 1000)
setInterval(D, randomTime1() * 1000)
setInterval(E, randomTime1() * 1000)
setInterval(F, randomTime1() * 1000)

setInterval(G, randomTime2() * 1000)
setInterval(H, randomTime2() * 1000)
setInterval(I, randomTime2() * 1000)
setInterval(J, randomTime2() * 1000)
setInterval(K, randomTime2() * 1000)
setInterval(L, randomTime2() * 1000)

setInterval(M, randomTime2() * 1000)
setInterval(N, randomTime2() * 1000)
setInterval(O, randomTime2() * 1000)
setInterval(P, randomTime2() * 1000)
setInterval(Q, randomTime2() * 1000)
setInterval(R, randomTime2() * 1000)

setInterval(S, randomTime3() * 1000)
setInterval(T, randomTime3() * 1000)
setInterval(U, randomTime3() * 1000)
setInterval(V, randomTime3() * 1000)
setInterval(W, randomTime3() * 1000)
setInterval(X, randomTime3() * 1000)
setInterval(Y, randomTime3() * 1000)

function A() {
  animation.firstflip = !animation.secondflip
  animation.first = 'H'
}
function B() {
  animation.secondflip = !animation.secondflip
  animation.second = 'A'
}
function C() {
  animation.thirdflip = !animation.thirdflip
  animation.third = 'L'
}
function D() {
  animation.fourthflip = !animation.fourthflip
  animation.fourth = 'M'
}
function E() {
  animation.fifthflip = !animation.fifthflip
  animation.fifth = 'A'
}
function F() {
  animation.sixthflip = !animation.sixthflip
  animation.sixth = 'R'
}

function G() {
  animation.seventhflip = !animation.seventhflip
  animation.seventh = 'H'
}
function H() {
  animation.eighthflip = !animation.eighthflip
  animation.eighth = 'E'
}
function I() {
  animation.ninthflip = !animation.ninthflip
  animation.ninth = 'N'
}
function J() {
  animation.tenthflip = !animation.tenthflip
  animation.tenth = 'R'
}
function K() {
  animation.eleventhflip = !animation.eleventhflip
  animation.eleventh = 'I'
}
function L() {
  animation.twelfthflip = !animation.twelfthflip
  animation.twelfth = 'K'
}

function M() {
  animation.thirteenthflip = !animation.thirteenthflip
  animation.thirteenth = 'B'
}
function N() {
  animation.fourteenthflip = !animation.fourteenthflip
  animation.fourteenth = 'J'
}
function O() {
  animation.fifteenthflip = !animation.fifteenthflip
  animation.fifteenth = 'A'
}
function P() {
  animation.sixteenthflip = !animation.sixteenthflip
  animation.sixteenth = 'R'
}
function Q() {
  animation.seventeenthflip = !animation.seventeenthflip
  animation.seventeenth = 'N'
}
function R() {
  animation.eighteenthflip = !animation.eighteenthflip
  animation.eighteenth = 'E'
}

function S() {
  animation.nineteenthflip = !animation.nineteenthflip
  animation.nineteenth = 'B'
}
function T() {
  animation.twentiethflip = !animation.twentiethflip
  animation.twentieth = 'E'
}
function U() {
  animation.twentyfirstflip = !animation.twentyfirstflip
  animation.twentyfirst = 'R'
}
function V() {
  animation.twentysecondflip = !animation.twentysecondflip
  animation.twentysecond = 'G'
}
function W() {
  animation.twentythirdflip = !animation.twentythirdflip
  animation.twentythird = 'M'
}
function X() {
  animation.twentyfourthflip = !animation.twentyfourthflip
  animation.twentyfourth = 'A'
}
function Y() {
  animation.twentyfifthflip = !animation.twentyfifthflip
  animation.twentyfifth = 'N'
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
