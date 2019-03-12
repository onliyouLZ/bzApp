<template>
    <div id="home">
        <div class="mui-panel home-bg">

          <div class="mui-panel-head">

            <h4 id='pumpPicker' class="mui-text-center">站点选择</h4>
          </div>
          <div class="mui-panel-body" style="height:100px;padding: 0;">
            <div style="float: left;width: 25%;">
              <div style="background:rgba(0,0,0 , 0.1) ;padding: 1px;font-size: 12px;">
                <div>武汉</div>
                <div>12-23 ℃ | 小雨 </div>
                <hr>
                <div>
                  <div class="mui-inline rain-panel"></div>
                  <div class="mui-inline">
                    <div>降雨量</div>
                    <div>8.9mm</div>
                  </div>

                </div>

              </div>
            </div>

            <div style="float: left;width: 50%;height: 100px;font-size: 12px;">
              <div class="river-panel" >

                <div style="position: absolute;left:10%; top :15%;text-align: center;">内江水位 <br><span style="font-size: 16px;">88.88</span>m</div>
                <div style="position: absolute;right:10%; top :15%;text-align: center;">外江水位 <br><span style="font-size: 16px;">88.88</span>m</div>

              </div>
            </div>

            <div style="float: left;width: 25%;">
              <div style="font-size: 12px;">

                <div id='icon-task' >
                  巡检任务<br>
                  三条未完成

                </div>
                <div id="icon-machine" >
                  3/4台<br>
                  开机台数
                </div>
              </div>
            </div>



          </div>
          <div class="mui-panel-footer" style="padding-top:10px;">
            <table class=" table table-bordered mui-text-center " style="width: 100%;font-size: 12px;">

              <tbody>
              <tr>
                <th>栅前水位(m)</th>
                <th>栅后水位(m)</th>
                <th>用电量(KM/h)</th>
                <th>抽排量(m³)</th>
              </tr>
              <tr>
                <td>{{currentData["1-1-1-Fix32_FIX_DZ_LL_F_CV"] ? currentData["1-1-1-Fix32_FIX_DZ_LL_F_CV"].fdata : '暂无数据'}}</td>
                <td>{{currentData["1-1-1-Fix32_FIX_JZ1_LL_F_CV"] ? currentData["1-1-1-Fix32_FIX_JZ1_LL_F_CV"].fdata : '暂无数据'}}</td>
                <td>{{currentData["1-1-1-Fix32_FIX_JZ2_LL_F_CV"] ? currentData["1-1-1-Fix32_FIX_JZ2_LL_F_CV"].fdata  : '暂无数据'}}</td>
                <td>{{currentData["1-1-1-Fix32_FIX_JZ3_LL_F_CV"] ? currentData["1-1-1-Fix32_FIX_JZ3_LL_F_CV"].fdata : '暂无数据'}}</td>
              </tr>

              </tbody>

            </table>

          </div>

        </div>
        <div class="mui-card">
          <div class="mui-card-header"><span style="border-left: 5px solid #0091EE;padding-left: 5px;">天气预报</span></div>
          <div class="mui-card-content" style="padding-top: 10px;">
            <div style="width: 100%;overflow-x: auto;">
              <iframe name="weather_inc" src="http://i.tianqi.com/index.php?c=code&id=12&py=wuhan&num=5&icon=1&site=12" width="660"
                      height="60" frameborder="0" marginwidth="0" marginheight="0" scrolling="no" security="restricted" sandbox="allow-top-navigation allow-same-origin allow-scripts"
                      style="margin-left: 20px;"></iframe>

            </div>

          </div>

        </div>
        <div class="mui-card">
          <div class="mui-card-header"><span class="mui-card-title">警报消息</span></div>
          <div class="mui-card-content mui-phone" >
            <p>公用PCL通讯失败 ： 2018-12-12 13:45:56</p>
            <p>公用PCL通讯失败 ： 2018-12-12 13:45:56</p>
            <p>公用PCL通讯失败 ： 2018-12-12 13:45:56</p>
          </div>
          <div class="mui-card-footer">
            <a id="warning-info" class="mui-card-link mui-text-warning">查看详情</a>
            <a id="group-chat" class="mui-card-link mui-text-warning">发起群聊</a>


          </div>
        </div>
        <div class="mui-card">
          <div class="mui-card-header"><span style="border-left: 5px solid #0091EE;padding-left: 5px;">快速链接</span></div>
          <div class="mui-card-content">
            <div id="fastLinks" class="mui-table-view mui-grid-view  mui-grid-12 " style="margin-top: 0;">
              <div class="mui-table-view-cell mui-media mui-col-xs-3">
                <a href="../html/pump_station/pump_detail.html">
            <span class="mui-content-icon  mui-bg-light-green">
              <span class="iconfont icon-bengzhan"></span>
            </span>
                  <div class="mui-media-body">实时工况</div>
                </a>
              </div>
              <div class="mui-table-view-cell mui-media mui-col-xs-3">
                <a href="../html/duty/duty_view.html">
            <span class="mui-content-icon mui-bg-light-yellow ">
              <span class="iconfont icon-rili"></span>
            </span>
                  <div class="mui-media-body">今日值班</div>
                </a>
              </div>
              <div class="mui-table-view-cell mui-media mui-col-xs-3">
                <a href="../html/userCenter/tasks.html">
            <span class="mui-content-icon mui-bg-light-blue ">
              <span class="iconfont icon-renwu"></span>
            </span>
                  <div class="mui-media-body">我的任务</div>
                </a>
              </div>

              <div class="mui-table-view-cell mui-media mui-col-xs-3 ">
                <a href="../html/patrol/start-stop-subpage1.html">
            <span class="mui-content-icon mui-bg-light-purple ">
              <span class="iconfont icon-tubiao"></span>
            </span>
                  <div class="mui-media-body">下发任务</div>
                </a>
              </div>

            </div>

          </div>

        </div>
        <div class="mui-card">
          <div class="mui-card-header"><span style="border-left: 5px solid #0091EE;padding-left: 5px;">值班信息</span></div>
          <div class="mui-card-content">

            <div class="mui-row">
              <div class="mui-col-xs-6 " style="padding: 10px 10px 0 10px;">

                <div class="mui-media" style="padding: 0;">
                  <img src="../../assets/shuijiao.jpg">

                  <div class="mui-media-body">
                    <div class="mui-media-object mui-pull-right iconfont icon-phone" v-on:click="dial" style="font-size: 24px;color:#0091EE"></div>

                    <span class="mui-ellipsis">X领导</span>
                    <p class="mui-ellipsis">13323453645</p>
                  </div>
                </div>




              </div>
              <div class="mui-col-xs-6 " style="padding: 10px 10px 0 10px;">

                <div class="mui-media" style="padding: 0;">
                  <img src="../../assets/shuijiao.jpg">

                  <div class="mui-media-body">
                    <div class="mui-media-object mui-pull-right iconfont icon-phone" v-on:click="dial" style="font-size: 24px;color:#0091EE"></div>

                    <span class="mui-ellipsis">X司机</span>
                    <p class="mui-ellipsis">13323453645</p>
                  </div>
                </div>




              </div>
            </div>

            <div class="mui-row">
              <div class="mui-col-xs-6 " style="padding: 10px 10px 0 10px;">

                <div class="mui-media" style="padding: 0;">
                  <img src="../../assets/shuijiao.jpg">

                  <div class="mui-media-body">
                    <div class="mui-media-object mui-pull-right iconfont icon-phone" v-on:click="dial" style="font-size: 24px;color:#0091EE"></div>

                    <span class="mui-ellipsis">X员工</span>
                    <p class="mui-ellipsis">13323453645</p>
                  </div>
                </div>




              </div>

              <div class="mui-col-xs-6 " style="padding: 10px 10px 0 10px;">

                <div class="mui-media" style="padding: 0;">
                  <img src="../../assets/shuijiao.jpg">

                  <div class="mui-media-body">
                    <div class="mui-media-object mui-pull-right iconfont icon-phone" v-on:click="dial" style="font-size: 24px;color:#0091EE"></div>

                    <span class="mui-ellipsis">X后勤</span>
                    <p class="mui-ellipsis">13323453645</p>
                  </div>
                </div>




              </div>

            </div>

          </div>

        </div>
    </div>
