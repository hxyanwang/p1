<template>
	<div class="menu_page">
		<el-row class="tac">
		  <el-col  >
		    <el-menu
				class="el-menu-vertical-demo"
				background-color="#324057"
				text-color='#fff'
				active-text-color="#409eff">
				<router-link to="home">
					<el-menu-item  index='home'>
						<i class="el-icon-document"></i>
						<span >主页</span>
					</el-menu-item>
				</router-link>
				<router-link to="infoshow">
					<el-menu-item index='infoshow' >
						<i class="el-icon-document"></i>
						<span >个人信息</span>
					</el-menu-item>
				</router-link>
				<router-link to="fundlist">
					<el-menu-item index='fundlist' >
						<i class="el-icon-document"></i>
						<span >资金管理</span>
					</el-menu-item>
				</router-link>
		    </el-menu>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	export default{
		name:'menu_page',
	}
</script>

<style>
	.el-col .el-menu{
		border: none;
		border-right:none;
	}
		
	.el-row,.el-col,.el-menu{
		height: 100%;
		width: 100%;
	}
	.menu_page{
		box-sizing: border-box;
		padding: 70px 0 0 0;
		height: 100%;
		width: 120px;
		z-index: 99;
		el-menu-item{
			height: 100%;
		}
	}
</style>
