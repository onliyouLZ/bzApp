<template>
  <div class="hello">
	  <div id="pullrefresh" class="mui-content mui-scroll-wrapper">
		  <div class="mui-scroll">
		  	<ul class="mui-table-view mui-table-view-striped mui-table-view-condensed">
				<li class="mui-table-view-cell mui-media" title="预警消息">
					<div class="mui-media-body">
						<div class="mui-table">
							<div class="mui-table-cell mui-col-xs-10">
								预警消息
								<p class="mui-h6 mui-ellipsis">这里是预警描述，这里是预警描述</p>
							</div>
							<div class="mui-table-cell mui-col-xs-2 mui-text-right">
								<span class="mui-h5">12:25</span>
							</div>
						</div>
					</div>
				</li>
				<li class="mui-table-view-cell mui-media" title="预警消息">
					<div class="mui-media-body">
						<div class="mui-table">
							<div class="mui-table-cell mui-col-xs-10">
								预警消息
								<p class="mui-h6 mui-ellipsis">这里是预警描述，这里是预警描述</p>
							</div>
							<div class="mui-table-cell mui-col-xs-2 mui-text-right">
								<span class="mui-h5">12:25</span>
							</div>
						</div>
					</div>
				</li>
				<li class="mui-table-view-cell mui-media" title="预警消息">
					<div class="mui-media-body">
						<div class="mui-table">
							<div class="mui-table-cell mui-col-xs-10">
								预警消息
								<p class="mui-h6 mui-ellipsis">这里是预警描述，这里是预警描述</p>
							</div>
							<div class="mui-table-cell mui-col-xs-2 mui-text-right">
								<span class="mui-h5">12:25</span>
							</div>
						</div>
					</div>
				</li>
				<li class="mui-table-view-cell mui-media" title="预警消息">
					<div class="mui-media-body">
						<div class="mui-table">
							<div class="mui-table-cell mui-col-xs-10">
								预警消息
								<p class="mui-h6 mui-ellipsis">这里是预警描述，这里是预警描述</p>
							</div>
							<div class="mui-table-cell mui-col-xs-2 mui-text-right">
								<span class="mui-h5">12:25</span>
							</div>
						</div>
					</div>
				</li>
			</ul>
		</div>
	 </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
    }
  },
	methods:{
		pullupRefresh: function() {
			let _this=this;
			_this.$mui.later(function() {
				_this.$mui('#pullrefresh').pullRefresh().endPullupToRefresh(true)
				_this.$mui.toast("刷新成功");
			}, 1500)

		},
		pulldownRefresh: function() {
			let _this=this;
			setTimeout(function(){
				_this.$mui('#pullrefresh').pullRefresh().endPulldownToRefresh()
				_this.$mui.toast("刷新成功");
			},1500)

		}
	},
	mounted() {
    this.$mui.ready(()=>{
		 	this.$mui.alert("1111111111");
			this.$mui.init({
				pullRefresh: {
					container: '#pullrefresh',
					down: {
						auto: true,//可选,默认false.首次加载自动上拉刷新一次
						callback: this.pulldownRefresh
					},
					up: {
						contentrefresh: '正在加载...',
						callback: this.pullupRefresh
					}
				}
			});
		 });
    this.$mui.plusReady(()=>{
      this.$mui.alert("22222222222")
    })
	},
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
