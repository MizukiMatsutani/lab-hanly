<template>
  <form
    class="form"
    @submit.prevent="$emit('submit', { nickname, email, password })"
  >
    <BaseInput v-model="nickname" placeholder="ニックネーム" />
    <BaseInput v-model="email" placeholder="メールアドレス" type="email" />
    <BaseInput v-model="password" placeholder="パスワード" type="password" />
    <BaseButton class="mts" :disabled="isSending">新規登録</BaseButton>
  </form>
</template>

<script>
import BaseButton from './BaseButton'
import BaseInput from './BaseInput'

export default {
  components: {
    BaseButton,
    BaseInput
  },
  props: {
    isSending: Boolean
  },
  data() {
    return {
      nickname: '',
      email: '',
      password: ''
    }
  }
}
</script>
