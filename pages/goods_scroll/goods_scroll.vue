<template>
	<view class="container">  
	
			<picker :value="index" :range="qqqq" @change="changeServer" range-key="text">
				<view>picker组件</view>
			</picker>
			
		  <!--左侧栏-->
		  <scroll-view class='scroll_left' scroll-y="true" :style="{height:winHeight+'px'}" scroll-with-animation="true" :scroll-top="scrollTop">
			<view class="nav_left"> 
			  <block v-for="(item,index) in list" :key="index">  
				<!--当前项的id等于item项的id，那个就是当前状态-->  
				<!--用data-index记录这个数据在数组的下标位置，使用data-id设置每个item的id值，供打开2级页面使用-->  
				<view class="nav_left_items" :class="[curNav == index ? 'active' : '']" @tap="switchRightTab" :data-index="index" id="index">{{item[0].name}}</view>  
			  </block>  
			</view>
		  </scroll-view>

		  <!--右侧栏-->
		  <scroll-view scroll-y="true" class="scroll_right" :style="{height:winHeight+'px'}" :scroll-into-view="scrollTopId" scroll-with-animation="true" @scroll="scroll">
			<view class="nav_right"> 
			  <view class='mink' v-for="(item,index) in list" :key="index">
				<view class='minl' :id='index'>{{item[0].name}}</view>
				  <block v-for="(ite,i) in item" :key="i" > 
					<view class="nav_right_items" v-if="index>0">  
					  <navigator url="../detail/detail" hover-class="other-navigator-hover">
						<view>   
						  <image :src="ite.picture"></image>
						  <view >  
							<text>{{ite.desc}}</text>  
						  </view> 
						</view>  
					  </navigator>  
					</view>      
				  </block> 
				</view>
			  <view style="width:100%;height:30rpx;background:#f0f4f7"></view>       
			</view>
		  </scroll-view>
		</view>
</template>

