<template>
	<view>
		<map
			id="map"
			longitude="102.324520"
			latitude="40.099994"
			scale="4"
			@controltap="controltap"
			:polygons="polygons"
			@regionchange="regionchange"
			@markers="markers"
			@markertap="markertap"
			@tap='tapa'
			show-location
			style="width: 100%; height: 700px;"
		></map>
	</view>
</template>

<script>

const markersize = 30;

function range(start, edge, step) {
	for (var ret = []; (edge - start) * step > 0; start += step) {
		ret.push(start);
	}
	return ret;
}

function markers(northeast, southwest, scale, width, height) {
	const markerslng = ((northeast.longitude - southwest.longitude) * markersize) / width;
	const markerslat = ((northeast.latitude - southwest.latitude) * markersize) / height;

	const maxlon = northeast.longitude;
	const minlon = southwest.longitude;
	const maxlat = northeast.latitude;
	const minlat = southwest.latitude;

	const lons = range(minlon, maxlon, markerslng);
	const lats = range(minlat, maxlat, markerslat);

	let _markers = [];
	lons.forEach((lon, i) => {
		lats.forEach((lat, j) => {
			_markers.push({
				id: lon + ',' + lat,
				latitude: lat,
				longitude: lon,
				iconPath: '../../static/1.png',
				alpha: 0.1, //将图片设置为透明,通过开发者工具看不出效果,但真机是有效果的
				width: markersize,
				height: markersize
			});
		});
	});
	return _markers;
}

export default {
	data() {
		return {
			polygons: [],
			controls: [
				{
					id: 1,
					position: {
						left: 0,
						top: 300 - 50,
						width: 50,
						height: 50
					},
					clickable: true
				}
			],
			markers: []
		};
	},
	onReady(e) {
		this.createMarkers();
	},
	methods: {
		tapa(){
			console.log(2222222)
		},
		regionchange(e) {
			this.createMarkers();
		},
		markertap(e) {
			console.log(111111111111)
			console.log(e.markerId);
		},
		controltap(e) {
			console.log(222222222222)
			console.log(e.controlId);
		},

		createMarkers() {
			this.mapCtx = uni.createMapContext('map');
			const query = uni.createSelectorQuery();
			const map = query.select('#map').boundingClientRect();
			
			/* var query = uni.createSelectorQuery();
			var nodesRef = query.selectAll(".item");
			nodesRef.fields({
				dataset: true,
				rect:true
					
				},(result)=>{
					_this.elements=result
				}).exec()
			*/
			
			
			
			let that = this;

			that.mapCtx.getRegion({
				success(res1) {
					that.mapCtx.getScale({
						success(res2) {
							query.exec(res => {
								
								console.log(res)
								
								let width = res[0].width;
								let height = res[0].height;
								let _markers = markers(res1.northeast, res1.southwest, res2.scale, width, height);
								that.markers = _markers;
								
							});
						}
					});
				}
			});
		}
	}
};
</script>

<style></style>
