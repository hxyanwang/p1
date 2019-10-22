<template>
  <div id="app">
	<router-view></router-view>
  </div>
</template>


<script>


export default {
	name: "app",
	data() {
		return {
	
		};
	},
	created() {
		if(localStorage.TOKEN){
			const token = localStorage.TOKEN
			const decode = this.$jwt_decode(token);
			this.$store.dispatch('setAuthenticated',!this.isEmpty(decode))
			this.$store.dispatch('setUser',decode)
		}
	},
	methods:{
		isEmpty(value){
			return(
				value===undefined||
				value===null||
				(typeof value === 'object' && Object.keys(value).length===0)||
				(typeof value === 'string' && value.trim().length===0)
			)
		},
	}

};
</script>


<style lang="scss">
@import "common/sass/base.scss";
#app {
	height: 100%;
	width: 100%;
}
</style>
