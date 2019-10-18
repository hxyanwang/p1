<template>
    <div class="login">
		<img src="../assets/bg.jpg" />
        <section class="form_container">
            <div class="manage_tip">
				<span class="title">11后台管理</span>
            </div>
            <el-form :model="loginUser" :rules="rules" ref="loginUser" class="loginForm" label-width="60px">
                <el-form-item label="邮箱" prop="email">
                    <el-input v-model="loginUser.email" placeholder="请输入邮箱"></el-input>
                </el-form-item>
                <el-form-item label="密码" prop="password">
                    <el-input v-model="loginUser.password" placeholder="请输入密码" type="password"></el-input>
                </el-form-item>
                <el-form-item>
                    <el-button type="primary"  @click="subForm('loginForm')" class="submit_btn">登  录</el-button>
                </el-form-item>
                <div class="tiparea">
                    <router-link to='/register'>注册</router-link>
                </div>
            </el-form>
        </section>
    </div>
</template>

<script>
import jwt_decode from "jwt-decode";

export default {
  name: "login",
  data() {
    return {
		loginUser: {},
		rules: {
			email: [
			{
				type: "email",
				required: true,
				message: "邮箱格式不正确",
				trigger: "change"
			}
			],
			password: [
				{ required: true, message: "密码不能为空", trigger: "blur" },
				{ min: 6, max: 30, message: "长度在 6 到 30 个字符", trigger: "blur" }
			]
		}
    };
  },
  methods: {
		subForm(obj){
			this.$refs['loginUser'].validate(valid => {
				if (valid) {
					alert('submit!');
					this.$axios.post("/api/users/login",this.loginUser)
						.then(res=>{
							console.log(res.data.token)
						})
						.catch(err=>{
							console.log(err)
							this.$message({
								message:'用户名不对或密码错误',
								type:'error'
							})
						})
				} else {
					console.log('error submit!!');
					return false;
				}
			})
		}
  }

};
</script>

<style scoped lang="scss">
.login {
  position: relative;
  width: 100%;
  background-size: 100% 100%;
  img{
  	width: 100%;
  	height: auto;
  }
}
.form_container {
  width: 370px;
  height: 210px;
  position: absolute;
  top: 20%;
  left: 34%;
  padding: 25px;
  border-radius: 5px;
  text-align: center;
}
.form_container .manage_tip .title {
  font-family: "Microsoft YaHei";
  font-weight: bold;
  font-size: 26px;
  color: #fff;
}
.loginForm {
  margin-top: 20px;
  background-color: #fff;
  padding: 20px 40px 20px 20px;
  border-radius: 5px;
  box-shadow: 0px 5px 10px #cccc;
}

.submit_btn {
  width: 100%;
}
.tiparea {
  text-align: right;
  font-size: 12px;
  color: #333;
  router-link{
		color: #409eff;
  }
}
</style>


