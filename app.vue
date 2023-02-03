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
                <h1 class="number" :class="{ letter: animation.firstflip == true, textdark: store.lightOrDark == true }">{{ animation.first }}</h1>
                <h1 class="number" :class="{ letter: animation.secondflip == true, textdark: store.lightOrDark == true }">{{ animation.second }}</h1>
                <h1 class="number" :class="{ letter: animation.thirdflip == true, textdark: store.lightOrDark == true }">{{ animation.third }}</h1>
                <h1 class="number" :class="{ letter: animation.fourthflip == true, textdark: store.lightOrDark == true }">{{ animation.fourth }}</h1>
                <h1 class="number" :class="{ letter: animation.fifthflip == true, textdark: store.lightOrDark == true }">{{ animation.fifth }}</h1>
                <h1 class="number" :class="{ letter: animation.sixthflip == true, textdark: store.lightOrDark == true }">{{ animation.sixth }}</h1>
              </div>
              <div class="title-test">
                <h1 class="number" :class="{ letter: animation.seventhflip == true, textdark: store.lightOrDark == true }">
                  {{ animation.seventh }}
                </h1>
                <h1 class="number" :class="{ letter: animation.eighthflip == true, textdark: store.lightOrDark == true }">{{ animation.eighth }}</h1>
                <h1 class="number" :class="{ letter: animation.ninthflip == true, textdark: store.lightOrDark == true }">{{ animation.ninth }}</h1>
                <h1 class="number" :class="{ letter: animation.tenthflip == true, textdark: store.lightOrDark == true }">{{ animation.tenth }}</h1>
                <h1 class="number" :class="{ letter: animation.eleventhflip == true, textdark: store.lightOrDark == true }">
                  {{ animation.eleventh }}
                </h1>
                <h1 class="number" :class="{ letter: animation.twelfthflip == true, textdark: store.lightOrDark == true }">
                  {{ animation.twelfth }}
                </h1>

                <h1 class="number" :class="{ letter: animation.thirteenthflip == true, textdark: store.lightOrDark == true }">
                  {{ animation.thirteenth }}
                </h1>
                <h1 class="number" :class="{ letter: animation.fourteenthflip == true, textdark: store.lightOrDark == true }">
                  {{ animation.fourteenth }}
                </h1>
                <h1 class="number" :class="{ letter: animation.fifteenthflip == true, textdark: store.lightOrDark == true }">
                  {{ animation.fifteenth }}
                </h1>
                <h1 class="number" :class="{ letter: animation.sixteenthflip == true, textdark: store.lightOrDark == true }">
                  {{ animation.sixteenth }}
                </h1>
                <h1 class="number" :class="{ letter: animation.seventeenthflip == true, textdark: store.lightOrDark == true }">
                  {{ animation.seventeenth }}
                </h1>
                <h1 class="number" :class="{ letter: animation.eighteenthflip == true, textdark: store.lightOrDark == true }">
                  {{ animation.eighteenth }}
                </h1>
              </div>
              <div class="title-test">
                <h1 class="number" :class="{ letter: animation.nineteenthflip == true, textdark: store.lightOrDark == true }">
                  {{ animation.nineteenth }}
                </h1>
                <h1 class="number" :class="{ letter: animation.twentiethflip == true, textdark: store.lightOrDark == true }">
                  {{ animation.twentieth }}
                </h1>
                <h1 class="number" :class="{ letter: animation.twentyfirstflip == true, textdark: store.lightOrDark == true }">
                  {{ animation.twentyfirst }}
                </h1>
                <h1 class="number" :class="{ letter: animation.twentysecondflip == true, textdark: store.lightOrDark == true }">
                  {{ animation.twentysecond }}
                </h1>
                <h1 class="number" :class="{ letter: animation.twentythirdflip == true, textdark: store.lightOrDark == true }">
                  {{ animation.twentythird }}
                </h1>
                <h1 class="number" :class="{ letter: animation.twentyfourthflip == true, textdark: store.lightOrDark == true }">
                  {{ animation.twentyfourth }}
                </h1>
                <h1 class="number" :class="{ letter: animation.twentyfifthflip == true, textdark: store.lightOrDark == true }">
                  {{ animation.twentyfifth }}
                </h1>
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
  return 1 + Math.random() * (2 - 1)
}
function randomTime2() {
  return 2.5 + Math.random() * (3.5 - 2.5)
}
function randomTime3() {
  return 3.5 + Math.random() * (4.5 - 3.5)
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
  title: 'Halmar Bergman',
  meta: [{ name: 'Halmar Bergman', content: 'Halmar Bergman' }],
  link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  bodyAttrs: {
    class: 'body',
  },
  script: [{ children: "console.log('Halmar Bergman')" }],
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
