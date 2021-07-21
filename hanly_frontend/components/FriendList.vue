<template>
  <div>
    <FriendItem
      v-for="(item, i) in list"
      :key="i"
      :index="i"
      :to="`${path}${item.id}`"
      :nickname="item.nickname"
      :date="item.date"
      :img="item.img || ''"
      :icon-placeholder="getPlaceholder(i)"
    />
  </div>
</template>

<script>
import FriendItem from './FriendItem'

export default {
  components: {
    FriendItem
  },
  props: {
    list: {
      type: Array,
      required: true
    },
    path: {
      type: String,
      required: true
    }
  },
  methods: {
    getPlaceholder(i) {
      return i % 3 === 0
        ? 'linear-gradient(141.16deg, #F686AB 11.81%, #FFE177 82.38%)'
        : i % 3 === 1
        ? 'linear-gradient(141.16deg, #B7F4EF 11.81%, #E27EA0 85.05%)'
        : 'linear-gradient(141.16deg, #FFE073 11.81%, #AFFDF6 85.05%)'
    }
  }
}
</script>
