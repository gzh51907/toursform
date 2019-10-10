<template>
  <div class="reg-box">
    <h3>注册</h3>
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
          <el-input type="password" v-model="ruleForm.pass"></el-input>
        </el-form-item>
      </div>
      <div class="ip">
        <el-form-item label="确认密码" prop="checkPass">
          <el-input type="password" v-model="ruleForm.checkPass"></el-input>
        </el-form-item>
      </div>

      <el-form-item>
        <el-button type="info" @click="regbtn()" class="regbtn">注册</el-button>
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
      
      setTimeout(async() => {
        
          let {data:{data}} = await this.$axios.get('http://localhost:1907/user/check',{
            params:{
              username:this.ruleForm.username
            }
          })
          if(data.length!=0){
            callback(new Error("该用户名已存在"));
            this.ruleForm.usernameExit=true;//true则存在，false则不存在
          }
          if(data.length==0){
            this.ruleForm.usernameExit=false;
          }
        
      }, 1200);
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
    var validatePass2 = (rule, value, callback) => {
      if (value === "") {
        callback(new Error("请再次输入密码"));
      } else if (value !== this.ruleForm.pass) {
        callback(new Error("两次输入密码不一致!"));
      } else {
        callback();
      }
    };
    return {
      ruleForm: {
        pass: "",
        checkPass: "",
        username: "",
        usernameExit:"",
      },
      rules: {
        pass: [{ validator: validatePass, trigger: "blur" }],
        checkPass: [{ validator: validatePass2, trigger: "blur" }],
        username: [{ validator: checkUsername, trigger: "blur" }]
      }
    };
  },
  methods: {
    
    async regbtn(){
      if(this.ruleForm.usernameExit==false&&this.ruleForm.pass==this.ruleForm.checkPass&&this.ruleForm.username.length!=0&&this.ruleForm.pass.length!=0){
        window.console.log("注册成功")
        let {data} = await this.$axios.post('http://localhost:1907/user/reg',{
          username:this.ruleForm.username,
          password:this.ruleForm.pass
        })
        //注册成功，跳转到登录页面
        alert("注册成功")
        setTimeout(()=>{
          this.$router.push("/login")
        },2000)
      }else{
        window.console.log("注册失败")
      }
    }
  },
  async created(){
          
        
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
.el-form {
  width: 90%;
  margin: 0 auto;
  font-size: 12px;
}
.ip {
  border-bottom: 1px solid #e5e5e5;
  height: 45px;
  line-height: 45px;
  padding-top: 14px;
}
.el-form-item {
  margin-bottom: 0;
  line-height: 45px;
}
.el-form-item >>> .el-input__inner {
  border: 0 !important;
}
.el-form > .el-form-item >>> .el-form-item__content {
  margin-left: 0 !important;
  margin-top: 15px;
}
.el-button {
  width: 100%;
}
</style>