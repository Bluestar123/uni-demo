<template>
	<view>
		<rich-text :nodes="nodes"></rich-text>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				nodes:''
			};
		},
		onShow() {
			this.$nextTick(()=>{
				this.nodes = '<img src="http://p0.so.qhimgs1.com/bdr/_240_/t013b7da1db67a785ac.jpg" />'
			})
		}
	}
</script>

<style>

</style>
