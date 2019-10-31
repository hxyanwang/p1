<template>
	<header class='head-nav'>
		<el-row type="flex" justify="space-between">
			<el-col :span='6' class='logo-container'>
				<img src="../assets/logo.png" class="logo" />
				<span class="title">1111aa111111</span>
			</el-col>
			<el-col :span='6'  class='user'>
				<div class="user-info">
					<img :src="user.avatar" class="avatar" />
					<div class="welcome">
						<p class="name comename">欢迎</p>
						<p class="name avatarname">{{user.name}}</p>
					</div>
					<span class="username">
						<el-dropdown trigger="click" @command="setLog">
							<span class="el-dropdown-link">
								<i class="el-icon-arrow-down el-icon--right"></i>
							</span>
							<el-dropdown-menu slot="dropdown">
								<el-dropdown-item command="info">个人信息</el-dropdown-item>
								<el-dropdown-item command="quit">退出</el-dropdown-item>
							</el-dropdown-menu>
						</el-dropdown>
					</span>
				</div>
			</el-col>
		</el-row>
	</header>
</template>

<script>
	export default {
		name:"head-nav",
		components:{
		},
		created() {
		},
		methods: {
			setLog(item){
				// console.log(item);
				switch (item){
					case 'info':
						this.showInfo()
						break;
					case 'quit':
						this.logOut()
						break;
				}
			},
			showInfo(){
				this.$router.push('infoshow')
			},
			logOut(){
				localStorage.removeItem('TOKEN')
				this.$store.dispatch('clearState');
				this.$router.push('login')
			}
		},
		computed:{
			user(){
				return this.$store.getters.user;
			}
		}
	}
</script>

<style scoped lang="scss">
	.head-nav {
		position: fixed;
		z-index: 999;
		width: 100%;
		height: 70px;
		min-width: 600px;
		padding: 5px;
		box-sizing: border-box;
		background: #324057;
		color: #fff;
		border-bottom: 1px solid #1f2d3d;
	}
	.logo-container {
	  line-height: 60px;
	  min-width: 400px;
	}
	.logo {
	  height: 50px;
	  width: 50px;
	  margin-right: 5px;
	  vertical-align: middle;
	  display: inline-block;
	}
	.title {
	  vertical-align: middle;
	  font-size: 22px;
	  font-family: "Microsoft YaHei";
	  letter-spacing: 3px;
	}
	.user {
	  line-height: 60px;
	  text-align: right;
	  float: right;
	  padding-right: 10px;
	}
	.avatar {
	  width: 40px;
	  height: 40px;
	  border-radius: 50%;
	  vertical-align: middle;
	  display: inline-block;
	}
	.welcome {
	  display: inline-block;
	  width: auto;
	  vertical-align: middle;
	  padding: 0 5px;
	}
	.name {
	  line-height: 20px;
	  text-align: center;
	  font-size: 14px;
	}
	.comename {
	  font-size: 12px;
	}
	.avatarname {
	  color: #409eff;
	  font-weight: bolder;
	}
	.username {
	  cursor: pointer;
	  margin-right: 5px;
	}
	.el-dropdown {
	  color: #fff;
	}
	.el-icon-arrow-down{
		color: white;
	}
</style>
