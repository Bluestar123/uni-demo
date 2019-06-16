<template>
	<view class='ul'>
		<view
		class='li'
		v-for='(item,index) in list'
		:class="{move:candelete.id==item.id}"
		@touchstart="touchStart($event,item)"
		@touchend='touchEnd($event,item)'
		:key='index'
		>
		{{item.text}}{{item.id}}
		<view class='del' @click='deleteItem(index)'>
		删除
		</view>
		</view>
	</view>
</template>

<script>
export default{
	data(){
		return{
			a:false,
			list:[
				{
					id:1,
					text:'左滑'
				},
				{
					id:2,
					text:'左滑'
				},
				{
					id:3,
					text:'左滑'
				},
				{
					id:4,
					text:'左滑'
				},
				{
					id:5,
					text:'左滑'
				},
				{
					id:6,
					text:'左滑'
				}

			],
			clientNum:{},//记录开始滑动（x1）结束滑动（x2）的指针位置
			candelete:{}//滑动的item
		}
	},
	methods:{
		deleteItem(index){
			this.list.splice(index,1)
		},
		touchStart(e){
			let touchs = e.mp.touches[0]
			//记录开始的滑动位置
			this.clientNum.x1=touchs.pageX
			this.candelete={}
		},
		touchEnd(e,item){
			let touchs = e.mp.changedTouches[0]

			//结束的滑动位置
			this.clientNum.x2= touchs.pageX
			this.candelete={}
			//判断滑动距离大于50 为滑动成功
			if(this.clientNum.x2<this.clientNum.x1 && Math.abs(this.clientNum.x1)-Math.abs(this.clientNum.x2)>50){
				
				this.candelete=item
			}else if(this.clientNum.x2>this.clientNum.x1 && Math.abs(this.clientNum.x2) - Math.abs(this.clientNum.x1)>10){
				
				this.candelete={}
			}
		}
	}
}
</script>

<style scoped lang="scss">
view{
	box-sizing: border-box;
}
$height:'60upx';

.li{
	background:pink;
	border-bottom:1upx solid #elelel;
	light-height:$height;
	position:relative;
	transform:translateX(0);
	transition:all .3s;
	padding-left:10upx;
	margin-bottom:10upx;
	height:$height;
}

.ul{
	overflow:hidden; /*隐藏 横向滚动条*/
}
.li.move{
	transform:translateX(-120upx);/*滑动后 x轴左移60px */
}

.del{
	font-size: 30upx;
	position:absolute;
	top:0;
	right:0;
	z-index:3;
	width:120upx;
	height: 100%;
	line-height:60upx;
	text-align:center;
	color:#fff;
	background-color:#ff5b45;
	transform:translateX(120upx);/*默认x移动60px 隐藏*/
}
</style>