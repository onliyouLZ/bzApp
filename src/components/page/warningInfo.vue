<template>
    <div id="warningInfo">
      <div id="offCanvasWrapper" class="mui-off-canvas-wrap mui-draggable mui-scalable">

        <aside id="offCanvasSide" class="mui-off-canvas-left">
          <div id="offCanvasSideScroll" class="mui-scroll-wrapper">
            <div class="mui-scroll">
              <div class="title" style="margin-bottom: 25px;">参数选择</div>
              <ul class="mui-table-view mui-table-view-chevron  mui-table-view-inverted">

                <li class="mui-table-view-cell mui-collapse mui-active"><a class="mui-navigate-right" href="#">日期</a>
                  <ul class="mui-table-view mui-table-view-chevron  mui-table-view-inverted">
                    <li class="mui-table-view-cell mui-radio">
                      <input name="radio" type="radio">近一周
                    </li>
                    <li class="mui-table-view-cell mui-radio">
                      <input name="radio" type="radio">近一月
                    </li>
                  </ul>
                </li>
                <li class="mui-table-view-cell mui-collapse">
                  <a class="mui-navigate-right" href="#">变量</a>
                  <ul class="mui-table-view mui-table-view-chevron  mui-table-view-inverted">
                    <li class="mui-table-view-cell mui-checkbox">
                      <input name="checkbox" type="checkbox">变量1名称
                    </li>
                    <li class="mui-table-view-cell mui-checkbox">
                      <input name="checkbox" type="checkbox">变量2名称
                    </li>
                  </ul>
                </li>
                <li class="mui-table-view-cell mui-collapse"><a class="mui-navigate-right" href="#">参数</a>
                  <ul class="mui-table-view mui-table-view-chevron  mui-table-view-inverted">
                    <li class="mui-table-view-cell mui-checkbox">
                      <input name="checkbox" type="checkbox">参数1名称
                    </li>
                    <li class="mui-table-view-cell mui-checkbox">
                      <input name="checkbox" type="checkbox">参数2名称
                    </li>
                  </ul>
                </li>
              </ul>
              <p style="margin: 10px 15px;">
                <button id="offCanvasHide" type="button" class="mui-btn mui-btn-danger mui-btn-block" style="padding: 5px 20px;">完成</button>
              </p>
            </div>
          </div>
        </aside>

        <div class="mui-inner-wrap">
          <header class="mui-bar mui-bar-nav">
            <a href="#offCanvasSide" class="mui-icon mui-action-menu mui-icon-bars mui-pull-left" style="color:white"></a>
            <a class="mui-action-back mui-btn mui-btn-link mui-pull-right">关闭</a>
            <h1 class="mui-title">预警消息</h1>
          </header>
          <div id="offCanvasContentScroll" class="mui-content mui-scroll-wrapper">
            <div class="mui-scroll">
              <div class="mui-content-padded">
                <p>右滑在侧边栏筛选条件和参数</p>
                <ul class="mui-table-view">

                  <li class="mui-table-view-cell">报警日期 <span class="mui-pull-right">2018-10-24</span></li>
                  <li class="mui-table-view-cell">报警时间<span class="mui-pull-right">10:24:58</span></li>
                  <li class="mui-table-view-cell">变量 <span class="mui-pull-right">GYTX</span></li>
                  <li class="mui-table-view-cell">报警文本 <span class="mui-pull-right">公用PCL通讯失败</span></li>
                  <li class="mui-table-view-cell">参数 <span class="mui-pull-right">2</span></li>

                </ul>

                <ul class="mui-table-view">

                  <li class="mui-table-view-cell">报警日期 <span class="mui-pull-right">2018-10-24</span></li>
                  <li class="mui-table-view-cell">报警时间<span class="mui-pull-right">10:24:58</span></li>
                  <li class="mui-table-view-cell">变量 <span class="mui-pull-right">GYTX</span></li>
                  <li class="mui-table-view-cell">报警文本 <span class="mui-pull-right">公用PCL通讯失败</span></li>
                  <li class="mui-table-view-cell">参数 <span class="mui-pull-right">2</span></li>

                </ul>

                <ul class="mui-table-view">

                  <li class="mui-table-view-cell">报警日期 <span class="mui-pull-right">2018-10-24</span></li>
                  <li class="mui-table-view-cell">报警时间<span class="mui-pull-right">10:24:58</span></li>
                  <li class="mui-table-view-cell">变量 <span class="mui-pull-right">GYTX</span></li>
                  <li class="mui-table-view-cell">报警文本 <span class="mui-pull-right">公用PCL通讯失败</span></li>
                  <li class="mui-table-view-cell">参数 <span class="mui-pull-right">2</span></li>

                </ul>

                <ul class="mui-table-view">

                  <li class="mui-table-view-cell">报警日期 <span class="mui-pull-right">2018-10-24</span></li>
                  <li class="mui-table-view-cell">报警时间<span class="mui-pull-right">10:24:58</span></li>
                  <li class="mui-table-view-cell">变量 <span class="mui-pull-right">GYTX</span></li>
                  <li class="mui-table-view-cell">报警文本 <span class="mui-pull-right">公用PCL通讯失败</span></li>
                  <li class="mui-table-view-cell">参数 <span class="mui-pull-right">2</span></li>

                </ul>

              </div>



            </div>
          </div>

          <div class="mui-off-canvas-backdrop"></div>
        </div>
      </div>
    </div>
