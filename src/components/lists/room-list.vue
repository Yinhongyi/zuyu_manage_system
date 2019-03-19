<template>
  <div>
    <div class="right-wrapper">
      <div class="location">当前位置：房间管理 > 房间列表</div>
      <div class="right-content">
        <div class="right-title">
          <a class="active">房间列表</a>
        </div>
        <div class="right-panel">
          <div class="main-cont">
            <div class="select-layer pleft">
              <span>按房间类型查询 : </span>
              <div class="slcWrap" @click="isShowSearchTypeList = !isShowSearchTypeList">
                <input name="" type="text" class="selectIpt" readOnly="true"  value="" placeholder="请选择房间类型" v-model="searchRoomType">
                <ul class="selectUl" v-show="isShowSearchTypeList">
                  <li class="shop-list" v-for="(type, index) in typeList" @click="selectType(index, 'search')">{{type}}</li>
                </ul>
              </div>
              <input class="button blue fr" type="button" value="删除" @click="logoutRoom()"  />
              <input class="button blue fr" type="button" value="添加" @click="GlobalDefined.AddModal()" />
              <input class="button blue fr" type="button" value="查询" @click="queryRoomList(currentShopId)"/>

            </div>
            <div class="table-wrap">
              <div class="left-tab">
                <!--<p class="cursor-pointer" @click="queryRoomList()">我的门店</p>-->
                <p class="cursor-pointer">我的门店</p>
                <ul class="left-tab-ul">
                  <li class="shop-list" v-for="shop in shopList" @click="queryRoomList(shop.enterpriseId)" :class="{'selected': currentShopId === shop.enterpriseId}">{{shop.enterpriseName}}</li>
                </ul>
              </div>
              <div class="left-tab-panel" v-if="roomList.length > 0">
                <table>
                  <tr>
                    <td class="line-one" width="100"><input name="" type="checkbox" value="" class="check-all" @click="selectCheckbox($event)">全选</td>
                    <td class="line-one" width="22%">房间号</td>
                    <td class="line-one" width="22%">房间类型</td>
                    <td class="line-one" width="20%">门店</td>
                    <td class="line-one" width="20%">操作</td>
                  </tr>
                  <tr v-for="room in roomList">
                    <td><input name="" type="checkbox" value="" class="check-son"></td>
                    <td>{{room.spaceName}}</td>
                    <td>{{room.typeName}}</td>
                    <td>{{room.enterpriseName}}</td>
                    <td><a class="button green" @click="modifyRoomMsg(room)">修改</a></td>
                  </tr>
                </table>
                <HY-pagination :totalNumber="pagination.totalNumber" :limitNumber="pagination.limitNumber" @HY_page="jumpPage($event)" :simpleType="true" class="pagination"></HY-pagination>
              </div>
              <div class="left-tab-panel" v-if="roomList.length === 0">
                <p style="padding:40px 100px">暂无数据</p>
              </div>
            </div>
          </div>

        </div>
        <!--/right-panel -->

      </div>
      <div id="showOverLay" class="md-overlay" ></div>
      <div class="md-modal AddModal" >
        <div class="md-title ">添加房间信息<a class="md-close" @click="GlobalDefined.closeModal"></a></div>
        <div class="md-content">
          <div class="md-modal-inner">
            <h1 class="modal-inner-title">基本信息</h1>
            <div class="selectDiv">
              <span class="sel-span">当前门店</span>
              <div class="slcWrap" @click="isShowCreateShopList = !isShowCreateShopList">
                <input name="" type="text" class="selectIpt" readOnly="true"  value="" placeholder="请选择门店" v-model="createRoomData.enterpriseName">
                <ul class="selectUl" v-show="isShowCreateShopList">
                  <li class="shop-list" v-for="shop in shopList" @click="selectShop(shop, 'create')">{{shop.enterpriseName}}</li>
                </ul>
              </div>
            </div>
            <div class="selectDiv">
              <span class="sel-span">房间类型</span>
              <div class="slcWrap" @click="isShowCreateTypeList = !isShowCreateTypeList">
                <input name="" type="text" class="selectIpt" readOnly="true"  value="" placeholder="请选择房间类型" v-model="createRoomData.typeName">
                <ul class="selectUl" v-show="isShowCreateTypeList">
                  <li class="shop-list" v-for="(type, index) in typeList" @click="selectType(index, 'create')">{{type}}</li>
                </ul>
              </div>

            </div>
            <div class="selectDiv">
              <span class="sel-span">房间名称</span><input name="" type="text" class="input-text" v-model="createRoomData.spaceName">
            </div>

          </div>
