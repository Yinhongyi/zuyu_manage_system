<template>
  <div>
    <div class="right-wrapper">
      <div class="location">当前位置：消费项目管理 > 消费项目列表 > 消费项目详情</div>
      <div class="right-content">
        <div class="right-title">
          <a class="active">消费项目详情</a>
        </div>
        <div class="right-panel">
          <div class="main-cont">
            <div class="details-wrap">
              <div class="details-top">
                <h1 class="details-title">基本信息</h1>
                <input class="button blue fr" type="button" value="删除" @click="logoutGoods(goodsData.goodsId)" />
                <input class="button blue fr" type="button" value="修改" @click="modifyGoodsMsg" />
              </div>
              <div class="details-cont cunsumer-project">
                <div class="picture"><img src="../../assets/images/details-pic.jpg"></div>
                <div class="cp-right">
                  <ul class="dcp-ul">
                    <li>项目名称：<b class="b-blue consumer-project-details-name">{{goodsData.goodsName}}</b></li>
                    <li>项目编号：<span>{{goodsData.goodsId}}</span></li>
                    <li>描述：<span class="consumer-project-details-description">{{goodsData.goodsDescription}}</span></li>
                  </ul>
                </div>
                <ul class="dcp-ul">
                  <li>当前门店：<b>{{goodsData.ownerName}}</b></li>
                  <li>项目类型：<span>{{goodsData.typeName}}</span></li>
                  <li>营业成本：<span>{{goodsData.goodsCost}}</span>元<span class="fenge"></span>项目价格：<b class="b-red">{{goodsData.goodsPrice}}</b>元</li>
                  <li>
                    <label class="checkbox-label">
                      <span v-if="goodsData.goodsProperties && goodsData.goodsProperties.extract">√</span>
                      <span v-else>×</span>
                      是否参与提成
                    </label>
                    <label class="checkbox-label">
                      <span v-if="goodsData.goodsProperties && goodsData.goodsProperties.discount">√</span>
                      <span v-else>×</span>
                      是否参与打折
                    </label>
                    <label class="checkbox-label">
                      <span v-if="goodsData.goodsProperties && goodsData.goodsProperties.supportMember">√</span>
                      <span v-else>×</span>
                      是否支持会员卡结算
                    </label>
                  </li>
                  <li><div class="line-dot"></div></li>
                  <li>
                    <label class="checkbox-label">
                      首钟时长：
                      <span>{{goodsData.goodsProperties && goodsData.goodsProperties.firstDuration}}</span>
                      分钟
                    </label>
                    <label class="checkbox-label">
                      加钟时长：
                      <span>{{goodsData.goodsProperties && goodsData.goodsProperties.plusDuration}}</span>
                      分钟
                    </label>
                    <label class="checkbox-label">
                      催钟提前时间：
                      <span>{{goodsData.goodsProperties && goodsData.goodsProperties.advanceDuration}}</span>
                      分钟
                    </label>
                  </li>
                </ul>
              </div>
            </div><!--/details-wrap-->


            <div class="details-wrap">
              <div class="details-top">
                <h1 class="details-title">拆分项目列表</h1>
                <!--<input class="button blue fr" type="button" value="删除" onClick="deleteCheckbox('已删除')" />-->
                <input class="button blue fr" type="button" value="添加拆分"  @click="addItemsMsg()" />
              </div>
              <div class="details-cont cunsumer-project">
                <div class="table-wrap">
                  <table>
                    <tr>
                      <td class="line-one" width="180"><input name="" type="checkbox" value="" class="check-all">全选</td>
                      <td class="line-one" width="200">拆分项目</td>
                      <td class="line-one" width="200">成本 / 价格</td>
                      <td class="line-one">操作</td>
                    </tr>
                    <tr v-for="items in itemsList">
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>{{items.itemName}}</td>
                      <td>{{items.itemCost}} / {{items.itemPrice}}</td>
                      <td><a class="button green" @click="modifyItemsMsg(items)">修改</a></td>
                    </tr>
                  </table>
                </div>
              </div><!--/details-cont-->
            </div>
          </div>
        </div><!--/right-panel-->

      </div>

      <div id="showOverLay" class="md-overlay" ></div>
      <div class="md-modal AddModal" >
        <div class="md-title ">修改消费项信息<a class="md-close" @click="GlobalDefined.closeModal"></a></div>
        <div class="md-content">
          <div class="md-modal-inner card-modal-inner">
            <h1 class="modal-inner-title">基本信息</h1>
            <div class="selectDiv">
              <span class="sel-span">当前门店</span>
              <div class="slcWrap" @click="isShowShopList = !isShowShopList">
                <input name="" type="text" class="selectIpt" readOnly="true" placeholder="请选择门店" v-model="updateGoodsData.ownerName">
                <ul class="selectUl" v-show="isShowShopList">
                  <li class="shop-list" v-for="shop in shopList" @click="selectShop(shop, 'modify')">{{shop.enterpriseName}}</li>
                </ul>
              </div>
            </div>
            <!--<div class="selectDiv">-->
              <!--<span class="sel-span">*项目编号</span><input name="" type="text" class="input-text" readonly v-model="updateGoodsData.goodsId">-->
            <!--</div>-->
            <div class="selectDiv">
              <span class="sel-span">*项目名称</span><input name="" type="text" class="input-text" v-model="updateGoodsData.goodsName">
            </div>
            <div class="selectDiv">
              <span class="sel-span">*项目类型</span>
              <div class="slcWrap" @click="isShowGoodsTypeList = !isShowGoodsTypeList">
                <input name="" type="text" class="selectIpt" readOnly="true" placeholder="请选择项目类型" v-model="updateGoodsData.typeName">
                <ul class="selectUl" v-show="isShowGoodsTypeList">
                  <li v-for="(goodsType, index) in goodsTypeList" @click="selectGoodsType(index, 'modify')">{{goodsType}}</li>
                </ul>
              </div>
            </div>

            <!--<div class="selectDiv">-->
              <!--<span class="sel-span">*项目类型</span><input name="" type="text" class="input-text" v-model="updateGoodsData.typeName">-->
            <!--</div>-->
            <div class="selectDiv">
              <span class="sel-span">*项目成本</span><input name="" type="text" class="input-text" v-model="updateGoodsData.goodsCost">
            </div>
            <div class="selectDiv">
              <span class="sel-span">*项目价格</span><input name="" type="text" class="input-text" v-model="updateGoodsData.goodsPrice">
            </div>
            <div class="selectDiv">
              <label class="checkbox-label">
                <input name="" type="checkbox" @click="setCurrentCheckboxStatus('extract')" v-model="updateGoodsData.goodsProperties && updateGoodsData.goodsProperties.extract"><span> 是否允许提成 </span>
              </label>
              <label class="checkbox-label">
                <input name="" type="checkbox" @click="setCurrentCheckboxStatus('discount')" v-model="updateGoodsData.goodsProperties && updateGoodsData.goodsProperties.discount"><span> 是否参与打折 </span>
              </label>
              <label class="checkbox-label">
                <input name="" type="checkbox" @click="setCurrentCheckboxStatus('supportMember')" v-model="updateGoodsData.goodsProperties && updateGoodsData.goodsProperties.supportMember"><span> 是否支持会员卡结算 </span>
              </label>
            </div>

          </div><!--/md-modal-inner-->
          <div class="md-modal-inner card-modal-inner">
            <h1 class="modal-inner-title">服务信息</h1>
            <div class="selectDiv">
              <span class="sel-span">首钟时长:</span><input name="" type="text" class="input-text" v-model="updateGoodsData.goodsProperties && updateGoodsData.goodsProperties.firstDuration"><span>分钟</span>
            </div>
            <div class="selectDiv">
              <span class="sel-span">加钟时长:</span><input name="" type="text" class="input-text" v-model="updateGoodsData.goodsProperties && updateGoodsData.goodsProperties.plusDuration"><span>分钟</span>
            </div>
            <div class="selectDiv">
              <span class="sel-span">催钟提前时间：</span><input name="" type="text" class="input-text" v-model="updateGoodsData.goodsProperties && updateGoodsData.goodsProperties.advanceDuration"><span>分钟</span>
            </div>
            <div class="selectDiv">
              <span class="sel-span textarea-span">描述</span>
              <textarea class="textarea-text" v-model="updateGoodsData.goodsDescription">消费项目描述</textarea>
            </div>
            <div class="selectDiv align-center">
              <input name="" type="button" class="btn_blue" value="确定" @click="updateGoodsMsg"><input name="" type="button" class="btn_blue" value="取消" @click="GlobalDefined.closeModal">
            </div>
          </div><!--/md-modal-inner-->
        </div><!--/modal-content-->
      </div>
      <div class="md-modal SetModal" >
        <div class="md-title ">
          <span v-if="setItemsType === 'add'">添加项目拆分信息</span>
          <span v-if="setItemsType === 'modify'">修改项目拆分信息</span>
          <a class="md-close" @click="GlobalDefined.closeModal"></a>
        </div>
        <div class="md-content">
          <div class="md-modal-inner card-modal-inner">
            <h1 class="modal-inner-title">基本信息</h1>
            <div class="selectDiv">
              <span class="sel-span">当前门店</span>
              <div class="slcWrap">
                {{goodsData.ownerName}}
              </div>
            </div>
            <div class="selectDiv">
              <span class="sel-span">项目名称</span>
              <div class="slcWrap">
                {{goodsData.goodsName}}
              </div>
            </div>
            <div class="selectDiv">
              <span class="sel-span">剩余可拆分价格</span>
              <div class="slcWrap">
                {{goodsData.goodsPrice}} 元
              </div>
            </div>
            <div class="selectDiv">
              <span class="sel-span">*拆分项名称</span><input name="" type="text" class="input-text" v-model="setItemsData.itemName">
            </div>
            <div class="selectDiv">
              <span class="sel-span">*拆分项成本</span><input name="" type="text" class="input-text" v-model="setItemsData.itemCost">
            </div>
            <div class="selectDiv">
              <span class="sel-span">*拆分项价格</span><input name="" type="text" class="input-text" v-model="setItemsData.itemPrice">
            </div>
            <div class="selectDiv align-center">
              <input v-if="setItemsType === 'add'" name="" type="button" class="btn_blue" value="添加" @click="addItems">
              <input v-if="setItemsType === 'modify'" name="" type="button" class="btn_blue" value="修改" @click="modifyItems">
              <input name="" type="button" class="btn_blue" value="取消" @click="GlobalDefined.closeModal">
            </div>
          </div><!--/md-modal-inner-->

        </div><!--/md-modal-inner-->
      </div><!--/modal-content-->
    </div>
  </div>
