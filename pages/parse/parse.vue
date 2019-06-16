<template>
	<view>
		<button type="primary" @tap='back'>back</button>

		<view>
			<u-parse :content="htmlString"/>
		</view>
	</view>
</template>
<script>
	import uParse from '@/components/u-parse1/u-parse.vue'
	export default {
		components:{uParse},
		data() {
			return {
				htmlString:''
			};
		},
		onLoad() {
			this.getData()
		},
		methods:{
			back(){
				
				uni.navigateBack()
			},
			getData(){
				this.htmlString = '<table align="center" cellspacing="0" cellpadding="0" align="center"><thead style="margin: 0px; padding: 0px;background:lightBlue"><tr style="margin: 0px; padding: 0px;"><td nowrap="" align="center" valign="middle" style="padding: 0px 9px; border-color: windowtext; margin: 0px;"><p style="margin-bottom: 0.1px; clear: both; line-height: normal;"><span style="margin: 0px; padding: 0px; letter-spacing: -1px; font-family: 宋体, SimSun;">单位名称</span></p></td><td nowrap="" align="center" valign="middle" style="padding: 0px 9px; border-top-color: windowtext; border-right-color: windowtext; border-bottom-color: windowtext; border-left: none; margin: 0px;"><p style="margin-bottom: 0.1px; clear: both; line-height: normal;"><span style="margin: 0px; padding: 0px; letter-spacing: -1px; font-family: 宋体, SimSun;">队名</span></p></td><td width="37" nowrap="" align="center" valign="middle" style="padding: 0px 9px; border-top-color: windowtext; border-right-color: windowtext; border-bottom-color: windowtext; border-left: none; margin: 0px;"><p style="margin-bottom: 0.1px; clear: both; line-height: normal;"><span style="margin: 0px; padding: 0px; letter-spacing: -1px; font-family: 宋体, SimSun;">参赛队编号</span></p></td><td align="center" valign="middle" style="background:pink;padding: 0px 9px; border-top-color: windowtext; border-right-color: windowtext; border-bottom-color: windowtext; border-left: none; margin: 0px;"><p style="margin-bottom: 0.1px; clear: both; line-height: normal;"><span style="margin: 0px; padding: 0px; letter-spacing: -1px; font-family: 宋体, SimSun;">抽签分组情况</span></p></td></tr></thead><tbody style="margin: 0px; padding: 0px;"><tr style="margin: 0px; padding: 0px;"><td nowrap="" align="center" valign="middle" style="padding: 0px 9px; border-top: none; border-right-color: windowtext; border-bottom-color: windowtext; border-left-color: windowtext; margin: 0px;background:pink;"><p style="margin-bottom: 0.1px; clear: both; text-align: justify; line-height: normal;"><span style="margin: 0px; padding: 0px; letter-spacing: -1px; font-family: 宋体, SimSun;">安徽耀峰雷达科技有限公司</span></p></td><td nowrap="" align="center" valign="middle" style="padding: 0px 9px; border-top: none; border-right-color: windowtext; border-bottom-color: windowtext; border-left: none; margin: 0px;"><p style="margin-bottom: 0.1px; clear: both; line-height: normal;"><span style="margin: 0px; padding: 0px; letter-spacing: -1px; font-family: 宋体, SimSun;">耀峰雷达队</span></p></td><td nowrap="" align="center" valign="middle" style="padding: 0px 9px; border-top: none; border-right-color: windowtext; border-bottom-color: windowtext; border-left: none; margin: 0px;"><p style="margin-bottom: 0.1px; clear: both; line-height: normal;"><span style="margin: 0px; padding: 0px; letter-spacing: -1px; font-family: 宋体, SimSun;">TC01</span></p></td><td align="center" valign="middle" style="padding: 0px 9px; border-top: none; border-right-color: windowtext; border-bottom-color: windowtext; border-left: none; margin: 0px;"><p style="margin-bottom: 0.1px; clear: both; line-height: normal;"><span style="margin: 0px; padding: 0px; letter-spacing: -1px; font-family: 宋体, SimSun;">第二组</span></p></td></tr></tbody></table>'
			}
		}
	}
</script>

<style>

</style>