</template>

<script>
  export default {
    name: "warning-info",
    mounted(){
      mui.init({

      });


      var offCanvasWrapper = mui('#offCanvasWrapper');
      //主界面容器
      var offCanvasInner = offCanvasWrapper[0].querySelector('.mui-inner-wrap');
      //菜单容器
      var offCanvasSide = document.getElementById("offCanvasSide");
      if (!mui.os.android) {
        var spans = document.querySelectorAll('.android-only');
        for (var i = 0, len = spans.length; i < len; i++) {
          spans[i].style.display = "none";
        }
      }
      //移动效果是否为整体移动
      var moveTogether = true;
      var classList = offCanvasWrapper[0].classList;
      mui.plusReady(function() {
        //菜单界面，‘关闭侧滑菜单’按钮的点击事件
        document.getElementById('offCanvasHide').addEventListener('tap', function() {
          offCanvasWrapper.offCanvas('close');
        });
        //主界面和侧滑菜单界面均支持区域滚动；
        mui('#offCanvasSideScroll').scroll();
        mui('#offCanvasContentScroll').scroll();
        //实现ios平台原生侧滑关闭页面；
        if (mui.os.plus && mui.os.ios) {
          mui.plusReady(function() { //5+ iOS暂时无法屏蔽popGesture时传递touch事件，故该demo直接屏蔽popGesture功能
            plus.webview.currentWebview().setStyle({
              'popGesture': 'none'
            });
          });
        }
      })
    }
  }
</script>

<style scoped>
  .mui-content .mui-table-view {
    margin-top: 15px;
    font-size:14px;
    /*touch-action: none;*/
  }

  html,
  body {
    background-color: #efeff4;
  }
  p {
    text-indent: 22px;
  }
  span.mui-icon {
    font-size: 14px;
    color: #007aff;
    margin-left: -15px;
    padding-right: 10px;
  }
  .mui-off-canvas-left {
    color: #fff;
  }
  .title {
    margin: 35px 15px 10px;
  }
  .title+.content {
    margin: 10px 15px 35px;
    color: #bbb;
    text-indent: 1em;
    font-size: 14px;
    line-height: 24px;
  }
  input {
    color: #000;
  }

  .mui-table-view-cell.mui-collapse .mui-table-view .mui-table-view-cell:after{
    background-color: #222;
  }

  .mui-table-view:before {
    position: absolute;
    right: 0;
    left: 0;
    height: 5px;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #F0AD4E;
    top: -1px;
  }
  #warningInfo{
    height: 100%;
  }
  #warningInfo .mui-bar-nav{
    background-color: #0091EE;
    color: #FFFFFF;
  }
  #warningInfo .mui-title,
  #warningInfo .mui-action-back,
  #warningInfo .mui-action-menu{
    color: #FFFFFF;
  }
</style>
