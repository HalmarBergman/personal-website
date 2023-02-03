export const useNuxtStore = defineStore('nuxt-store', {
  state: () => {
    return {
      env: '' as '' | 'development' | 'test' | 'production',
      lightOrDark: false as boolean,
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
      ninth: '5' as string,
      tenth: '7' as string,
      eleventh: '10' as string,
      twelfth: '11' as string,
      thirteenth: '12' as string,
      fourteenth: '13' as string,
      fifteenth: '14' as string,
      sixteenth: '15' as string,
      seventeenth: '16' as string,
      eighteenth: '17' as string,
      nineteenth: '18' as string,
      twentieth: '19' as string,
      twentyfirst: '20' as string,
      twentysecond: '21' as string,
      twentythird: '22' as string,
      twentyfourth: '23' as string,
      twentyfifth: '24' as string,
    }
  },
})

if (import.meta.hot) {
  import.meta.hot.accept(acceptHMRUpdate(useNuxtStore, import.meta.hot))
}
