<template>
	<view><img :src="src" @click="clickImg(src)" /></view>
</template>

<script>
export default {
	data() {
		return {
			src: '/static/1.png',
			array: ['111', '2222'],
			index: 0
		};
	},
	methods: {
		clickImg(src) {
			uni.previewImage({
				urls: [this.src],
				success() {
					
				}
			});
		}
	}
};
</script>

<style></style>
