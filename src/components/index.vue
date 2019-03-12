<template>
    <div id="index">
      <div class="mui-scroll-wrapper">
        <div class = 'mui-scroll'>
          <transition name="fade" mode="out-in" appear>
            <router-view></router-view>
          </transition>
        </div>
      </div>
      <nav id="bar" class="mui-bar mui-bar-tab">
        <template v-for="item in footerMenu">
          <a class="mui-tab-item" :class="{'mui-active':item.active}" @tap="goTo(item)">
            <span class="mui-icon" :class="item.icon"></span><!--<span v-show="item.name==='消息'" class="mui-badge">9</span>-->
            <span class="mui-tab-label">{{item.name}}</span>
          </a>
        </template>
      </nav>
    </div>
</template>

<script>
    import home from './page/home'
    import work from './page/work'
    import message from './page/message'
    import user from './page/user'
    export default {
      name: "index",
      components:{
        home,
        message,
        work,
        user
      },
      data(){
        return{
          showComponent:"home",
          footerMenu:[
            {
              icon:'mui-icon-home',
              active:true,
              name:'首页',
              router:'/home'
            },
            {
              icon:'mui-icon-email',
              active:false,
              name:'消息',
              router:'/message'
            },
            {
              icon:'mui-icon-contact',
              active:false,
              name:'工作',
              router:'/work'
            },
            {
              icon:'mui-icon-gear',
              active:false,
              name:'我的',
              router:'/user'
            }
          ]
        }
      },
      methods:{
        goTo(item){
          this.$router.push(item.router)
        }
      },
      mounted(){
        let _this=this;
        mui.ready(()=>{
          mui('.mui-scroll-wrapper').scroll({
            deceleration: 0.0006, //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
            indicators: false //是否显示滚动条
          });

        })
      }
    }
</script>

<style scoped>

  .fade-enter-active {
    -webkit-transition: all .2s linear;
    transition: all .2s linear;
    opacity: 1
  }

  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
  /*下一页*/
  .next-enter-active {
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    opacity: 1;
    position: fixed;
    width:100vw;
  }

  .next-enter, .next-leave-active {
    opacity: 0;
    -webkit-transform: translate3d(50%, 0, 0);
    transform: translate3d(50%, 0, 0);
  }

  .next-leave-active {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
  /*上一页*/
  .prev-enter-active {
    -webkit-transition: all 0.2s linear;
    transition: all 0.2s linear;
    width:100vw;
  }

  .prev-enter, .prev-leave-active {
    opacity: 0;
    -webkit-transform: translate3d(-50%, 0, 0);
    transform: translate3d(-50%, 0, 0);
  }

  .prev-active {
    opacity: 0;
    -webkit-transform: translate3d(0, 0, 0);
    transform: translate3d(0, 0, 0);
  }
</style>
