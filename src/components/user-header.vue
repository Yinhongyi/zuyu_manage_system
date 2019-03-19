<template>
  <div id="user-header">
    <div class="header">
      <div class="logo">
        <a>FB System</a>
      </div>
      <div class="right-message">
        <div class="welcome">
          <span>{{userName}}</span>，欢迎您！
        </div>
        <div class="admin">
          <i class="people"></i>
          {{userName}}
          <i class="drop"></i>
          <span class="option1" @click="GlobalDefined.SetModal">修改密码</span>
          <span class="option2" @click="exitSystem">退出</span>
        </div>
      </div>
    </div>

    <!--弹出层-->
    <div id="showOverLay" class="md-overlay" ></div>
    <div class="md-modal SetModal modifyPSWModal">
      <div class="md-title ">修改密码<a class="md-close" @click="GlobalDefined.closeModal"></a></div>
      <div class="md-content">
        <div class="md-modal-inner">
          <div class="selectDiv">
            <span class="sel-span">原密码：</span><input class="input-text" name="" type="password" placeholder="请输入原密码" v-model="userPasswordOld" @input="tips = ''"/>
          </div>
          <div class="selectDiv">
            <span class="sel-span">新密码：</span><input class="input-text" name="" type="password" placeholder="请输入新密码" v-model="userPasswordNew" @blur="inputPSWOldBlur" @input="tips = ''"/>
          </div>
          <div class="selectDiv">
            <span class="sel-span">新密码：</span><input class="input-text" name="" type="password" placeholder="请再次输入新密码" v-model="userPasswordNew_twice" @blur="inputPSWNewBlur" @input="tips = ''"/>
          </div>

          <p class="tip">{{tips}}</p>

          <div class="selectDiv align-center">
            <input name="" type="button" class="btn_blue" value="确定" @click="modifyPassword"><input name="" type="button" class="btn_blue" value="取消" @click="GlobalDefined.closeModal">
          </div>
        </div>

      </div>
    </div>

  </div>

</template>

<script>
  export default {
    name: 'user-header',
    data() {
      return {
        userName: '',
        userAccount: '',
        userPasswordOld: '',
        userPasswordNew: '',
        userPasswordNew_twice: '',
        tips: '',
      }
    },
    methods: {
      exitSystem: function () {
        sessionStorage.removeItem("zy_userName");
        sessionStorage.removeItem("zy_userAccount");
        sessionStorage.removeItem("zy_userPassword");
        sessionStorage.removeItem("zy_userId");
        this.$router.push('/login');
      },
      modifyPassword: function () {
        let params = {
          "newPassword": this.userPasswordNew,
          "oldPassword": this.userPasswordOld,
          "userId": sessionStorage.getItem("zy_userId")
        };
        console.log(params);
        this.http.post(this.GlobalDefined.api + '/user/updatePassword', params, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.tips = res.data.message;
          if(res['data']['code'] === 1){
            setTimeout(() =>{
              this.$router.push('/login');
            }, 1500)
          }
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })
      },
      inputPSWOldBlur: function () {
        this.userPasswordOld === this.userPasswordNew ? this.tips = '新密码不能与原密码相同': '';
      },
      inputPSWNewBlur: function () {
        this.userPasswordNew_twice !== this.userPasswordNew ? this.tips = '两次输入的新密码不相同': '';
      }
    },
    mounted() {
      this.userName = sessionStorage.getItem("zy_userName") || '';
    }
  }
</script>
