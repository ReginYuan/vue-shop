<template>
  <div class="login">
    <Left />
    <Container />
  </div>
</template>
<script>
import Left from './Left'
import Container from './Container'
export default {
  name: 'Login',
  components: {
    Left,
    Container

  },
  data () {
    return {
    }
  },
  methods: {

  }

}
</script>

<style lang='scss' scoped>
.login {
  display: flex;
  margin: 0 auto;
  height: 100%;
  width: 100%;
  color: #fff;
  background-color: #ffff;
}
</style>
