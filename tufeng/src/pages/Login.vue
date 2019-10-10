<template>
  <div class="reg-box">
    <h3>登录</h3>
    <el-form
      :model="ruleForm"
      status-icon
      :rules="rules"
      ref="ruleForm"
      label-width="80px"
      class="demo-ruleForm"
    >
      <div class="ip">
        <el-form-item label="手机号" prop="username">
          <el-input v-model="ruleForm.username"></el-input>
        </el-form-item>
      </div>
      <div class="ip">
        <el-form-item label="密码" prop="pass">
          <el-input type="password" v-model="ruleForm.pass" autocomplete="off"></el-input>
        </el-form-item>
      </div>

      <el-form-item>
        <el-button type="info" @click="loginBtn()" class="regbtn">登录</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
export default {
  data() {
    var checkUsername = (rule, value, callback) => {
      if (!value) {
        return callback(new Error("用户名不能为空"));
      }
      
    };
    var validatePass = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请输入密码"));
      } else {
        if (this.ruleForm.checkPass !== "") {
          this.$refs.ruleForm.validateField("checkPass");
        }
        callback();
      }
    };
    
    return {
      ruleForm: {
        pass: "",
        username: "",
        mdl:true
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        username: [{ validator: checkUsername, trigger: "blur" }]
      }
    };
  },
  methods: {
    async loginBtn(){
      
      let { username, pass, mdl } = this.ruleForm;
      let {data} = await this.$axios.get('http://localhost:1907/user/login',{
        params:{
          username,
          password:pass,
          mdl
        }
      })
      if(data.code ==1){
        let { targetUrl } = this.$route.query
        this.$router.replace({
          path: targetUrl || "/mine"
        })
        localStorage.setItem("Authorization",data.data)
      }else{
        alert("用户名或密码不正确")
      }
      
      
    }
  }
};
</script>
<style scoped>
h3 {
  text-align: center;
  margin: 0;
  height: 48px;
  line-height: 48px;
  font-weight: 500;
  border-bottom: 1px solid #e5e5e5;
}
.el-form{
    width: 90%;
    margin:0 auto;
    font-size: 12px;
}
.ip{
    border-bottom: 1px solid #e5e5e5;
    height: 45px;
    line-height: 45px;
    padding-top: 14px;
}
.el-form-item{
    margin-bottom: 0;
    line-height: 45px;
}
.el-form-item>>>.el-input__inner{
    border:0 !important;
}
.el-form>.el-form-item>>>.el-form-item__content{
    margin-left:0 !important;
    margin-top: 15px;
}
.el-button{
    width: 100%;
}
</style>