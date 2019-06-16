<template>
    <view>
        <img :src="src" @click="clickImg(src)">
        <view>
			<!-- 放大图片 -->
			<big-img v-if="showImg" @clickit="viewImg" :imgSrc="imgSrc"></big-img>
		</view>
    </view>
</template>

<script>
import BigImg from '../../components/img.vue';
    export default {
        data() {
            return {       
				src:'http://www.lyy99.com/uploads/2017/04/271751556699.jpg',
                showImg:false,
                imgSrc: ''
            }
        },
        components: {
            'big-img':BigImg
        },
        methods: {
            clickImg(e) {
				console.log(e)
                this.showImg = true;
                // 获取当前图片地址
                this.imgSrc = e
            },
            viewImg(){
                this.showImg = false;
            },
        }
    }
</script>