</template>

<script>
  export default {
    name: 'ConsumerProjectDetails',
    data () {
      return {
        goodsId: '',
        goodsData: {},
        goodsTypeList: ['服务项目', '小商品'],
        isShowGoodsTypeList: false,
        updateGoodsData: {
          "createTime": "",
          "creatorId": 0,
          "creatorName": "",
          "goodsCost": 0,
          "goodsDescription": "",
          "goodsId": 0,
          "goodsName": "",
          "goodsPrice": 0,
          "goodsProperties": {
            "advanceDuration": 0,
            "discount": false,
            "extract": false,
            "firstDuration": 0,
            "plusDuration": 0,
            "supportMember": false
          },
          "goodsState": 0,
          "goodsType": 0,
          "lastMenderId": 0,
          "lastMenderName": "",
          "lastUpdateTime": "",
          "ownerId": 0,
          "ownerName": "",
          "stateName": "",
          "typeName": ""
        },
        shopList: [],
        isShowShopList: false,
        itemsList: [],
        setItemsType: '',
        setItemsData: {}
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
      queryGoodsDetails: function () {
        this.http.get(this.GlobalDefined.api + '/goods/get?id=' + this.goodsId, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.goodsData = res.data.data;
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })
      },
      queryItemsList: function () {
        let params = {
          "goodsId": this.goodsId,
//          "itemName": "string",
//          "itemType": 0,
//          "status": 0
        };
        this.http.post(this.GlobalDefined.api + '/items/findList', params, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.itemsList = res.data.data;
          console.log(this.itemsList)
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })

      },
      logoutGoods: function (goodsId) {
        this.http.get(this.GlobalDefined.api + '/goods/disable?id=' + goodsId, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.GlobalDefined.showCenterTip('注销成功');
          this.$router.push('/consumption-list')
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })
      },
      modifyGoodsMsg: function () {
        this.updateGoodsData = this.GlobalDefined.deepClone(this.goodsData);
        this.GlobalDefined.AddModal();
      },
      updateGoodsMsg: function () {
        let params = this.GlobalDefined.getParams(this.updateGoodsData);
        if(this.updateGoodsData.creatorId !== sessionStorage.getItem("zy_userId")){
          params.lastMenderId = sessionStorage.getItem("zy_userId");
          params.lastMenderName = sessionStorage.getItem("zy_userAccount");
        }
        this.http.post(this.GlobalDefined.api + '/goods/update', params, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          if(res.data && res.data.data){
            this.queryGoodsDetails();
          }
          this.GlobalDefined.showCenterTip(res.data.message);
          this.GlobalDefined.closeModal();
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })
      },
      addItemsMsg: function () {
        this.setItemsType = 'add';
        this.setItemsData = {
          "goodsId": this.goodsId,
          "itemCost": '',
          "itemName": "",
          "itemPrice": ''
        };
        this.GlobalDefined.SetModal();
      },
      modifyItemsMsg: function (items) {
        this.setItemsType = 'modify';
        this.setItemsData = items;
        this.GlobalDefined.SetModal();
      },
      addItems: function () {
        let params = this.GlobalDefined.getParams(this.setItemsData);
        this.http.post(this.GlobalDefined.api + '/items/create', params, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          if(res.data && res.data.data){
            this.queryItemsList();
          }
          this.GlobalDefined.showCenterTip(res.data.message);
          this.GlobalDefined.closeModal();
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })

      },
      modifyItems: function () {
        let params = this.GlobalDefined.getParams(this.setItemsData);
        this.http.post(this.GlobalDefined.api + '/items/update', params, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          if(res.data && res.data.data){
            this.queryItemsList();
          }
          this.GlobalDefined.showCenterTip(res.data.message);
          this.GlobalDefined.closeModal();
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })

      },
      selectShop: function (shop, type) {
        this.updateGoodsData.ownerName = shop.enterpriseName;
        this.updateGoodsData.ownerId = shop.enterpriseId;
      },
      selectGoodsType: function (index, type) {
        this.updateGoodsData.typeName = this.goodsTypeList[index];
        this.updateGoodsData.goodsType = index;
      },
      setCurrentCheckboxStatus: function (type) {
        this.updateGoodsData.goodsProperties[type] = !this.updateGoodsData.goodsProperties[type];
      }
    },
    mounted () {
      this.goodsId = this.$route.query && this.$route.query.id;
      if(this.goodsId){
        this.queryShopList();
        this.queryGoodsDetails();
        this.queryItemsList();
      }else{
        this.$router.push('/consumption-list');
      }
    }
  }
</script>