<!--
          <div class="md-modal-inner">
            <h1 class="modal-inner-title">其它信息</h1>
            <div class="selectDiv">
              <input name="" type="checkbox" value=""><span class="sel-span">是否收取房费</span>
            </div>
            <div class="selectDiv">
              <span class="sel-span">最低消费</span><input name="" type="text" class="input-text" value="" placeholder="">
            </div>
            <div class="selectDiv">
              <span class="sel-span">房费</span><input name="" type="text" class="input-text" value="" placeholder="">
            </div>
            <div class="selectDiv">
              <span class="sel-span textarea-span">描述</span>
              <textarea class="textarea-text"></textarea>
            </div>
          </div>
-->
          <div class="selectDiv align-center">
            <input name="" type="button" class="btn_blue" value="确定" @click="createRoom()"><input name="" type="button" class="btn_blue" value="取消" @click="GlobalDefined.closeModal">
          </div>

        </div><!--/modal-content-->
      </div>

      <div class="md-modal ChangeModal" >
        <div class="md-title ">修改房间信息<a class="md-close" @click="GlobalDefined.closeModal"></a></div>
        <div class="md-content">
          <div class="md-modal-inner">
            <h1 class="modal-inner-title">基本信息</h1>
            <div class="selectDiv">
              <span class="sel-span">当前门店</span>
              <div class="slcWrap" @click="isShowModifyShopList = !isShowModifyShopList">
                <input name="" type="text" class="selectIpt" readOnly="true"  value="" placeholder="请选择门店" v-model="modifyRoomData.enterpriseName">
                <ul class="selectUl" v-show="isShowModifyShopList">
                  <li class="shop-list" v-for="shop in shopList" @click="selectShop(shop, 'modify')">{{shop.enterpriseName}}</li>
                </ul>
              </div>
            </div>
            <div class="selectDiv">
              <span class="sel-span">房间类型</span>
              <div class="slcWrap" @click="isShowModifyTypeList = !isShowModifyTypeList">
                <input name="" type="text" class="selectIpt" readOnly="true"  value="" placeholder="请选择房间类型" v-model="modifyRoomData.typeName">
                <ul class="selectUl" v-show="isShowModifyTypeList">
                  <li class="shop-list" v-for="(type, index) in typeList" @click="selectType(index, 'modify')">{{type}}</li>
                </ul>
              </div>

            </div>
            <div class="selectDiv">
              <span class="sel-span">房间名称</span><input name="" type="text" class="input-text" v-model="modifyRoomData.spaceName">
            </div>
<!--
            <div class="selectDiv">
              <span class="sel-span">房间楼层</span><input name="" type="text" class="input-text" value="2" placeholder="">
            </div>
-->
            <div class="selectDiv align-center">
              <input name="" type="button" class="btn_blue" value="确定" @click="modifyRoom"><input name="" type="button" class="btn_blue" value="取消" @click="GlobalDefined.closeModal">

            </div>

          </div><!--/md-modal-inner-->
<!--
          <div class="md-modal-inner">
            <h1 class="modal-inner-title">其它信息</h1>
            <div class="selectDiv">
              <input name="" type="checkbox" checked><span class="sel-span">是否收取房费</span>
            </div>
            <div class="selectDiv">
              <span class="sel-span">最低消费</span><input name="" type="text" class="input-text" value="100" placeholder="">
            </div>
            <div class="selectDiv">
              <span class="sel-span">房费</span><input name="" type="text" class="input-text" value="100" placeholder="">
            </div>
            <div class="selectDiv">
              <span class="sel-span textarea-span">描述</span>
              <textarea class="textarea-text">房间描述</textarea>
            </div>
          </div>&lt;!&ndash;/md-modal-inner&ndash;&gt;
