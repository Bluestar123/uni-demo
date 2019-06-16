<template>
	<view>
		
		<button type="primary" @tap='toParse'>toParse</button>

	</view>
</template>

<script>
	export default {
		onShow() {
			console.log(3333333333333333)
			console.log(plus.device.uuid)
		},
		methods:{
			toParse(){
				uni.navigateTo({
					url:'../parse/parse'
				})
			}
		}
	}
</script>

<style>
#video{
	width: 100%;
}
</style>
