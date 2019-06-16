<template>
	<view>
		<scroll-view scroll-y="true" class="scroll-content" @scrolltoupper="handleRefresh" @scrolltolower="handleReachBottom">
			<view v-show="loadingRefreshFlag" class="load-text">
				<uni-load-more status="loading" :content-text="contentText" />
			</view>

			<view v-for='(item,index) in 100' :key='index'>
				{{item}}
			</view>

			<view v-show="loadingMoreFlag" class="load-more">
				<uni-load-more status="loading" :content-text="contentText" />
			</view>

		</scroll-view>

	</view>
</template>

<script>
	import uniLoadMore from '@/components/uni-load-more.vue';
	export default {
		data() {
			return {
				loadingRefreshFlag: false, // 下拉刷新数据标志
				loadingMoreFlag: false, // 上来加载标志
				contentText: {
					contentdown: '数据加载中',
					contentrefresh: '数据刷新中',
					contentnomore: '没有更多'
				},
			}
		},
		components: {
			uniLoadMore
		},
		onPullDownRefresh() {
			// setTimeout(()=>{
			// 	uni.stopPullDownRefresh()
			// },3000)
		},
		methods: {
			// 下拉刷新
			handleRefresh() {
				this.loadingRefreshFlag = true;
				setTimeout(() => {
					this.loadingRefreshFlag = false;
				}, 2000);
			},
			// 下拉加载
			handleReachBottom() {
				this.loadingMoreFlag = true;
				setTimeout(() => {
					this.loadingMoreFlag = false;
				}, 2000);
			},
		}
	}
</script>

<style lang="scss">
	.scroll-content {
		width: 100%;
		height: calc(100vh - 330upx);
		flex: 1;
		background-color: #F0F0F0;

		.load-text {
			width: 100%;
			text-align: center;
			padding-top: 20upx;
			box-sizing: border-box;
		}

		.load-more {
			width: 100%;
			text-align: center;
			padding-bottom: 20upx;
			box-sizing: border-box;
		}

	}
</style>
