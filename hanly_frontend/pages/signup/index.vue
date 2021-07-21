<template>
  <div class="wrap">
    <SignUpForm :is-sending="isSending" @submit="signUp" />
    <BaseButton to="/" class="mts" is-txt>戻る</BaseButton>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import SignUpForm from '~/components/SignUpForm'
import BaseButton from '~/components/BaseButton'

export default {
  layout: 'noLogin',
  components: {
    SignUpForm,
    BaseButton
  },
  data() {
    return {
      error: '',
      isSending: false
    }
  },
  methods: {
    async signUp({ nickname, email, password }) {
      this.isSending = true
      try {
        await this.$axios.post('/api/signup', {
          nickname,
          email,
          password
        })
      } catch (e) {
        this.isSending = false
        this.error = '登録済みのメールアドレスです'
        setTimeout(() => {
          this.error = ''
        }, 2000)
        return
      }
      this.$router.push('/signin')
    }
  }
}

// function mockAPi(params) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve()
//     }, 100)
//   })
// }
</script>

<style lang="scss" scoped>
.wrap {
  padding: 2.5rem 1rem 0;
}
</style>
