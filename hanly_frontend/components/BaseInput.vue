<template>
  <input
    class="input"
    :type="type"
    :value="value"
    :placeholder="placeholder"
    @input="$emit('input', $event.target.value)"
  />
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    },
    placeholder: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
.input {
  display: block;
  border: 1px solid transparent;
  background: rgba(255, 255, 255, 0.2);
  color: rgba(255, 255, 255, 0.8);
  font-size: 1.125rem;
  padding: 0 1rem;
  width: 100%;
  height: 3.75rem;
  line-height: 3.75rem;
  border-radius: 4px;
  /* この要素が隣接していたら後者に適用されるスタイル、よく使います */
  & + & {
    margin-top: 0.75rem;
  }
  &::placeholder {
    color: rgba(255, 255, 255, 0.2);
  }
  &:focus {
    border: 1px solid #1bd7c7;
    box-shadow: none;
    outline: none;
  }
}
</style>