<script>
var list = [
    {
      'A': [
        { name: '白酒' },
        { 'picture': '/pages/tttt/img/demo1.png', 'desc': '葡萄酒' },
        { 'picture': '../../img/56668c04N5cb325b7.jpg', 'desc': '洋酒' },
        { 'picture': '../../img/586e055eNf678fd52.png', 'desc': '汾酒' },
        // { 'picture': '../../img/596d6f4eNb62c24c1.jpg', 'desc': '汾酒' }
      ],
      'B': [
        { name: '白酒1' },
        { 'picture': '../../img/55ac9689Ncc876cf1.jpg', 'desc': '葡萄酒' },
        { 'picture': '../../img/56668c04N5cb325b7.jpg', 'desc': '洋酒' },
        { 'picture': '../../img/586e055eNf678fd52.png', 'desc': '汾酒' },
        { 'picture': '../../img/586e055eNf678fd52.png', 'desc': '汾酒' },
        { 'picture': '../../img/586e055eNf678fd52.png', 'desc': '汾酒' },
        { 'picture': '../../img/596d6f4eNb62c24c1.jpg', 'desc': '汾酒' }
      ],
      'C': [
        { name: '白酒2' },
        { 'picture': '../../img/55ac9689Ncc876cf1.jpg', 'desc': '葡萄酒' },
        { 'picture': '../../img/56668c04N5cb325b7.jpg', 'desc': '洋酒' },
        { 'picture': '../../img/586e055eNf678fd52.png', 'desc': '汾酒' },
        { 'picture': '../../img/596d6f4eNb62c24c1.jpg', 'desc': '汾酒' }
      ],
      'D': [
        { name: '白酒3' },
        { 'picture': '../../img/55ac9689Ncc876cf1.jpg', 'desc': '葡萄酒' },
        { 'picture': '../../img/56668c04N5cb325b7.jpg', 'desc': '洋酒' },
        { 'picture': '../../img/586e055eNf678fd52.png', 'desc': '汾酒' },
        { 'picture': '../../img/596d6f4eNb62c24c1.jpg', 'desc': '汾酒' }
      ],
      'E': [
        { name: '白酒4' },
        { 'picture': '../../img/55ac9689Ncc876cf1.jpg', 'desc': '葡萄酒' },
        { 'picture': '../../img/56668c04N5cb325b7.jpg', 'desc': '洋酒' },
        { 'picture': '../../img/586e055eNf678fd52.png', 'desc': '汾酒' },
        { 'picture': '../../img/596d6f4eNb62c24c1.jpg', 'desc': '汾酒' }
      ],
      'F': [
        { name: '白酒5' },
        { 'picture': '../../img/55ac9689Ncc876cf1.jpg', 'desc': '葡萄酒' },
        { 'picture': '../../img/56668c04N5cb325b7.jpg', 'desc': '洋酒' },
        { 'picture': '../../img/586e055eNf678fd52.png', 'desc': '汾酒' },
        { 'picture': '../../img/596d6f4eNb62c24c1.jpg', 'desc': '汾酒' }
      ],
      'G': [
        { name: '白酒6' },
        { 'picture': '../../img/55ac9689Ncc876cf1.jpg', 'desc': '葡萄酒' },
        { 'picture': '../../img/56668c04N5cb325b7.jpg', 'desc': '洋酒' },
        { 'picture': '../../img/586e055eNf678fd52.png', 'desc': '汾酒' },
        { 'picture': '../../img/596d6f4eNb62c24c1.jpg', 'desc': '汾酒' }
      ],
      'H': [
        { name: '白酒7' },
        { 'picture': '../../img/55ac9689Ncc876cf1.jpg', 'desc': '葡萄酒' },
        { 'picture': '../../img/56668c04N5cb325b7.jpg', 'desc': '洋酒' },
        { 'picture': '../../img/586e055eNf678fd52.png', 'desc': '汾酒' },
        { 'picture': '../../img/596d6f4eNb62c24c1.jpg', 'desc': '汾酒' }
      ],
      'I': [
        { name: '白酒8' },
        { 'picture': '../../img/55ac9689Ncc876cf1.jpg', 'desc': '葡萄酒' },
        { 'picture': '../../img/56668c04N5cb325b7.jpg', 'desc': '洋酒' },
        { 'picture': '../../img/586e055eNf678fd52.png', 'desc': '汾酒' },
        { 'picture': '../../img/596d6f4eNb62c24c1.jpg', 'desc': '汾酒' }
      ],
      'J': [
        { name: '白酒9' },
        { 'picture': '../../img/55ac9689Ncc876cf1.jpg', 'desc': '葡萄酒' },
        { 'picture': '../../img/56668c04N5cb325b7.jpg', 'desc': '洋酒' },
        { 'picture': '../../img/586e055eNf678fd52.png', 'desc': '汾酒' },
        { 'picture': '../../img/596d6f4eNb62c24c1.jpg', 'desc': '汾酒' }
      ],
      'K': [
        { name: '白酒10' },
        { 'picture': '../../img/55ac9689Ncc876cf1.jpg', 'desc': '葡萄酒' },
        { 'picture': '../../img/56668c04N5cb325b7.jpg', 'desc': '洋酒' },
        { 'picture': '../../img/586e055eNf678fd52.png', 'desc': '汾酒' },
        { 'picture': '../../img/596d6f4eNb62c24c1.jpg', 'desc': '汾酒' }
      ],
      'L': [
        { name: '白酒11' },
        { 'picture': '../../img/55ac9689Ncc876cf1.jpg', 'desc': '葡萄酒' },
        { 'picture': '../../img/56668c04N5cb325b7.jpg', 'desc': '洋酒' },
        { 'picture': '../../img/586e055eNf678fd52.png', 'desc': '汾酒' },
        { 'picture': '../../img/596d6f4eNb62c24c1.jpg', 'desc': '汾酒' }
      ],
      'M': [
        { name: '白酒12' },
        { 'picture': '../../img/55ac9689Ncc876cf1.jpg', 'desc': '葡萄酒' },
        { 'picture': '../../img/56668c04N5cb325b7.jpg', 'desc': '洋酒' },
        { 'picture': '../../img/586e055eNf678fd52.png', 'desc': '汾酒' },
        { 'picture': '../../img/596d6f4eNb62c24c1.jpg', 'desc': '汾酒' }
      ]
    }
  ]
	export default {
		data() {
			return {
				qqqq:[
					{text:'1111'},
					{text:'1111'},
					{text:'1111'}
				],
				index:0,
				winHeight:0,
				// 左侧点击类样式
				curNav: 'A',
				scrollTop: 0,
				// 定义一个空数组，用来存放右侧滑栏中每一个商品分类的 Height
				listHeight: '',
				scrollTopId:'',
				right_contentHeight:'',
				right_titleHeight:''
			};
		},
		methods:{
			changeServer(){
				
			}
		},
		onReady: function () {
			var that = this;
			// 定义右侧标题的 rpx 高度 和 px 高度
			var right_titleRpxHeight = 60;
			var right_titleHeight;
			// 定义右侧单个商品的 rpx 高度 和 px 高度
			var right_contentRpxHeight = 180;
			var right_contentHeight;
			// 定义左侧单个tab的 rpx 高度 和 px 高度
			var left_titleRpxHeight = 140;
			var left_titleHeight;
			//  获取可视区屏幕高度
			wx.getSystemInfo({
			  success: function (res) {
				// percent 为当前设备1rpx对应的px值
				var percent = res.windowWidth / 750;
				
				this.winHeight=res.windowHeight
				this.right_titleHeight=Number(right_titleRpxHeight * percent)
				this.right_contentHeight=Number(right_contentRpxHeight * percent)
				this.left_titleHeight= Number(left_titleRpxHeight * percent)
				
			  }
			})
			// 把请求到的 list 中的数据赋值给  listChild1
			var listChild1 = list[0];
			// 定义一个 names ，用于存放 scroll-into-view 使用的 id
			var names = '';
			// 循环 listChild1 中的每一项
			for (var item in listChild1) {
			  // 把 listChild1 中每一项的键值用“：”（便于后期处理）分隔开，存入 names 中，数据格式见图‘names中的数据’
			  names += ":" + item;
			  // 计算右侧每一个分类的 Height 。
			  // listChild1 下的每一个 item 中包含该分类的 title，所以 listChild1[item].length 需要减一 
			  // 右侧每一个分类中每一行放两个商品，所以 this.data.right_contentHeight 除二
			  // 最后加上 right_titleHeight，此时 height 为右侧一个完整分类的高度
			  var height = (listChild1[item].length - 1) * this.right_contentHeight / 2 + this.right_titleHeight;
			  // 同上面 names 的道理，把每一个 height 用“：”隔开放入 listHeight 中
			  this.listHeight += ":" + height;
			  
				// 把 listChild1 赋值给 list ，供 wxml 中循环使用
				this.list= listChild1
				
			  
			}
			// 把 names 的数据切成数组
			var names = names.substring(1).split(':');
			
			this.names=names
			
		  },
		  methods:{
			  scroll(event) {
				// 把 listHeight 切割成数组
				var height = this.data.listHeight.substring(1).split(':');
				// 定义一个 index 供左侧边栏联动使用
				var index = 1;
				var num = 0;
				for (var i = 0; i < height.length; i++) {
				  // 累计右侧滑栏滚动上去的每一个分类的 Height
				  num += parseInt(height[i]);
				  // 循环判断 num 是否大于右侧滑栏滚动上去的 Height ，然后 get 到 i 值赋给 index
				  if (num > event.detail.scrollTop) {
					index = i + 1;
					// 如果右侧滑栏滚动高度小于单个类别高度的 1/2 时，index 为 0
					if (event.detail.scrollTop < height[0] / 2) {
					  index = 0;
					}
					break;
				  }
				}
				// 定义并设置左侧边栏的滚动高度
				var left_scrollTop = this.data.left_titleHeight * index
				
				this.scrollTop=left_scrollTop
				  // 动态给左侧滑栏传递对应该项的 id，用于高亮效果显示
				this.curNav=this.data.names[index-1]
				
			  },
			  //点击左侧 tab ，右侧列表相应位置联动 置顶
			  switchRightTab: function (e) {
				var id = e.target.id;
				
				this.scrollTopId=id
				  // 左侧点击类样式
				this.curNav= id
				
			  }
		  }
	}
