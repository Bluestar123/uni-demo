<template>
	<view>
		<view style='height: 100px;position: relative;overflow: hidden;'>
			<view :class="detail"  hover="true" hover-class="detail-hover" :style="{top:top,left:left}"></view>
			
			<view hover-stay-time='10' style='background: pink;height: 100px;' @touchend="tapEnd" @longpress="longpre" @touchstart="tapStart">
				sadfsadf
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				detail:'detail-view',
				top:'-999px',
				left:0
			};
		},
		methods:{
			tapStart(res){
				var x = res.touches[0].pageX-50;
				var y = res.touches[0].pageY -50
				this.top=y+'px'
				this.left=x+'px'
			},
			tapEnd(){
				this.detail='detail-view'
				this.top='-999px'
			},
			longpre(){
				this.detail='long'
				this.top=0
				this.left=0
			}
		}
	}
</script>

<style>
@-webkit-keyframes ripple {
    100% {
		width: 100%;
		-webkit-transform: scaleX(12);
		transform: scaleX(12);
		opacity: 0.6;
		background: gray;
    }
}

.detail-view{
	position: absolute;
	border-radius: 50%;
	opacity: 0.9;
    width: 100px;
    height: 100px;
    background: gray;
 }
 
/*hover-class需要放在.detail-view后，否则 background会被本身的detail-view的css覆盖*/
.detail-hover{
    opacity: 0.9;
    background: gray;
    animation: ripple 0.6s linear;
	-webkit-animation: ripple 0.6s linear;
}

.long{
	width: 100%;
	opacity: 0.6;
	height: 100px;
	background: gray;
}
</style>