</template>

<script>
  require('../../../static/mui/js/mui.picker.js');
  require('../../../static/mui/js/mui.poppicker.js');
  export default {
    name: "home",
    data(){
      return{
        currentData: {
          a: 1
        },
      }
    },
    methods:{
      //拨号
      dial() {
        plus.device.dial("10086", false);
      },
      setPicker(){
        let pumpPicker = new mui.PopPicker();
        let pickerData = [
          {
          value: 'bhbz',
          text: '北湖泵站'
          },
          {
            value: 'ywj',
            text: '董事长 叶文洁'
          }, {
            value: 'aaa',
            text: '总经理 艾AA'
          }, {
            value: 'lj',
            text: '罗辑'
          }, {
            value: 'ymt',
            text: '云天明'
          }, {
            value: 'shq',
            text: '史强'
          }, {
            value: 'zhbh',
            text: '章北海'
          }, {
            value: 'zhy',
            text: '庄颜'
          }, {
            value: 'gyf',
            text: '关一帆'
          }, {
            value: 'zhz',
            text: '智子'
          }, {
            value: 'gezh',
            text: '歌者'
          }
        ];
        pumpPicker.setData(pickerData);
        pumpPicker.pickers[0].setSelectedIndex(0);
        let pumpPickerBtn = document.getElementById('pumpPicker');
        pumpPickerBtn.innerText = pickerData[0].text;
        pumpPickerBtn.addEventListener('tap', function(event) {
          pumpPicker.show(function(items) {
            pumpPickerBtn.innerText = items[0].text;
            //返回 false 可以阻止选择框的关闭
            //return false;
          });
        }, false);
      }
    },
    mounted(){
      let _this=this;
      mui.ready(()=>{
        mui.init({});
        _this.setPicker();
        document.getElementById('warning-info').addEventListener('tap', function() {
          _this.$router.push('/warningInfo')
        });
      })
    }
  }
