<template>
  <div class='template-item' :class='{ active }'>
    <img class='icon' :src='value.icon' :alt='value.name'>
    <p class='name'>{{ value.name }}</p>
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: Object,
      required: true
    },
    active: {
      type: Boolean,
      default: false
    }
  }
}
</script>

<style lang="less" scoped>
.template-item {
  position: relative;
  text-align: center;
  border: 2px solid #efefef;
  cursor: pointer;
  &.active {
    border-color: aqua;
  }
  .icon {
    position: absolute;
    height: 80%;
    bottom: 20%;
    left: 0;
    width: 100%;
  }
  .name {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 20%;
  }
}
</style>

