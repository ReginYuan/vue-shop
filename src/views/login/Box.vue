<template>
  <div class="login__container__box">
    <div
      id="address"
      class="login__container__box__address"
      :class="{ address: boxId == 1 }"
    >
      <img src="../../assets/address.png" />
    </div>
    <div
      :class="{ contact: boxId == 2 }"
      class="login__container__box__contact"
    >
      <img src="../../assets/contact.jpg" />
    </div>
    <!--   ref="ruleForm" 表单实例对象 -->
    <div :class="{ signin: boxId == 0 }" class="login__container__box__signin">
      <el-form
        :model="loginForm"
        :rules="loginFormRules"
        ref="loginFormRef"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item prop="username">
          <el-input
            v-model="loginForm.username"
            prefix-icon="iconfont icon-user"
          ></el-input>
        </el-form-item>
        <el-form-item prop="passowrd">
          <el-input
            type="password"
            prefix-icon="iconfont icon-zu"
            v-model="loginForm.passowrd"
          ></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login">登录</el-button>
          <el-button type="info" @click="resetLogin">重置</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Box',
  props: ['boxId'],
  data () {
    return {
      // 这是登录表单的数据绑定对象
      loginForm: {
        username: 'admin',
        password: '123456'
      },
      // 这是表单的验证规则对象
      loginFormRules: {
        // 验证用户名是否合法
        username: [
          { required: true, message: '请输入登录名称', trigger: 'blur' },
          { min: 3, max: 10, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        // 验证密码是否合法
        password: [
          { required: true, message: '请输入登录密码', trigger: 'blur' },
          { min: 6, max: 15, message: '长度在 6 到 15 个字符', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    login () {
      // validate 对整个表单进行校验的方法,如果验证通过就返回一个true，否则返回一个false
      this.$refs.loginFormRef.validate(async valid => {
        // 如果过校验通过就登陆
        if (valid) {
          // 登录请求接口
          const { data: res } = await this.$http.post('login', this.loginForm)
          // 判断是否登陆成功
          if (res.meta.status !== 200) {
            this.$message.error('登陆失败')
            console.log(res)
          } else {
            this.$message.success('登陆成功')
            // 1.登陆成功之后的token,保存到客户端的sessionStorage
            // 1.1项目中除了登陆之外的其他API接口,必须在登录之后才能访问
            // 1.2 token 只应在当前网站打开期间生效,所以token保存在sessionStorage
            window.sessionStorage.setItem('token', res.data.token)
            // 2.通过编程时导航跳转到后台主页,路由地址是 /home
            this.$router.push('/home')
          }
        } else {
          return valid
        }
      })
    },

    // 点击重置按钮，重置表单
    // resetFields 对该表单项进行重置，将其值重置为初始值并移除校验结果
    resetLogin () {
      this.$refs.loginFormRef.resetFields()
    }
  }
}
</script>
<style lang='scss' scoped>
/* 功能内容样式 */
.login__container__box {
  display: flex;
  position: relative;
  width: 450px;
  height: 300px;
  background-color: white;
  border-radius: 5px;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  align-items: center;
  justify-content: center;
  /*地址样式 */
  &__address {
    display: none;
  }
  /*联系方式样式 */
  &__contact {
    position: absolute;
    display: none;
    img {
      width: 200px;
      height: 200px;
    }
  }
  /* 登录样式*/
  &__signin {
    position: absolute;
    margin-right: 100px;
    width: 100%;
    display: none;
  }
  .address,
  .contact,
  .signin {
    display: block;
  }
}
</style>
