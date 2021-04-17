<template>
  <div class="login__container__avatar">
    <img src="../../assets/huge.jpg" />
  </div>
</template>
<script>
export default {
  name: 'UseLogo',
  data () {
    return {
    }
  }

}
</script>
<style lang='scss' scoped>
/*用户头像样式*/
.login__container__avatar {
  width: 200px;
  height: 200px;
  border: 2px solid #181818;
  border-right: none;
  border-radius: 50%;
  padding: 50px;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  background-color: #fbdf40;
  img {
    background-color: #181818;
    width: 100%;
    height: 100%;
    border-radius: 50%;
  }
}
</style>
