<template>
	<div class='index'>
		<headNav></headNav>
		初始化
		<span>111111</span>
	</div>
</template>

<script>
	import headNav from '../components/headNav'
	export default {
		name:"index",
		components:{
			headNav
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

</style>
