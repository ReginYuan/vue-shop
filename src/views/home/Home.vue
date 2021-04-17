<template>
  <div class="home">
    <el-button type="info" @click="logout">退出</el-button>
  </div>
</template>

<script>

export default {
  name: 'Home',
  methods: {
    // 推出功能
    logout () {
      // 清空sessionStorage 删除token
      window.sessionStorage.clear()
      // 跳转到登陆页面
      this.$router.push('/login')
    }
  }
}
</script>
