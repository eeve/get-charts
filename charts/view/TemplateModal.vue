<template>
  <div class='modal modal-template' v-show='show'>
    <div class='title'>选择模板</div>
    <div class='content'>
      <item class='item' v-for='(t, index) in templates' :key='index' :value='t' :active='index === activeIndex' @click.native='handleClickItem(index)' />
    </div>
    <div class='btns'>
      <button @click='cancel' class='btn'>关闭</button>
      <button @click='ok' class='btn blue'>确定</button>
    </div>
  </div>
</template>

<script>
import templates from './template/index'
import Item from './Item'
export default {
  components: {
    Item
  },
  data () {
    return {
      templates,
      show: false,
      activeIndex: 0
    }
  },
  methods: {
    toggle () {
      this.show = !this.show
    },
    handleClickItem (index) {
      this.activeIndex = index
    },
    ok () {
      this.$emit('on-actived', this.templates[this.activeIndex])
      this.show = false
    },
    cancel () {
      this.show = false
    }
  }
}
</script>

<style lang="less">
@width: 600px;
@height: 400px;
@title-height: 45px;
@footer-height: 55px;

.modal {
  box-shadow: 0 1px 3px 0 rgba(0,0,0,.2), 0 1px 1px 0 rgba(0,0,0,.14), 0 2px 1px -1px rgba(0,0,0,.12);
  &.modal-template {
    position: absolute;
    left: 50%;
    top: 50%;
    width: @width!important;
    height: @height!important;
    margin-top: -(@height / 2);
    margin-left: -(@width / 2);
    background: #fff;
    z-index: 100;
  }
  .title {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    height: @title-height;
    line-height: @title-height;
    padding: 0 10px;
    color: #666;
    background: #eee;
  }
  .content {
    position: absolute;
    top: @title-height;
    left: 0;
    width: 100%;
    height: @height - @title-height - @footer-height;
    padding: 20px;
    overflow-y: auto;
    overflow-x: hidden;
    text-align: center;
    .item {
      display: inline-block;
      width: 25%;
      height: 150px;
      margin-right: 10px;
      margin-bottom: 10px;
    }
  }
  .btns {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: @footer-height;
    padding: 15px 20px;
    text-align: right;
    button {
      margin-left: 5px;
    }
  }
}
</style>
