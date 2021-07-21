<template>
  <div class="personImage">
    <img
      :id="uploadUrl ? 'pick-avatar' : ''"
      :src="
        src ||
          'https://res.cloudinary.com/dyozxhhns/image/upload/v1584633414/empty-user-image.png'
      "
      alt
      width="80"
      class="img"
    />
    <AvatarCropper
      v-if="uploadUrl"
      trigger="#pick-avatar"
      :labels="labels"
      :upload-url="uploadUrl"
      :upload-headers="{
        Authorization: `Bearer ${token}`
      }"
      :output-options="{ width: 160, height: 160 }"
      @uploading="isUploading = true"
      @uploaded="handleUploaded"
    />
    <Loader v-if="isUploading" />
  </div>
</template>

<script>
import AvatarCropper from 'vue-avatar-cropper'
import Loader from './Loader'

export default {
  components: {
    AvatarCropper,
    Loader
  },
  props: {
    src: {
      type: String,
      default: ''
    },
    uploadUrl: {
      type: String,
      required: true
    },
    token: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isUploading: false
    }
  },
  computed: {
    labels: () => ({
      submit: '完了',
      cancel: 'キャンセル'
    })
  },
  methods: {
    handleUploaded(res) {
      this.isUploading = false
      this.$emit('uploaded', res.image_url)
    }
  }
}
</script>

<style lang="scss" scoped>
.personImage {
  color: #222;
  text-align: center;
}

.img {
  border-radius: 50%;
}
</style>

<style lang="scss">
.avatar-cropper-close {
  text-decoration: none;
}
</style>

<style lang="scss">
.avatar-cropper .avatar-cropper-mark {
  background: rgba(0, 0, 0, 0.7);
}
</style>
