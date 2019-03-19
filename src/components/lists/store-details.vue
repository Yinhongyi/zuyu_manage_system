<template>
    <div>
      <div class="right-wrapper">
        <div class="location">当前位置：门店管理 > 门店详情</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">门店详情</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="details-wrap">
                <div class="details-top">
                  <h1 class="details-title">基本信息</h1>
                  <input class="button blue fr" type="button" value="删除" @click="logoutShop()" v-if="shopData.enterpriseState"/>
                  <input class="button blue fr" type="button" value="修改" @click="GlobalDefined.ChangeModal()" v-if="shopData.enterpriseState"/>
                  <input class="button blue fr" type="button" value="恢复" @click="GlobalDefined.ChangeModal()" v-if="!shopData.enterpriseState"/>
                </div>
                <div class="details-cont cunsumer-project">
                  <div class="picture"><img src="../../assets/images/details-pic.jpg"></div>
                  <div class="cp-right">
                    <ul class="dcp-ul">
                      <li>门店名称：<b class="b-blue">{{shopData.enterpriseName}}</b></li>
                      <li>
                        <label class="checkbox-label">负责人：<span>{{shopData.enterpriseContact}}</span></label>
                        <label class="checkbox-label">联系电话：<span>{{shopData.contactPhone}}</span></label>
                      </li>
                      <li>地址：<span>{{shopData.enterpriseAddress}}</span></li>
                    </ul>
                  </div>
                </div>
              </div><!--/details-wrap-->
              <div class="details-wrap">
                <div class="details-top">
                  <h1 class="details-title">用户列表</h1>
                  <input class="button blue fr" type="button" value="注销用户" @click="clickLogout" />
                  <input class="button blue fr" type="button" value="添加用户" @click="createUserMsg" />
                </div>
                <div class="select-layer">
                  <span>用户编号：</span><input name="" type="text" class="input-text" value="" placeholder="">
                  <span>用户名称：</span><input name="" type="text" class="input-text" value="" placeholder="">
                  <span>用户角色：</span>
                  <div class="slcWrap" @click="isShowSearchRoleList = !isShowSearchRoleList">
                    <input name="" type="text" class="selectIpt" readOnly="true"  value="" placeholder="用户角色" v-model="SearchRole">
                    <ul class="selectUl" v-show="isShowSearchRoleList">
                      <li v-for="(role, index) in userRoleList" @click="selectRole(index, 'search')">{{role}}</li>
                    </ul>
                  </div>
                  <input class="button blue" type="button" value="查询" @click="queryUserList(shopId)"/>
                </div>
                <div class="details-cont cunsumer-project">
                  <div class="user-tab">
                    <a :class="shopType === 'effective'? 'active': ''" @click="toggleTab('effective')">当前有效用户</a>
                    <a :class="shopType === 'logout'? 'active': ''" @click="toggleTab('logout')">已注销用户</a>
                  </div>
                  <div class="table-wrap">
                    <table>
                      <tr>
                        <td class="line-one" width="100"><input name="" type="checkbox" value="" class="check-all" @click="selectCheckbox($event)">全选</td>
                        <td class="line-one" width="180">用户编号</td>
                        <td class="line-one" width="180">用户名称</td>
                        <td class="line-one" width="180">用户角色</td>
                        <td class="line-one">操作</td>
                      </tr>
                      <tr v-for="(user, index) in userList">
                        <td><input name="" type="checkbox" value="" class="check-son"></td>
                        <td>{{user.userId}}</td>
                        <td>{{user.userName}}</td>
                        <td>{{user.roleName}}</td>
                        <td>
                          <!--<a class="button green" @click="detailUserMsg(user)">详细</a>-->
                          <a class="button red" @click="logoutUser(user)" v-if="shopType === 'effective'">注销</a>
                          <a class="button red" @click="restoreUser(user)" v-if="shopType === 'logout'">恢复</a>
                        </td>
                      </tr>
                    </table>
                  </div>
                </div><!--/details-cont-->
              </div>
            </div>
          </div><!--/right-panel-->

        </div>


        <!--弹出层-->
        <div id="showOverLay" class="md-overlay" ></div>
        <div class="md-modal ChangeModal" >
          <div class="md-title ">修改门店信息<a class="md-close" @click="GlobalDefined.closeModal"></a></div>
          <div class="md-content">
            <div class="md-modal-inner">
              <h1 class="modal-inner-title">门店信息</h1>
              <div class="selectDiv">
                <span class="sel-span">*门店编号</span><input name="" type="text" readonly class="input-text" placeholder="" v-model="shopData.enterpriseId">
              </div>
              <div class="selectDiv">
                <span class="sel-span">*门店名称</span><input name="" type="text" class="input-text" placeholder="" v-model="shopData.enterpriseName">
              </div>
              <div class="selectDiv">
                <span class="sel-span">*门店地址</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt no-bg" value="" placeholder="" v-model="shopData.enterpriseAddress">
                </div>
              </div>
              <div class="selectDiv">
                <span class="sel-span">负责人</span><input name="" type="text" class="input-text" placeholder="" v-model="shopData.enterpriseContact">
                <span class="sel-span"></span>
                <span class="sel-span">联系电话</span><input name="" type="text" class="input-text" placeholder="" v-model="shopData.contactPhone">
              </div>
              <div class="selectDiv align-center">
                <input name="" type="button" class="btn_blue" value="确定"  @click="modifyShopData"><input name="" type="button" class="btn_blue" value="取消" @click="GlobalDefined.closeModal">
              </div>
            </div><!--/md-modal-inner-->
          </div><!--/modal-content-->
        </div>

        <div class="md-modal AddModal" >
          <div class="md-title ">添加用户信息<a class="md-close" @click="GlobalDefined.closeModal"></a></div>
          <div class="md-content">
            <div class="md-modal-inner">
              <!--<div class="selectDiv">-->
                <!--<span class="sel-span">当前门店</span>-->
                <!--<div class="slcWrap">-->
                  <!--<input name="" type="text" class="selectIpt sw100" readOnly="true"  value="" placeholder="请选择门店" v-model="createUserData.organName">-->
                  <!--<ul class="selectUl">-->
                    <!--<li class="shop-list" v-for="shop in shopList" @click="selectShop(shop, 'create')">{{shop.enterpriseName}}</li>-->
                  <!--</ul>-->
                <!--</div>-->
              <!--</div>-->
              <div class="selectDiv">
                <span class="sel-span">*用户账户</span><input name="" type="text" class="input-text" placeholder="" v-model="createUserData.userAccount">
              </div>
              <div class="selectDiv">
                <span class="sel-span">*用户名称</span><input name="" type="text" class="input-text" placeholder="" v-model="createUserData.userName">
              </div>
              <div class="selectDiv">
                <span class="sel-span">用户角色</span>
                <div class="slcWrap" @click="isShowCreateRoleList = !isShowCreateRoleList">
                  <input name="" type="text" class="selectIpt" readOnly="true"  value="" placeholder="请选择角色" v-model="createUserData.roleName">
                  <ul class="selectUl" v-show="isShowCreateRoleList">
                    <li v-for="(role, index) in userRoleList" @click="selectRole(index, 'create')">{{role}}</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv align-center">
                <input name="" type="button" class="btn_blue" value="确定" @click="createUser"><input name="" type="button" class="btn_blue" value="取消" @click="GlobalDefined.closeModal">
              </div>

            </div><!--/md-modal-inner-->
          </div><!--/modal-content-->
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'StoreDetails',
        data () {
            return {
              shopType: 'effective',
              shopId: '',
              shopData: {},
              createUserData: {
                "organId": 0,
                "organName": "",
                "roleId": 0,
                "roleName": "",
                "typeName": "",
                "userAccount": "",
                "userName": "",
                "userPhone": "",
                "userType": 0
              },
              userSeachCondition: {
                "organId": 0,
                "roleId": 0,
                "userAccount": "",
                "userName": "",
                "userPhone": "",
                "userState": 1,
                "userType": 0
              },
              shopList: [],
              userRoleList: ['老板','店长','会计','营销','技师','店员','收银'],
              userList: [],
              isShowShopList: false,
              isShowSearchRoleList: false,
              isShowCreateRoleList: false,
              SearchRole: ''
            }
        },
        methods: {
            queryShopList: function () {
              let params  = {
                "enterpriseState": 1,
              };
              this.http.post(this.GlobalDefined.api + '/shop/findList', params, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then((res) => {
                this.shopList = res.data.data;
              }).catch((e) => {
                this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
              })
            },
            queryShopData: function () {
                  this.http.get(this.GlobalDefined.api + '/shop/get?id=' + this.shopId, {
                      headers: {
                          'Content-Type': 'application/json'
                      }
                  }).then((res) => {
                    this.shopData = res.data.data
                  }).catch((e) => {
                    this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
                  })
              },
            queryUserList: function (shopId) {
              this.userSeachCondition.organId = shopId;
              let params = this.GlobalDefined.getParams(this.userSeachCondition);
              this.SearchRole ? (params.roleId = params.roleId || 0) : '';
              this.http.post(this.GlobalDefined.api + '/user/findList', params, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then((res) => {
                this.userList = res.data.data;
              }).catch((e) => {
                this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
              })
            },
            logoutShop: function () {
                this.http.get(this.GlobalDefined.api + '/shop/disable?id=' + this.shopId, {
                  headers: {
                    'Content-Type': 'application/json'
                  }
                }).then((res) => {
                  this.GlobalDefined.showCenterTip('注销成功');
                  this.$router.push('/store-list')
                }).catch((e) => {
                  this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
                })
              },
            modifyShopData: function () {
              let params = {
                "contactPhone": this.shopData.contactPhone,
                "creatorId": this.shopData.creatorId,
                "creatorName": this.shopData.creatorName,
                "enterpriseAddress": this.shopData.enterpriseAddress,
                "enterpriseContact": this.shopData.enterpriseContact,
                "enterpriseId": this.shopData.enterpriseId,
                "enterpriseName": this.shopData.enterpriseName,
                "enterpriseState": this.shopData.enterpriseState,
                "lastMenderId": 0,
                "lastMenderName": "",
              };
              this.GlobalDefined.getParams(params);
              this.http.post(this.GlobalDefined.api + '/shop/update', params, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then((res) => {
                if(res.data && res.data.data){
                  this.queryShopData();
                }
                this.GlobalDefined.showCenterTip(res.data.message);
                this.GlobalDefined.closeModal();
              }).catch((e) => {
                this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
              })

            },
            createUserMsg: function () {
              for(let i in this.createUserData){
                if(typeof this.createUserData[i] === 'number'){
                  this.createUserData[i] = 0;
                }else if(typeof this.createUserData[i] === 'string'){
                  this.createUserData[i] = '';
                }
              }
              this.queryShopList();
              this.GlobalDefined.AddModal();
            },
            createUser: function () {
              this.createUserData.organId = this.createUserData.organId || this.shopId;
              let params = this.GlobalDefined.getParams(this.createUserData);
              params.roleId = params.roleId || 0;
              this.http.post(this.GlobalDefined.api + '/user/create', params, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then((res) => {
                if(res.data){
                  this.queryUserList(this.shopId);
                  this.GlobalDefined.showCenterTip(res.data.message);
                  this.GlobalDefined.closeModal();
                }
              }).catch((e) => {
                this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
              })
            },
            logoutUser: function (user) {
              this.http.get(this.GlobalDefined.api + '/user/disable?id=' + user.userId, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then((res) => {
                this.GlobalDefined.showCenterTip('注销成功');
//                this.$router.push('/store-list')
                this.queryUserList(this.shopId);
              }).catch((e) => {
                this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
              })
            },
            restoreUser: function (user) {
              let params = {
                "organId": this.shopId,
                "userId": user.userId,
                "userState": 1
              };
              this.http.post(this.GlobalDefined.api + '/user/update', params, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then((res) => {
                this.GlobalDefined.showCenterTip('恢复成功');
                this.queryUserList(this.shopId);
              }).catch((e) => {
                this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
              })

            },
            clickLogout: function () {
              let logoutList = [];
              for(let i in $('.check-son')){
                if($('.check-son')[i]['checked']){
                  logoutList.push(this.userList[i]['userId'])
                }
              }
              logoutList.length !== 1 ? this.GlobalDefined.showCenterTip('请选择一项') : this.logoutUser(logoutList[0]);
            },
            toggleTab: function (tab) {
              this.shopType = tab;
              this.userSeachCondition.userState = tab === 'effective' ? 1 :0;
              this.queryUserList(this.shopId);
              this.GlobalDefined.setCheckboxStatus($('.check-all'), false);
              $('.check-all').prop("checked", false);
            },
            selectShop: function (shop, type) {
              if(type === 'create'){
                this.createUserData.organName = shop.enterpriseName;
                this.createUserData.organId = shop.enterpriseId;
              }
            },
            selectRole: function (index, type) {
              if(type === 'create'){
                this.createUserData.roleName = this.userRoleList[index];
                this.createUserData.roleId = index;
              }else{
                this.SearchRole = this.userRoleList[index];
                this.userSeachCondition.roleId = index;
              }
            },
            selectCheckbox:function (e) {
              this.GlobalDefined.selectAllCheckbox(e && e.target);
            }
        },
        mounted () {
            this.shopId = this.$route.query && this.$route.query.id;
            if(this.shopId){
              this.queryShopData();
              this.queryUserList(this.shopId);
            }else{
              this.$router.push('/store-list');
            }
        }
    }
</script>
