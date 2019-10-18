<template>
	<div class="register">
		<img src="../assets/bg.jpg" />
		<section class="form_container">
			<div class="manage_tip">
				<span class="title">11后台管理</span>
				<el-form :model="registerUser"  :rules="rules" ref="registerUser" label-width="80px" class="registerForm">
				  
					<el-form-item label="用户名" prop="name">
						<el-input  v-model="registerUser.name" placeholder="请输入用户名"></el-input>
					</el-form-item>
					<el-form-item label="邮箱" prop="email">
						<el-input  v-model="registerUser.email" placeholder="请输入邮箱"></el-input>
					</el-form-item>
					<el-form-item label="密码" prop="password">
						<el-input type="password"  v-model="registerUser.password" placeholder="请输入密码"></el-input>
					</el-form-item>
					<el-form-item label="确认密码" prop="password2">
						<el-input type="password"  v-model="registerUser.password2" placeholder="请确认密码"></el-input>
					</el-form-item>
					
					<el-form-item label="选择身份" prop="identity" >
						<el-select v-model="registerUser.identity" placeholder="请选择">
							<el-option label="管理员" value='admin'></el-option>
							<el-option label="访客" value='visitor'></el-option>
						</el-select>
					</el-form-item>
					
					<el-form-item>
						<el-button type="primary" class='submit_btn' @click="subForm">注册</el-button>
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
			let validatePass = (rule, value, callback) => {
			    if (value !== this.registerUser.password) {
					callback(new Error('密码不一致'));
			    } else {
					callback();
			    }
			};
			return{
				registerUser:{},
				rules:{
					name:[
						{
							required: true, 
							message: '用户名不能为空', 
							trigger: 'blur'
						},
						{
							min:2,
							max:30,
							message: '长度2-30',
							trigger: 'blur'
						}
					],
					email:[
						{
							required: true, 
							message: '邮箱不能为空', 
							trigger: 'blur'
						},
						{
							type:'email',
							message: '邮箱格式不对', 
							trigger: 'blur'
						},
					],
					password:[
						{
							required: true, 
							message: '密码不能为空', 
							trigger: 'blur'
						},
						{
							min:6,
							max:18,
							message: '长度6-18',
							trigger: 'blur'
						}
					],
					password2:[
						{
							required: true, 
							message: '确认密码不能为空', 
							trigger: 'blur'
						},
						{ 
							validator: validatePass, 
							trigger: 'blur' ,
						}
					],
					identity:[
						{
							required: true, 
							message: '选择身份', 
							trigger: 'change' ,
						}
					]
				},
			}
		},
		methods:{
			subForm(obj){
				// if(!this.registerUser.identity){
				// 	alert('身份没选');
				// 	return
				// }
				this.$refs['registerUser'].validate(valid => {
					if (valid) {
						alert('submit!');
						this.$axios.post("/api/users/register",this.registerUser)
							.then(res=>{
								console.log(res)
								this.$message({
									message:'成功',
									type:'success'
								})
							})
							.catch(err=>{
								console.log(err)
								this.$message({
									message:'失败',
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
	}
</script>

<style scoped lang="scss">
	.register {
	  position: relative;
	  width: 100%;
	  height: auto;
	  img{
		  width: 100%;
		  height: auto;
	  }
	}
	.form_container {
	  width: 370px;
	  height: 210px;
	  position: absolute;
	  top: 10%;
	  left: 0;
	  right: 0;
	  margin: auto;
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
