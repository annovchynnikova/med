export default {
  data() {
    return {
      code: ['', '', '', ''],
    }
  },
  computed: {
    joinedCode() {
      return this.code.join('')
    },
  },
  methods: {
    onInput(i) {
      if (this.code[i].length > 0) {
        const secondNum = this.code[i].length > 1

        if (secondNum) {
          if (i + 1 < this.code.length && this.code[i + 1].length === 0) {
            this.code[i + 1] = this.code[i][1]
            this.code[i] = this.code[i][0]
          } else {
            this.code[i] = this.code[i][1]
          }
          i++
        }

        if (this.joinedCode.length === 4) {
          this.$refs.code[secondNum ? i - 1 : i].blur()
          this.checkCode()
        } else if (i + 1 < this.code.length) {
          this.$refs.code[i + 1].focus()
        } else {
          this.$refs.code[secondNum ? i - 1 : i].blur()
        }
      } else if (i - 1 >= 0) {
        this.$refs.code[i - 1].focus()
        this.errorText = null
        if (this.errorTextSecond) this.errorTextSecond = null
        this.visibleStation = false
      }
    },
    checkEmptyCode(i, event) {
      if (i - 1 >= 0 && !this.code[i].length) {
        event.preventDefault()
        this.onInput(i)
      }
    },
  },
}
