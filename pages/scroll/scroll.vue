<template>
	<view style='text-align: center;'>
		<view v-for='(item,index) in 50' :key='index'>
			{{item}}
		</view>
		<view :style="{opacity:opacity, width:wid}" style='background: pink;position: fixed;top: 100upx;left: 0;color: red;text-align: center;'>王继辉</view>
	</view>
</template>

<script>

	export default {
		data() {
			return {
				opacity:0,
				wid:0
			};
		},
		onPageScroll(e) {
			console.log(e.scrollTop)
			
			if(e.scrollTop>=100){
				this.opacity = 1
				this.wid = '100%'
			}else if(0<e.scrollTop&&e.scrollTop<100){
				this.opacity = e.scrollTop/100
				this.wid = e.scrollTop + '%'
				
			}else if(e.scrollTop==0){
				this.opacity = 0
				this.wid = 0
			}
			console.log(this.wid)
		}
	}
</script>

<style>

</style>
