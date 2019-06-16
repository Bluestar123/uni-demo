<template>
	<view>
		<checkbox-group @change="checkboxChange">
			<view>
				<label class="checkbox" style='background: pink;font-size:30rpx;'>
				  <checkbox value='5646' class="checkbox-hidden" />
				  <icon class="checkbox-nogroup-circle-icon" color='green' type="success" size="18" v-if="checked1"></icon>
				  <icon class="checkbox-nogroup-circle-icon" type="circle" size="18" v-if="!checked1"></icon>
				  圆形多选框
				</label>
			  </view>
		
		</checkbox-group>
    </view>
</template>

<script>
	export default {
		data() {
			return {
				checked1:false,
				checked2:false,
				checked3:false
			}
		},
		methods:{
			checkboxChange(e) {
				
				this.checked1=!this.checked1
				
			}
		}
	}
</script>

<style>
.checkbox {
  vertical-align: middle;
  display: inline-block;
  position: relative;
  padding-left: 20px;
}
 
.checkbox-hidden {
  position: absolute;
  left: -9999px;
}
 
.checkbox-nogroup-circle-icon {
  position: absolute;
  top: 50%;
  margin-top: -9px;
  left: 0px;
  vertical-align: middle;
  display: inline-block;
  border: none;
  width: 18px;
  height: 18px;
  line-height: 18px;
}

</style>
