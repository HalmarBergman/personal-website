<template>
  <div class="content">
    <div class="first-column">
      <div class="elements">
        <div class="element" @click="linkedIn()">
          <v-icon size="50" class="icon" :color="store.lightOrDark ? '#1a1a1a' : '#444444'" icon="mdi-linkedin" />
          <h5 :class="{ textdark: store.lightOrDark == true }">LinkedIn</h5>
        </div>
        <div class="element" @click="github()">
          <v-icon size="50" class="icon" :color="store.lightOrDark ? '#1a1a1a' : '#444444'" icon="mdi-github" />
          <h5 :class="{ textdark: store.lightOrDark == true }">Github</h5>
        </div>
        <div class="element" @click="instagram()">
          <v-icon size="50" class="icon" :color="store.lightOrDark ? '#1a1a1a' : '#444444'" icon="mdi-instagram" />
          <h5 :class="{ textdark: store.lightOrDark == true }">Instagram</h5>
        </div>
        <div class="element" @click="facebook()">
          <v-icon size="50" class="icon" :color="store.lightOrDark ? '#1a1a1a' : '#444444'" icon="mdi-facebook" />
          <h5 :class="{ textdark: store.lightOrDark == true }">Facebook</h5>
        </div>
      </div>
    </div>
    <div class="second-column">
      <div class="form">
        <h3 :class="{ textdark: store.lightOrDark == true }">Stuur een berichtje!</h3>
        <h6 :class="{ textdark: store.lightOrDark == true }">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </h6>

        <v-form ref="form" class="form">
          <v-row>
            <v-col cols="12" lg="12">
              <v-text-field height="20" label="Naam" :rules="formRules.required"></v-text-field>
              <v-text-field label="Email Adres" :rules="formRules.emailRules"></v-text-field>
              <v-textarea label="Beschrijving" :rules="formRules.required"></v-textarea>
              <div class="button-wrapper">
                <button class="button" :class="{ dark: store.lightOrDark == true }" type="button" @click="mail()">
                  <h5 class="text" :class="{ textdark: store.lightOrDark == true }">Versturen</h5>
                </button>
              </div>
            </v-col>
          </v-row>
        </v-form>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
const store = useNuxtStore()

const form = ref(null)

function linkedIn() {
  window.open('https://www.linkedin.com/in/halmar-bergman-678182183/', '_blank')
}
function github() {
  window.open('https://github.com/HalmarBergman', '_blank')
}
function instagram() {
  window.open('https://www.instagram.com/halmarbergman/', '_blank')
}
function facebook() {
  window.open('https://m.facebook.com/100006701283456/', '_blank')
}

async function mail() {
  //@ts-ignore
  const { valid } = await form.value?.validate()
  if (valid) {
    console.log('valid')
  }
}
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
  overflow-y: scroll;

  animation: 1s ease-out 0s 1 slideInBottom;
  .first-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding-right: 40px;
    width: 40%;
    height: 400px;
    .elements {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      align-items: flex-start;
      width: 80%;
      height: 50%;
      .element {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 20px;
        gap: 10px;
        width: 50%;
        cursor: pointer;
        .icon {
          color: $text-light;
          &:hover {
            scale: 1.2;
          }
        }
      }
    }
  }
  .second-column {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 60%;
    height: 100%;
    .form {
      display: flex;
      flex-direction: column;
      padding: 0px;
      gap: 10px;
      width: 100%;
      height: 100%;
      .button-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        .button {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          padding: 10px 20px;
          background: linear-gradient(135deg, #ffffff 0%, #e8e8e8 100%);
          box-shadow: -5px 5px 10px rgba(220, 220, 220, 0.2), 5px -5px 10px rgba(220, 220, 220, 0.2), -5px -5px 10px rgba(255, 255, 255, 0.9),
            5px 5px 13px rgba(220, 220, 220, 0.9), inset 1px 1px 2px rgba(255, 255, 255, 0.3), inset -1px -1px 2px rgba(220, 220, 220, 0.5);
          border-radius: 50px;
          cursor: pointer;
          &:hover {
            background: $section-light;
            box-shadow: 1px 1px 2px rgba(255, 255, 255, 0.3), -1px -1px 2px rgba(230, 230, 230, 0.5), inset -5px 5px 10px rgba(230, 230, 230, 0.2),
              inset 5px -5px 10px rgba(230, 230, 230, 0.2), inset -5px -5px 10px rgba(255, 255, 255, 0.9), inset 5px 5px 13px rgba(230, 230, 230, 0.9);
            border-radius: 50px;
          }
          &.dark {
            background: linear-gradient(135deg, #474747 0%, #414141 100%);
            box-shadow: -5px 5px 10px rgba(61, 61, 61, 0.2), 5px -5px 10px rgba(61, 61, 61, 0.2), -5px -5px 10px rgba(75, 75, 75, 0.9),
              5px 5px 13px rgba(61, 61, 61, 0.9), inset 1px 1px 2px rgba(75, 75, 75, 0.3), inset -1px -1px 2px rgba(61, 61, 61, 0.5);
            border-radius: 50px;
            &:hover {
              background: #444444;
              box-shadow: 1px 1px 2px rgba(75, 75, 75, 0.3), -1px -1px 2px rgba(61, 61, 61, 0.5), inset -5px 5px 10px rgba(61, 61, 61, 0.2),
                inset 5px -5px 10px rgba(61, 61, 61, 0.2), inset -5px -5px 10px rgba(75, 75, 75, 0.9), inset 5px 5px 13px rgba(61, 61, 61, 0.9);
              border-radius: 50px;
            }
          }
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
