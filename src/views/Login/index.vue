<template>
  <div class="login-page">
    <div class="login-wra">
      <div class="login ta-c fs-32 fw-b m-b10">{{$t('login.title')}}</div>
      <el-form :model="form"
               ref="ruleForm"
               :rules="rules">
        <el-form-item label="用户名"
                      prop="username">
          <el-input type="text"
                    v-model="form.username"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item label="密码"
                      prop="password">
          <el-input type="password"
                    v-model="form.password"
                    autocomplete="off"></el-input>
        </el-form-item>
        <el-form-item class="login-btn">
          <el-button type="primary"
                     @click="submitForm('ruleForm')">登录</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import { reactive, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { useRouter } from 'vue-router'
export default {
  name: 'Login',
  setup (props) {
    return { ...loginModel() }
  }
}
/**
   * 将业务逻辑转移到setup方法zhiwai 避免业务逻辑复杂时，setup选项变得冗余
   * */
var validateUsername = (rule, value, callback) => {
  if (!value) {
    return callback(new Error('用户名不能为空'))
  } else {
    callback();
  }
}
function loginModel () {
  const router = useRouter()
  const form = reactive({
    username: '',
    password: ''
  })
  const rules = {
    username: [
      { validator: validateUsername, trigger: 'blur' }
    ]
  }
  let ruleForm = ref()
  function submitForm (formName) {
    ruleForm.value.validate((valid) => {
      if (valid) {
        if (form.username === 'admin' && form.password === '123456') {
          router.push('/home')
          ruleForm.value.resetFields();
        } else {
          ElMessage.warning({
            message: '用户名或密码不正确',
            type: 'warning'
          });
        }
      }
    })
  }
  return {
    form,
    rules,
    submitForm,
    ruleForm
  }
}
</script>
<style lang="scss" scoped>
.login-page {
  position: relative;
  width: 100%;
  height: 100%;
  background-image: url("../../assets/loginBg.jpg");
  background-size: 100% 100%;
  .login-wra {
    position: absolute;
    top: 50%;
    left: 190px;
    transform: translateY(-50%);
    width: 500px;
    height: 400px;
    padding: 20px 30px;
    background-color: #fff;
    border-radius: 15px;
    .login-btn {
      margin-top: 40px;
    }
  }
}
</style>

