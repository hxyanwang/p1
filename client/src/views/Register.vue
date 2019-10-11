<template>
	<div class="register">
		<img src="../assets/bg.jpg" />
		<section class="form_container">
			<div class="manage_tip">
				<span class="title">11后台管理</span>
				<el-form :model="registerUser"  :rules="rules" ref="registerForm" label-width="80px" class="registerForm">
				  
					<el-form-item label="用户名" prop="user">
						<el-input  v-model="registerUser.name" placeholder="请输入用户名"></el-input>
					</el-form-item>
					<el-form-item label="邮箱" prop="email">
						<el-input  v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="pass">
						<el-input type="password"  v-model="registerUser.pass" placeholder="请输入密码"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="pass2">
						<el-input type="password"  v-model="registerUser.pass2" placeholder="请确认密码"></el-input>
					</el-form-item>
					
					<el-form-item label="选择身份" prop="identity">
						<el-select v-model="registerUser.identity" placeholder="请选择">
							<el-option label="管理员" value='admin'></el-option>
							<el-option label="访客" value='visitor'></el-option>
						</el-select>
					</el-form-item>
					
					<el-form-item>
						<el-button type="primary" class='submit_btn' @click="subForm('registerForm')">注册</el-button>
					</el-form-item>
				  
				</el-form>
			</div>
		</section>
	</div>
</template>

<script>
	export default {
		name:"register",
		components:{},
		data(){
			return{
				registerUser:{
					name:'',
					email:'',
					pass:'',
					pass2:'',
					identity:'',
				},
				rules:{
					
				},
			}
		},
		methods:{
		}
	}
</script>

<style scoped lang="scss">
	.register {
	  position: relative;
	  width: 100%;
	  height: 100%;
	  img{
		  width: 100%;
		  height: 100%;
	  }
	}
	.form_container {
	  width: 370px;
	  height: 210px;
	  position: absolute;
	  top: 10%;
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
	.registerForm {
	  margin-top: 20px;
	  background-color: #fff;
	  padding: 20px 40px 20px 20px;
	  border-radius: 5px;
	  box-shadow: 0px 5px 10px #cccc;
	}
	.submit_btn {
	  width: 100%;
	}
</style>
