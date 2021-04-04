<template>
  <el-container>
    <el-header><p>管理系统</p></el-header>
    <el-main>
      <div class="login">
        <el-form
          :model="ruleForm"
          :rules="rules"
          ref="ruleForm"
          label-width="100px"
          class="demo-ruleForm"
        >
          <el-form-item label="用户名" prop="name">
            <el-input v-model="ruleForm.name"></el-input>
          </el-form-item>
          <el-form-item label="密码" prop="passowrd">
            <el-input type="password" v-model="ruleForm.passowrd"></el-input>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="login()">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </el-main>
    <el-footer><p>management system</p></el-footer>
  </el-container>
</template>
<script>
export default {
  name: 'Login',
  data () {
    return {
      ruleForm: {
        name: '',
        region: '',
        date1: '',
        date2: '',
        delivery: false,
        type: [],
        resource: '',
        desc: ''
      },
      rules: {
        name: [
          { required: true, message: '请输入用户名', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        passowrd: [
          { required: true, message: '请输入密码', trigger: 'blur' },
          { min: 3, max: 18, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      const { name, password } = this.ruleForm
      this.$http({
        method: 'post',
        url: '/get_login',
        data: { user: name, password: password }
      })
    }
  }

}
</script>

<style lang='scss' scoped>
body {
  margin: 0;
  padding: 0;
}
.el-container {
  background: yellow;
}
.el-header {
  top: 0;
}
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
  vertical-align: center;
  p {
    display: block;
    margin: auto 20px;
  }
}
.el-footer {
  bottom: 0;
}
.el-main {
  display: flex;
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  height: 500px;
  width: 100%;
  .login {
    flex: 1;
    margin-top: 100px;
    background: #fff;
    height: 300px;
    vertical-align: center;
    .el-form-item {
      margin: 50px 50px 50px 10px;
    }
  }
}
</style>
