export const useNuxtStore = defineStore('nuxt-store', {
  state: () => {
    return {
      env: '' as '' | 'development' | 'test' | 'production',
      lightOrDark: false as boolean,
      scrollY: 0 as number,
    }
  },
})

export const useAnimationStore = defineStore('animation-store', {
  state: () => {
    return {
      firstflip: false as boolean,
      secondflip: false as boolean,
      thirdflip: false as boolean,
      fourthflip: false as boolean,
      fifthflip: false as boolean,
      sixthflip: false as boolean,
      seventhflip: false as boolean,
      eighthflip: false as boolean,
      ninthflip: false as boolean,
      tenthflip: false as boolean,
      eleventhflip: false as boolean,
      twelfthflip: false as boolean,
      thirteenthflip: false as boolean,
      fourteenthflip: false as boolean,
      fifteenthflip: false as boolean,
      sixteenthflip: false as boolean,
      seventeenthflip: false as boolean,
      eighteenthflip: false as boolean,
      nineteenthflip: false as boolean,
      twentiethflip: false as boolean,
      twentyfirstflip: false as boolean,
      twentysecondflip: false as boolean,
      twentythirdflip: false as boolean,
      twentyfourthflip: false as boolean,
      twentyfifthflip: false as boolean,

      first: '3' as string,
      second: '4' as string,
      third: '8' as string,
      fourth: '1' as string,
      fifth: '9' as string,
      sixth: '3' as string,
      seventh: '2' as string,
      eighth: '6' as string,
      ninth: '4' as string,
      tenth: '8' as string,
      eleventh: '2' as string,
      twelfth: '1' as string,
      thirteenth: '0' as string,
      fourteenth: '4' as string,
      fifteenth: '9' as string,
      sixteenth: '1' as string,
      seventeenth: '6' as string,
      eighteenth: '6' as string,
      nineteenth: '3' as string,
      twentieth: '9' as string,
      twentyfirst: '8' as string,
      twentysecond: '2' as string,
      twentythird: '1' as string,
      twentyfourth: '5' as string,
      twentyfifth: '8' as string,
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNuxtStore, import.meta.hot))
}
