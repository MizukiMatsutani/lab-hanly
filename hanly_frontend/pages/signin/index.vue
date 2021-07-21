<template>
  <div class="wrap">
    <SignInForm :is-sending="isSending" @submit="signIn" />
    <BaseButton to="/" class="mts" is-txt>戻る</BaseButton>
    <p v-if="error" class="error">{{ error }}</p>
  </div>
</template>

<script>
import SignInForm from '~/components/SignInForm'
import BaseButton from '~/components/BaseButton'

export default {
  layout: 'noLogin',
  components: {
    SignInForm,
    BaseButton
  },
  data() {
    return {
      error: '',
      isSending: false
    }
  },
  methods: {
    async signIn({ email, password }) {
      this.isSending = true
      try {
        const {
          data: { access_token }
        } = await this.$axios.post('/api/oauth/token', {
          grant_type: 'password',
          client_id: process.env.API_CLIENT_ID,
          client_secret: process.env.API_CLIENT_SECRET,
          scope: '*',
          username: email,
          password
        })

        window.localStorage.setItem('hanly_access_token', access_token)
        this.$axios.setToken(access_token, 'Bearer') // ログイン後にすぐに使えるように

        this.$router.push('/friends')
      } catch (e) {
        this.isSending = false
        this.error = 'メールアドレスが存在しないか、パスワードが間違っています'
        setTimeout(() => {
          this.error = ''
        }, 2000)
      }
    }
  }
}

// function mockAPi(params) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve({
//         data: { access_token: 'xxxxxx-dummy-token-xxxxxxxxx' }
//       })
//     }, 100)
//   })
// }
</script>

<style lang="scss" scoped>
.wrap {
  padding: 2.5rem 1rem 0;
}
</style>
