<template>
	<div class='index'>
		<headNav></headNav>
		<div class="body">
			<leftMenu></leftMenu>
			<router-view></router-view>
		</div>
		
	</div>
</template>

<script>
	import headNav from '../components/HeadNav'
	import leftMenu from '../components/LeftMenu'
	export default {
		name:"index",
		components:{
			headNav,
			leftMenu
		},
		created() {
			this.getToken()
		},
		methods: {
			getToken(){
				const token=localStorage.getItem('TOKEN');
				// console.log(token);
			}
		}
	}
</script>

<style lang="scss">
	.index,{
		height: 100%;
		width: 100%;
		overflow:hidden;
	}
	.body{
		height: 100%;
		display: flex;
	}
</style>