</script>

<style>
/*总体主盒子*/  
.container {  
  position: relative;  
  width: 100%;  
  height: 1220rpx;  
  background-color: #f0f4f7;  
  color: #939393;  
}  
/*左侧栏主盒子*/  
.nav_left{  
  /*设置行内块级元素（没使用定位）*/  
  display: inline-block;  
  width: 100%;  
  height: 100%;  
  /*主盒子设置背景色为灰色*/  
  background: #fff;  
  text-align: center;  
  /* position: fixed;  */
  left: 0;
  top: 0;
  border-top: 1rpx solid #dedede;
}  
/*左侧栏list的item*/  
.nav_left .nav_left_items{  
  background: #fff;
  /*每个高30px*/  
  height: 80rpx;  
  /*垂直居中*/  
  line-height: 80rpx;  
  /*再设上下padding增加高度，总高42px*/  
  padding: 15rpx 0;  
  /*只设下边线*/  
  border-bottom: 1px solid #dedede;  
  /*文字14px*/  
  font-size: 29rpx;
  color: #101010;  
  font-weight: 700;
}  
/*左侧栏list的item被选中时*/  
.nav_left .nav_left_items.active{  
  /*背景色变成白色*/  
   background: #f0f4f7;
   color: #ed1000;   
}  
  
