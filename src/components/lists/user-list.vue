<template>
    <div>
      <div class="right-wrapper">
        <div class="location">当前位置： 用户管理 > 用户列表</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">用户列表</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer">
                <span>用户名：</span><input name="" type="text" class="input-text" placeholder="" v-model="userSeachCondition.condition.userName">
                <span>角色类型：</span><input name="" type="text" class="input-text" placeholder="" v-model="userSeachCondition.condition.userType">
                <input class="button blue fr" type="button" value="添加" @click="createUserMsg"/>
                <input class="button blue fr" type="button" value="注销" @click="clickLogout" />

              </div>
              <div class="table-wrap">
                <div class="left-tab">
                  <!--<p class="cursor-pointer" @click="queryUserList()">我的门店</p>-->
                  <p class="cursor-pointer">我的门店</p>
                  <ul class="left-tab-ul">
                    <li class="shop-list" v-for="shop in shopList" @click="queryUserList(shop.enterpriseId)":class="{'selected': currentShopId === shop.enterpriseId}">{{shop.enterpriseName}}</li>
                  </ul>
                </div>
                <div class="left-tab-panel"  v-if="userList.length > 0">
                  <table>
                    <tr>
                      <td class="line-one" width="100"><input name="" type="checkbox" class="check-all" @click="selectCheckbox($event)">全选</td>
                      <td class="line-one" width="22%"> 用户名</td>
                      <td class="line-one" width="22%">用户名称</td>
                      <td class="line-one" width="15%">门店</td>
                      <td class="line-one" width="15%">用户角色</td>
                      <td class="line-one" width="15%">操作</td>
                    </tr>
                    <tr v-for="user in userList">
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>{{user.userId}}</td>
                      <td>{{user.userName}}</td>
                      <td>{{user.organName}}</td>
                      <td>{{user.roleName}}</td>
                      <td><a class="button green" @click="modifyUserMsg(user)">修改</a></td>
                    </tr>
                  </table>
                  <HY-pagination :totalNumber="pagination.totalNumber" :limitNumber="pagination.limitNumber" @HY_page="jumpPage($event)" :simpleType="true" class="pagination"></HY-pagination>

                </div>
                <div class="left-tab-panel" v-if="userList.length === 0">
                  <p style="padding:40px 100px">暂无数据</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div id="showOverLay" class="md-overlay" ></div>
        <div class="md-modal AddModal" >
          <div class="md-title ">添加用户信息<a class="md-close" @click="GlobalDefined.closeModal"></a></div>
          <div class="md-content">
            <div class="md-modal-inner">
              <div class="selectDiv">
                <span class="sel-span">当前门店</span>
                <div class="slcWrap" @click="isShowShopList = !isShowShopList">
                  <input name="" type="text" class="selectIpt" readOnly="true"  value="" placeholder="请选择门店" v-model="createUserData.organName">
                  <ul class="selectUl" v-show="isShowShopList">
                    <li class="shop-list" v-for="shop in shopList" @click="selectShop(shop, 'create')">{{shop.enterpriseName}}</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv">
                <span class="sel-span">*用户账户</span><input name="" type="text" class="input-text" placeholder="" v-model="createUserData.userAccount">
              </div>
              <div class="selectDiv">
                <span class="sel-span">*用户名称</span><input name="" type="text" class="input-text" placeholder="" v-model="createUserData.userName">
              </div>
              <div class="selectDiv">
                <span class="sel-span">用户角色</span>
                <div class="slcWrap" @click="isShowRoleList = !isShowRoleList">
                  <input name="" type="text" class="selectIpt" readOnly="true"  value="" placeholder="请选择角色" v-model="createUserData.roleName">
                  <ul class="selectUl" v-show="isShowRoleList">
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

        <div class="md-modal ChangeModal" >
          <div class="md-title ">修改用户信息<a class="md-close" @click="GlobalDefined.closeModal"></a></div>
          <div class="md-content">
            <div class="md-modal-inner">
              <div class="selectDiv">
                <span class="sel-span">当前门店</span>
                <div class="slcWrap" @click="isShowShopList = !isShowShopList">
                  <input name="" type="text" class="selectIpt" readOnly="true" placeholder="" v-model="modifyUserData.organName">
                  <ul class="selectUl" v-show="isShowShopList">
                    <li class="shop-list" v-for="shop in shopList" @click="selectShop(shop, 'modify')">{{shop.enterpriseName}}</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv">
                <span class="sel-span">*用户名称</span><input name="" type="text" class="input-text" placeholder="" v-model="modifyUserData.userName">
              </div>
              <div class="selectDiv">
                <span class="sel-span">用户角色</span>
                <div class="slcWrap" @click="isShowRoleList = !isShowRoleList">
                  <input name="" type="text" class="selectIpt" readOnly="true" value="" placeholder="" v-model="modifyUserData.roleName">
                  <ul class="selectUl" v-show="isShowRoleList">
                    <li v-for="(role, index) in userRoleList" @click="selectRole(index, 'modify')">{{role}}</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv align-center">
                <input name="" type="button" class="btn_blue" value="确定" @click="modifyUser"><input name="" type="button" class="btn_blue" value="取消" @click="GlobalDefined.closeModal">
              </div>

            </div><!--/md-modal-inner-->
          </div><!--/modal-content-->
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'UserList',
        data () {
            return {
              userRoleList: ['老板','店长','会计','营销','技师','店员','收银'],
              selectedRole: 0,
              currentShopId: '',
              shopList: [],
              userSeachCondition: {
                "condition": {
                  "roleId": 0,
                  "userAccount": "",
                  "userName": "",
                  "userPhone": "",
                  "userState": 1,
                  "userType": 0
                },
                "pageNum": 1,
                "pageSize": 5
              },
              userList: [],
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
              modifyUserData: {
                "creatorId": 0,
                "creatorName": "",
                "logoutTime": "",
                "organId": 0,
                "organName": "",
                "registerDate": "",
                "registerTime": "",
                "roleId": 0,
                "roleName": "",
                "stateName": "",
                "typeName": "",
                "userAccount": "",
                "userId": 0,
                "userName": "",
                "userPassword": "",
                "userPhone": "",
                "userState": 0,
                "userType": 0
              },
              pagination:{
                totalNumber: 0,
                limitNumber: 5
              },
              isShowShopList: false,
              isShowRoleList: false
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
                let shopId = this.shopList[0].enterpriseId;
                this.currentShopId = shopId;
                this.queryUserList(shopId)
              }).catch((e) => {
                this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
              })
            },
            queryUserList: function (shopId) {
              this.userSeachCondition.pageSize = this.pagination.limitNumber;
              this.userSeachCondition.condition.organId = shopId;
              this.currentShopId = shopId || '';
              let params = this.GlobalDefined.getParams(this.userSeachCondition);
              this.http.post(this.GlobalDefined.api + '/user/findPage', params, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((res) => {
                    this.userList = res.data.data.list;
                    this.pagination.totalNumber = res.data.data.total;
                    this.selectCheckbox();
                }).catch((e) => {
                this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
                })
            },
            modifyUserMsg: function (modifyUserData) {
              this.GlobalDefined.ChangeModal();
              this.modifyUserData = modifyUserData;
            },
            createUserMsg: function () {
              for(let i in this.createUserData){
                if(typeof this.createUserData[i] === 'number'){
                  this.createUserData[i] = 0;
                }else if(typeof this.createUserData[i] === 'string'){
                  this.createUserData[i] = '';
                }
              }
              this.GlobalDefined.AddModal();
            },
            modifyUser: function () {
              let params = this.GlobalDefined.getParams(this.modifyUserData);
              params.roleId = params.roleId || 0;
              this.http.post(this.GlobalDefined.api + '/user/update', params, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then((res) => {
                if(res.data){
                  this.queryUserList(this.currentShopId);
                  this.GlobalDefined.showCenterTip(res.data.message);
                  this.GlobalDefined.closeModal();
                }
              }).catch((e) => {
                this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
              })
            },
            createUser: function () {
              let params = this.GlobalDefined.getParams(this.createUserData);
              params.roleId = params.roleId || 0;
              this.http.post(this.GlobalDefined.api + '/user/create', params, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then((res) => {
                if(res.data){
                  this.queryUserList(this.currentShopId);
                  this.GlobalDefined.showCenterTip(res.data.message);
                  this.GlobalDefined.closeModal();
                }
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
            logoutUser: function (id) {
              this.http.get(this.GlobalDefined.api + '/user/disable?id='+id, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then((res) => {
                if(res.data){
                  this.queryUserList(this.currentShopId);
                  this.GlobalDefined.showCenterTip(res.data.message);
                  this.GlobalDefined.setCheckboxStatus($('.check-all'), false);
                }
              }).catch((e) => {
                this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
              })

            },
            selectShop: function (shop, type) {
              if(type === 'create'){
                this.createUserData.organName = shop.enterpriseName;
                this.createUserData.organId = shop.enterpriseId;
              }else{
                this.modifyUserData.organName = shop.enterpriseName;
                this.modifyUserData.organId = shop.enterpriseId;
              }
            },
            selectRole: function (index, type) {
              if(type === 'create'){
                this.createUserData.roleName = this.userRoleList[index];
                this.createUserData.roleId = index;
              }else{
                this.modifyUserData.roleName = this.userRoleList[index];
                this.modifyUserData.roleId = index;
              }
            },
            selectCheckbox:function (e) {
              this.GlobalDefined.selectAllCheckbox(e && e.target);
            },
            jumpPage: function (page) {
              this.userSeachCondition.pageNum = page;
              this.queryUserList(this.currentShopId);
            },
        },
        mounted () {
            this.queryShopList();
        }
    }
</script>
