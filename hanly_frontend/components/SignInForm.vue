<template>
  <form class="form" @submit.prevent="$emit('submit', { email, password })">
    <BaseInput v-model="email" placeholder="メールアドレス" type="email" />
    <BaseInput v-model="password" placeholder="パスワード" type="password" />
    <BaseButton class="mts" :disabled="isSending">ログイン</BaseButton>
  </form>
</template>

<script>
import BaseInput from '~/components/BaseInput'
import BaseButton from '~/components/BaseButton'

export default {
  components: {
    BaseInput,
    BaseButton
  },
  props: {
    isSending: Boolean
  },
  data() {
    return {
      email: '',
      password: ''
    }
  }
}
</script>

<style lang="scss" scoped></style>
