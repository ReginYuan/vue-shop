<template>
  <div class="login__container__title">
    <ul
      class="login__container__title__nav"
      v-for="(item, index) in title"
      :key="item.name"
    >
      <li class="login__container__title__nav__li">
        <a
          :class="{ active: index == Selectindex }"
          @click="tab(index, item.id)"
          >{{ item.value }}</a
        >
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'Nav',
  data () {
    return {
      Selectindex: 0,
      title: [
        { id: 0, value: '紫荆商城管理后台' },
        { id: 1, value: '地址' },
        { id: 2, value: '联系方式' }

      ]
    }
  },
  methods: {
    tab (index, id) {
      this.Selectindex = index
      this.$emit('changeBox', id)
      console.log(id)
    }
  }
}
</script>
<style lang='scss' scoped>
/*菜单功能样式*/
.login__container__title {
  position: absolute;
  top: 20px;
  width: 800px;
  right: 50px;
  float: right;
  &__nav {
    float: right;
    &__li {
      margin-right: 20px;
      display: inline;
      list-style: none;
      margin: 10px;
      padding: 10px;
      a {
        display: inline-block;
        font-family: '幼圆';
        height: 100%;
        line-height: 100%;
        padding: 10px;
        text-decoration: none;
        border-radius: 2px;
        color: #181818;
      }
      .active {
        background-color: #181818;
        color: #fff;
      }
    }
  }
}
</style>