/*右侧栏主盒子*/  
.scroll_right{  
  /*右侧盒子使用了绝对定位*/  
  position: fixed;
  top: 0;  
  right: 0; 
  overflow: auto; 
  flex: 1;  
  /*宽度75%，高度占满，并使用百分比布局*/  
  width: 75%;  
  height: 100%;   
  padding: 20rpx;  
  box-sizing: border-box;  
  background-color: #f0f4f7;
  border-top: 1rpx solid #dedede;
} 
.mink::after{
  display:block;content:'';clear:both;
}
.jiul,.jiul image{
  width: 100%;
  height: 170rpx;
}
.minl{
  font-size: 29rpx;
  color: #777;
  text-align: left;
  line-height: 60rpx;
  float: left;
  background: #f0f4f7; 
  width: 100%;
  /* height: 50rpx;  */
} 
.mink{
  width: 100%;
  background: #fff;
  height: 100%;
}
/*右侧栏list的item*/  
.nav_right_items{  
  /*浮动向左*/  
   float: left;   
  /*每个item设置宽度是33.33%*/  
  width: 50%;  
  /* height: 160rpx;   */
  text-align: center; 
  color: #4a4a4a; 
  background: #fff;
}  
.nav_right_items image{  
  /*被图片设置宽高*/  
  width: 60px;  
  height: 50px; 
  margin-top: 15rpx; 
}  
.nav_right_items text{  
  /*给text设成块级元素*/  
  display: block;  
  margin-top: 5rpx;  
  margin-bottom: 10rpx;
  font-size: 26rpx;  
  /*设置文字溢出部分为...*/  
  overflow: hidden;  
  white-space: nowrap;  
  text-overflow: ellipsis;  
}
/** 自定义其他点击态样式类 **/
.other-navigator-hover{
  background:#fff;
}

.scroll_left{
  width:25%;
  height:100%;
  background:#fff;
  text-align:center; 
  position: fixed;
  left: 0;top: 0
}
</style>
