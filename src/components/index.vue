<template>
    <div id="index">
      <nav id="bar" class="mui-bar mui-bar-tab">
        <a id="defaultTab" class="mui-tab-item mui-active" href="html/home.html" data-flag='isActive1' >
          <span class="mui-icon iconfont " v-bind:class="{ 'icon-home': !isActives.isActive1, 'icon-home-fill': isActives.isActive1 }"></span>
          <span class="mui-tab-label">首页</span>
        </a>
        <a class="mui-tab-item" href="html/message.html" data-flag='isActive2'>
          <span class="mui-icon iconfont " v-bind:class="{ 'icon-message': !isActives.isActive2, 'icon-message-fill': isActives.isActive2 }"><span class="mui-badge">9</span></span>
          <span class="mui-tab-label">消息</span>
        </a>
        <a class="mui-tab-item" href="html/workSpace.html" data-flag='isActive3'>
          <span class="mui-icon iconfont " v-bind:class="{ 'icon-work': !isActives.isActive3, 'icon-work-fill': isActives.isActive3 }"></span>
          <span class="mui-tab-label">工作</span>
        </a>
        <a class="mui-tab-item" href="html/userCenter.html" data-flag='isActive4'>
          <span class="mui-icon iconfont " v-bind:class="{ 'icon-user': !isActives.isActive4, 'icon-user-fill': isActives.isActive4 }"></span>
          <span class="mui-tab-label">我的</span>
        </a>
      </nav>
      <div class="mui-content">

      </div>
    </div>
</template>

<script>
    export default {
      name: "index",
      data(){
        return{
          isActives: {
            isActive1: true,
            isActive2: false,
            isActive3: false,
            isActive4: false
          }
        }
      },
      methods:{

      },
    }
</script>

<style scoped>

</style>
