<template>
  <div>
    <div class="all_bg">
		<div id="allcanvas">
			<canvas id="canvas1" width="800" height="600"></canvas>
			<canvas id="canvas2" width="800" height="600"></canvas>
		</div>
	</div>
	<script src="/js/commonFunctions.js" type="type/javascript"></script>
	<script src="/js/background.js" type="text/javascript"></script>
	<script src="/js/main.js" type="text/javascript"></script>
	<script src="/js/ane.js" type="text/javascript"></script>
	<script src="/js/fruit.js" type="text/javascript"></script>
	<script src="/js/fishmom.js" type="text/javascript"></script>
	<script src="/js/collision.js" type="text/javascript"></script>
	<script src="/js/baby.js" type="text/javascript"></script>
	<script src="/js/data.js" type="text/javascript"></script>
	<script src="/js/wave.js" type="text/javascript"></script>
	<script src="/js/halo.js" type="text/javascript"></script>
	<script src="/js/dust.js" type="text/javascript"></script>
  </div>
</template>

<script>

export default {
  data: function () {
		return {
			drawed : false
		}
	},
	mounted: function() {
		drawed: true
	}
};
</script>

<style lang="scss" scoped>
		body {
			padding-top: 10px;
		}
		.all_bg{
			width: 800px;
			height: 600px;
			margin: 0px	auto;
		}
		#allcanvas{
			position: relative;
			width: 800px;
			height: 600px;
			margin: 0px;
		}
		#canvas1 {
			position: absolute;
			bottom: o;
			left: 0;
			z-index: 1;
		}
		#canvas2 {
			position: absolute;
			bottom: 0;
			left: 0;
			z-index: 0;
		}
</style>