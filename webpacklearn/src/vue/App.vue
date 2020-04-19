<template>
	<div>
		<h1>{{message}}</h1>
		<button @click="butClick">按钮</button>
	</div>
</template>

<script>
	export default {
		name: 'App',
		data() {
			return {
				message: '哈哈哈'
			}
		},
		methods: {
			butClick() {
				console.log('按钮被点击')
			}
		}
	}
</script>

<style scoped>
	.title {
		color: green;
	}
</style>
