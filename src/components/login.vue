<template>
    <div>
        <div class="login_wrapper">
            <div class="login_content">
                <div class="logo"></div>
                <div class="login_cont">
                    <input name="" type="text" placeholder="请输入用户名" v-model="userAccount" @input="tips = ''"/>
                    <input name="" type="password" placeholder="请输入密码" v-model="userPassword" @keyup.enter="loginAccount" @input="tips = ''"/>
                    <p class="tip">{{tips}}</p>
                    <!--<div class="forget"><a @click="forgetPassword()">忘记密码？</a></div>-->
                    <div @click="loginAccount" class="btn">登　录</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'Login',
        data () {
            return {
              tips: '',
              msg: {
                error: '用户名或密码不正确，请重新输入',
                failed: '失败'
              },
              isErrorInput: false,
              userAccount: '',
              userPassword: ''
            }
        },
        methods: {
            loginAccount: function () {
              let params = {
                "userAccount": this.userAccount,
                "userPassword": this.userPassword
              };
              this.http.post(this.GlobalDefined.api + '/user/login', params, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then((res) => {
                if(res['data']['code'] === 1){
                  //登录成功
                  this.tips = res['data'] && res['data']['message'];
                  document.body.style.cursor = 'wait';
                  //暂存登录状态
                  sessionStorage.setItem("zy_userAccount",this.userAccount);
                  sessionStorage.setItem("zy_userPassword",this.userPassword);
                  sessionStorage.setItem("zy_userId",res['data']['data']['userId']);
                  sessionStorage.setItem("zy_userName",res['data']['data']['userName']);
                  //1s后跳转主页
                  setTimeout(() => {
                    document.body.style.cursor = '';
                    this.$router.push('/home');
                  }, 1000)
                }else if(res['data']['code'] === 0){
                  this.tips = res['data'] && res['data']['message'];
                  this.GlobalDefined.showCenterTip(res['data'] && res['data']['message'], 3000);
                }else{
                  this.tips = this.msg.failed;
                  this.GlobalDefined.showCenterTip(res['data'] && res['data']['message'], 3000);
                }
              }).catch((e) => {
                this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
              })
            }
        },
        mounted () {
          this.userAccount = sessionStorage.getItem("zy_userAccount") || '';
          this.userPassword = sessionStorage.getItem("zy_userPassword") || '';
          (this.userAccount && this.userPassword) ? this.loginAccount() : '';


          let params = {
          };
          this.http.get(this.GlobalDefined.api + '/api.php', params, {
                                  headers: {
                                    'Content-Type': 'application/json'
                                  }
                                })
                                .then((res) => {

                                let answers = res.data && res.data.list;
                                console.log(answers);
                                })
                                .catch((e) => {
                                  this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
                                })
        }
    }
</script>

<style>
    .login_wrapper{width:100%; height:800px; background:url(../assets/images/login_bg.png) repeat-x #fff; padding-top:140px}
    .login_content{width:500px; margin:0 auto}
    .login_content .logo{display:block; width:246px; height:85px; margin:0 auto; background:url(../assets/images/login_logo.png) no-repeat}
    .login_cont{width:475px; height:360px; margin:40px auto 0; background:url(../assets/images/login_cont.png) no-repeat; padding:91px 88px 0; overflow:hidden}
    .login_cont input{display:block; border:none; background-color:transparent; width:100%; height:44px; padding-left:50px; color:#333; margin-bottom:20px}
    .btn{display:block; width:100%; height:44px; line-height:44px; background-color:#23a0e6; color:#fff; text-align:center; font-size:16px; margin-top:20px; border-radius:4px; cursor: pointer}
    .tip{display:block; color:#F33; font-size:13px; line-height:13px; height:18px}
    .forget{ text-align:right; color:#999;}
    .forget a{color:#999}
    .forget a:hover{ text-decoration:underline}
</style>
