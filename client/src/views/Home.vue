<template>
	<div class="home">
	    <div class="container">
			<img src="../assets/showcase.png" />
	        <h1 class="title">11111</h1>
	        <p class="lead"> home </p>
	    </div>
	</div>
</template>

<script>
</script>

<style scoped lang="scss">
	.home {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.container {
		width: 100%;
		height: 100vh;
		box-sizing: border-box;
		padding-top: 100px;
		background-color: rgba(0, 0, 0, 0.7);
		text-align: center;
		color: white;
		img{
			height: 100%;
			width: 100%;
			position: absolute;
			top: 0;
			left: 0;
			z-index: -1;
		}
	}
	.title {
		font-size: 30px;
	}
	.lead {
		margin-top: 50px;
		font-size: 22px;
	}
</style>
