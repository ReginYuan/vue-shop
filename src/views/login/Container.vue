<template>
  <div class="login__container">
    <UseLogo />
    <Nav @changeBox="changeBox" />
    <Box :boxId="boxId" />
  </div>
</template>
<script>
import UseLogo from './UseLogo'
import Nav from './Nav'
import Box from './Box'
export default {
  name: 'Container',
  components: {
    UseLogo,
    Nav,
    Box
  },
  data () {
    return {
      boxId: 0
    }
  },
  methods: {
    changeBox (id) {
      this.boxId = id
    }
  }

}
</script>
<style lang='scss' scoped>
/*页面右半部分样式 */
.login__container {
  display: flex;
  position: relative;
  float: right;
  width: 80%;
  background-color: #fbdf40;
}
</style>