</script>

<style scoped>
  .iconfont {
    font-family: "iconfont" !important;
    font-size: 30px;
    font-style: normal;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #FFFFFF;
  }

  .mui-table-view {
    margin-top: 20px;
  }

  .mui-table-view:before,
  .mui-table-view:after {
    position: absolute;
    right: 0;
    left: 0;
    height: 0;
    content: '';
    -webkit-transform: scaleY(.5);
    transform: scaleY(.5);
    background-color: #c8c7cc;
    top: -1px;
  }

  .mui-icon {
    margin-right: 10px;
  }

  .mui-card {
    margin: 10px 0 !important;
  }

  .mui-grid-view .mui-media-body {
    font-size: 12px !important;
  }


  .mui-table-view-cell .mui-content-icon {
    width: 50px;
    height: 50px;
    display: inline-block;
    text-align: center;
    border-radius: 50%;
    background-clip: padding-box;
    line-height: 48px;
  }

  .mui-table-view-cell .mui-content-icon .mui-icon {

    font-size: 24px;
    color: #FFFFFF;
    margin: 0 auto;
    margin-top: 12px;
  }

  .mui-table-view-cell .mui-content-icon .mui-icon-extra {
    color: #FFFFFF;
    font-size: 24px;
    margin: 0 auto;
    margin-top: 12px;
  }


  .mui-table-view-cell .mui-content-icon .fa {

    font-size: 24px;
    color: #FFFFFF;
    margin: 0 auto;
    margin-top: 12px;
  }


  .mui-media-object {
    line-height: 50px;
    max-width: 50px;
    height: 50px;
  }

  .mui-table-view p {
    line-height: 1;

  }

  #pumpSelcet {
    margin: 0 auto;
  }

  #pumpSelcet select {
    background-color: transparent;
  }

  #pumpSelcet:before {
    color: #ffffff;
    content: '';
    top: 8px;
    right: 0;
  }

  .mui-media {
    padding: 10px;
  }

  .mui-card .mui-media .mui-media-body {
    font-size: 14px;
    font-weight: 500;
    line-height: 17px;
    margin-bottom: 0;
    margin-left: 44px;
    color: #333;
  }

  #fastLinks .mui-media .mui-media-body {
    margin-left: 0;
  }

  .mui-card .mui-media>img:first-child {
    font-size: 0;
    line-height: 0;
    float: left;
    width: 34px;
    height: 34px;
  }

  .mui-card-footer,
  .mui-card-header {
    font-size: 14px;
    position: relative;
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    min-height: inherit;
    padding: 5px 5px;
    -webkit-box-pack: justify;
    -webkit-justify-content: space-between;
    justify-content: space-between;
    -webkit-box-align: center;
    -webkit-align-items: center;
    align-items: center;
    /* background-color: #DDDDDD; */
  }

  .mui-card-header .mui-card-title {
    border-left: 5px solid #0091EE;
    padding-left: 5px;
  }

  .table td, .table th {
    background-color: transparent !important;
  }
  .home-bg{
    background: #07B9F5 url('../../assets/homePage/bg_home_top.png') repeat-x center 0;
    color: #ffffff;
    margin-top: 0;
    background-size:100% 100%;
  }
  .rain-panel{
    width: 30px;
    height: 40px;
    background: url('../../assets/homePage/icon_all.png')  no-repeat 0 0;
    background-size: 1200%;
  }
  .river-panel{
    position:relative;
    width: 100%;
    height: 100%;
    background: url('../../assets/homePage/image_home_pailiang.png') no-repeat center 0;
    background-size:100% 100%;
  }
  #icon-task{
   padding: 5px;
    background: url('../../assets/homePage/bg_home_task.png') no-repeat top left;
    height: 50px;
    background-size:auto 100%;
    text-align: right;
  }
  #icon-machine{
   padding: 5px;
    background:  url('../../assets/homePage/bg_home_machine.png') no-repeat top left;
    height: 50px;
    background-size:auto 100%;
    text-align: right;
  }
  .mui-phone{
    min-height: 100px;
    background: url('../../assets/homePage/bg_home_warning.png') no-repeat top right;
    background-size:auto 70%;
    padding: 10px;
  }
</style>
