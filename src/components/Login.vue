<template>
  <div id="loginVue">
    <header class="mui-bar mui-bar-nav">
      <h1 class="mui-title">登录</h1>
    </header>
    <div class="mui-content">
      <form id='login-form' class="mui-input-group">
        <div class="mui-input-row">
          <label>账号</label>
          <input id='account' type="text" class="mui-input-clear mui-input" placeholder="请输入账号" :value="username">
        </div>
        <div class="mui-input-row">
          <label>密码</label>
          <input id='password' type="password" class="mui-input-clear mui-input" :value="password" placeholder="请输入密码">
        </div>
      </form>
      <div class="mui-content-padded">
        <button id='login' class="mui-btn mui-btn-block mui-btn-primary">登录</button>
        <div class="link-area">
         <a id='reg'>注册账号</a> <span class="spliter">|</span><a id='forgetPassword'>忘记密码</a>
        </div>
      </div>
  </div>
  </div>
</template>

<script>
  export default {
    name: "loginVue",
    data(){
      return{
        username:"admin",
        password:"soarto"
      }
    },
    methods:{
      toMain() {
        let _this=this;
        this.$router.push('/index');
       //  let data={};
       //  _this.$http.post(_this.$url.baseUrl+'currentdata/current.do?project_id=1',data).then(res=>{
       //   console.log(res);
       // })

       let data={
         // username:this.username,
         // password:this.password
       };
       // this.$http.post('/currentdata/current.do?project_id=1',data).then(res=>{
       //   console.log(res);
       // })
       //  $.ajax({
       //    type:"post",
       //    url:_this.$url.baseUrl+'/currentdata/current.do?project_id=1',
       //    data:{},
       //    success:(res)=>{
       //      console.log(res);
       //    }
       //  })
      }
    },
    mounted(){
      let _this=this;
      mui.ready(()=>{
        mui.init({
          statusBarBackground:"#f7f7f7"
        });
        let loginButton = document.getElementById('login');
        loginButton.addEventListener('tap',()=>{
          _this.toMain();
          })
      })
    }
  }
</script>

<style scoped>
  .area {
    margin: 20px auto 0px auto;
  }

  .mui-input-group {
    margin-top: 10px;
  }

  .mui-input-group:first-child {
    margin-top: 20px;
  }

  .mui-input-group label {
    width: 25%;
  }

  .mui-input-row label~input,
  .mui-input-row label~select,
  .mui-input-row label~textarea {
    width: 75%;
  }

  .mui-checkbox input[type=checkbox],
  .mui-radio input[type=radio] {
    top: 6px;
  }

  .mui-content-padded {
    margin-top: 25px;
  }

  .mui-btn {
    padding: 10px;
  }

  .link-area {
    display: block;
    margin-top: 25px;
    text-align: center;
  }

  .spliter {
    color: #bbb;
    padding: 0px 8px;
  }

  .oauth-area {
    position: absolute;
    bottom: 20px;
    left: 0px;
    text-align: center;
    width: 100%;
    padding: 0px;
    margin: 0px;
  }

  .oauth-area .oauth-btn {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-size: 30px 30px;
    background-position: center center;
    background-repeat: no-repeat;
    margin: 0px 20px;
    /*-webkit-filter: grayscale(100%); */
    border: solid 1px #ddd;
    border-radius: 25px;
  }

  .oauth-area .oauth-btn:active {
    border: solid 1px #aaa;
  }

  .oauth-area .oauth-btn.disabled {
    background-color: #ddd;
  }

  #securityBox .mui-input-clear~.mui-icon-clear{
    right: 20%;
  }
</style>
