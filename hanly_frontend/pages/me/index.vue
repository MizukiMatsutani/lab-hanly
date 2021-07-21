<template>
  <div>
    <PersonDetail
      :nickname="nickname"
      :latitude="latitude"
      :longitude="longitude"
      :datetime="getDateTime"
      :image-url="image_url"
      :upload-url="uploadUrl"
      :token="token"
      back-path="/friends"
      @uploaded="imageUploaded"
    />
    <BaseButton is-txt @click="logout">ログアウト</BaseButton>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'
import PersonDetail from '~/components/PersonDetail'
import BaseButton from '~/components/BaseButton'

export default {
  components: {
    PersonDetail,
    BaseButton
  },
  data() {
    return {
      token: window.localStorage.getItem('hanly_access_token')
    }
  },
  computed: {
    getDateTime() {
      return this.$dayjs(this.datetime).format('YYYY/MM/DD HH:mm')
    },
    ...mapGetters('me', [
      'image_url',
      'nickname',
      'latitude',
      'longitude',
      'datetime'
    ]),
    uploadUrl: () => process.env.API_BASE_URL + '/api/my/image'
  },
  methods: {
    imageUploaded(url) {
      this.$store.commit('me/updateImage', url)
    },
    logout() {
      window.localStorage.setItem('hanly_access_token', '') // 空文字にする
      this.$router.push('/') // ホーム画面に戻る
    }
  }
}
</script>

<style lang="scss" scoped></style>
