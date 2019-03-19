<template>
  <div class="home">
    <user-header></user-header>
    <left-menu></left-menu>
    <router-view class="right-area"/>
  </div>
</template>

<script>
  export default {
    name: 'home',
    data() {
      return {}
    },
    methods: {
      init: function () {
        document.getElementsByClassName('home')[0].style.height = (window.innerHeight - 4) + 'px';
        document.getElementsByClassName('right-wrapper')[0].style.height = (window.innerHeight - 90) + 'px';
      }
    },
    mounted() {
      (sessionStorage.getItem("zy_userAccount") && sessionStorage.getItem("zy_userPassword")) ? this.init() : this.$router.push('/login');

      this.http.get(this.GlobalDefined.api + '/api.php', params, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then((res) => {
              console.log(res);
                //this.tips = res.data.message;
                //if(res['data']['code'] === 1){
                //  setTimeout(() =>{
                //    this.$router.push('/login');
                //  }, 1500)
                //}
              }).catch((e) => {
                this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
              })
    }
  }
</script>

<style>
  body{background-color:#fff}
  .login_wrapper{width:100%; height:800px; background:url(../assets/images/login_bg.png) repeat-x #fff; padding-top:140px}
  .login_content{width:500px; margin:0 auto}
  .login_content .logo{display:block; width:246px; height:85px; margin:0 auto; background:url(../assets/images/login_logo.png) no-repeat}
  .login_cont{width:475px; height:360px; margin:40px auto 0; background:url(../assets/images/login_cont.png) no-repeat; padding:91px 88px 0; overflow:hidden}
  .login_cont input{display:block; border:none; background-color:transparent; width:100%; height:44px; padding-left:50px; color:#333; margin-bottom:20px}
  .btn_login{display:block; width:100%; height:44px; line-height:44px; background-color:#23a0e6; color:#fff; text-align:center; font-size:16px; margin-top:20px; border-radius:4px}
  .tip{display:block; color:#F33; font-size:13px; line-height:13px; height:18px}
  .forget{ text-align:right; color:#999;}
  .forget a{color:#999}
  .forget a:hover{ text-decoration:underline}
  .right-area{
    width: calc(100% - 265px);
    height: calc(100% - 87px);
    overflow-y: auto;
    display: inline-block;
  }
</style>