-->
        </div><!--/modal-content-->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'RoomList',
    data () {
      return {
        searchRoomConditions: {
          "condition": {
            "enterpriseId": 0,
            "spaceState": 1,
            "spaceType": 0
          },
          "pageNum": 1,
          "pageSize": 5
        },
        shopList: [],
        roomList: [],
        currentShopId: '',
        isShowSearchTypeList: false,
        isShowCreateShopList: false,
        isShowModifyShopList: false,
        isShowCreateTypeList: false,
        isShowModifyTypeList: false,
        searchRoomType: '',
        typeList: ['单人间', '双人间', '三人间', '多人间'],
        createRoomData: {
          "enterpriseId": 0,
          "enterpriseName": "",
          "spaceName": "",
          "spaceType": 0,
          "typeName": ""
        },
        modifyRoomData: {},

        pagination:{
          totalNumber: 0,
          limitNumber: 5
        },

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
          this.queryRoomList(shopId);
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })
      },
      queryRoomList: function (shopId) {
        this.searchRoomConditions.pageSize = this.pagination.limitNumber;
        this.searchRoomConditions.condition.enterpriseId = shopId || '';
        this.currentShopId = shopId || '';
        let params = this.GlobalDefined.getParams(this.searchRoomConditions);
        (this.searchRoomType) ? (params.condition.spaceType = params.condition.spaceType || 0) : '';
        this.http.post(this.GlobalDefined.api + '/room/findPage', params, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.roomList = res.data.data.list;
          this.pagination.totalNumber = res.data.data.total;
          this.selectCheckbox('');
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })
      },
      createRoom: function () {
        let params = this.GlobalDefined.getParams(this.createRoomData);
        params.typeName ? (params.spaceType = params.spaceType || 0) : '';
        this.http.post(this.GlobalDefined.api + '/room/create', params, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.queryRoomList(this.currentShopId);
          this.GlobalDefined.showCenterTip(res.data.message);
          this.GlobalDefined.closeModal();
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })

      },
      modifyRoomMsg: function (room) {
        this.http.get(this.GlobalDefined.api + '/room/get?id=' + room.spaceId, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          console.log(res.data);
          this.modifyRoomData = this.GlobalDefined.deepClone(res.data.data);
          this.GlobalDefined.ChangeModal();
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })
      },
      modifyRoom: function () {
        if(this.modifyRoomData.creatorId !== sessionStorage.getItem("zy_userId")){
          this.modifyRoomData.lastMenderId = sessionStorage.getItem("zy_userId");
          this.modifyRoomData.lastMenderName = sessionStorage.getItem("zy_userAccount");
        }
        let params = this.GlobalDefined.getParams(this.modifyRoomData);
        console.log(params);
        this.http.post(this.GlobalDefined.api + '/room/update', params, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.queryRoomList(this.currentShopId);
          this.GlobalDefined.showCenterTip(res.data.message);
          this.GlobalDefined.closeModal();
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })

      },
      logoutRoom: function (room) {
        let roomId = '';
        if(!room){
          let logoutList = [];
          for(let i in $('.check-son')){
            if($('.check-son')[i]['checked']){
              logoutList.push(this.roomList[i]['spaceId'])
            }
          }
          logoutList.length !== 1 ? this.GlobalDefined.showCenterTip('请选择一项') : (roomId = logoutList[0]);

        }else{
          roomId = room.spaceId;
        }
        if(roomId){
          this.http.get(this.GlobalDefined.api + '/room/disable?id=' + roomId, {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res) => {
            this.GlobalDefined.showCenterTip('注销成功');
            this.queryRoomList(this.currentShopId);
            this.GlobalDefined.setCheckboxStatus($('.check-all'), false);
          }).catch((e) => {
            this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
          })
        }
      },
      selectShop: function (shop, type) {
        if(type === 'create'){
          this.createRoomData.enterpriseName = shop.enterpriseName;
          this.createRoomData.enterpriseId = shop.enterpriseId;
        }else{
          this.modifyRoomData.enterpriseName = shop.enterpriseName;
          this.modifyRoomData.enterpriseId = shop.enterpriseId;
        }
      },
      selectType: function (index, type) {
        if(type === 'create'){
          this.createRoomData.spaceType = index;
          this.createRoomData.typeName = this.typeList[index];
        }else if(type === 'modify'){
          this.modifyRoomData.spaceType = index;
          this.modifyRoomData.typeName = this.typeList[index];
        }else{
          this.searchRoomType = this.typeList[index];
          this.searchRoomConditions.condition.spaceType = index;
        }
      },
      selectCheckbox:function (e) {
        this.GlobalDefined.selectAllCheckbox(e && e.target);
      },
    },
    mounted () {
      this.queryShopList();
//      this.queryRoomList();
    }
  }
</script>
