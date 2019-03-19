<template>
    <div>
      <div class="right-wrapper">
        <div class="location">当前位置：会员管理 > 消费项目列表</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">消费项目列表</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer pleft">
                <span>按消费类型查询 </span>
                <div class="slcWrap" @click="isShowGoodsTypeList = !isShowGoodsTypeList">
                  <input name="" type="text" class="selectIpt sw200" readOnly="true"  value="" placeholder="所有消费类型" v-model="searchGoodType">
                  <ul class="selectUl" v-show="isShowGoodsTypeList">
                    <li v-for="(goodsType, index) in goodsTypeList" @click="selectGoodsType(index, 'search')">{{goodsType}}</li>
                  </ul>
                </div>
                <input class="button blue" type="button" value="查询" @click="searchGoods()" />

                <input class="button blue fr" type="button" value="注销" @click="logoutGoods()" />
                <input class="button blue fr" type="button" value="添加" @click="createGoodsMsg" />
              </div>
              <div class="table-wrap">
                <div class="left-tab">
                  <!--<p @click="shopId = '';queryGoodsList()">我的门店</p>-->
                  <p class="cursor-pointer">我的门店</p>
                  <ul class="left-tab-ul">
                    <li class="shop-list" v-for="shop in shopList" @click="queryGoodsList(shop.enterpriseId, shop)" :class="{'selected': shopId === shop.enterpriseId}">{{shop.enterpriseName}}</li>
                  </ul>
                </div>
                <div class="left-tab-panel" v-if="goodsList.length > 0">
                  <table>
                    <tr>
                      <td class="line-one" width="100"><input name="" type="checkbox" value="" class="check-all" @click="selectCheckbox($event)">全选</td>
                      <td class="line-one" width="120">项目编号</td>
                      <td class="line-one" width="150">消费项目</td>
                      <td class="line-one">项目类型</td>
                      <td class="line-one">价格</td>
                      <!--<td class="line-one">门店</td>-->
                      <td class="line-one">操作</td>
                    </tr>
                    <tr v-for="(goods, index) in goodsList">
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>{{goods.goodsId}}</td>
                      <td>{{goods.goodsName}}</td>
                      <td>{{goods.typeName}}</td>
                      <td>{{goods.goodsPrice}}</td>
                      <!--<td>{{goods.ownerName}}</td>-->
                      <td>
                        <router-link class="button green" :to="{path:'/home/consumer-project-details',query: {id: goods.goodsId}}">
                          详细
                        </router-link>
                        <a class="button red" @click="splitGoods(goods)">拆分</a>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="left-tab-panel" v-if="goodsList.length === 0">
                  <p style="padding:40px 100px">暂无数据</p>
                </div>
              </div>
            </div>
            <HY-pagination :totalNumber="pagination.totalNumber" :limitNumber="pagination.limitNumber" @HY_page="jumpPage($event)" :simpleType="true" class="pagination"></HY-pagination>

<!--
            <div class="footPages">
              <a href="" >上页</a> <a href="">下页</a>
              <span class="on">1</span>
              <span>2</span>
              <span>3</span>
              <span>...</span>
              <span>10</span>
              <input name="" type="text" class="pageInput">
              <input type="button" value="跳转" class="pageJump" />
            </div>
-->
          </div>

          <div id="showOverLay" class="md-overlay" ></div>
          <div class="md-modal AddModal" >
            <div class="md-title ">添加消费项信息<a class="md-close" @click="GlobalDefined.closeModal"></a></div>
            <div class="md-content">
              <div class="md-modal-inner card-modal-inner">
                <h1 class="modal-inner-title">基本信息</h1>
                <div class="selectDiv">
                  <span class="sel-span">*当前门店</span>
                  <div class="slcWrap" @click="isShowShopList = !isShowShopList">
                    <input name="" type="text" class="selectIpt" readOnly="true" placeholder="请选择门店" v-model="createGoodsConditions.ownerName">
                    <ul class="selectUl" v-show="isShowShopList">
                      <li class="shop-list" v-for="shop in shopList" @click="selectShop(shop)">{{shop.enterpriseName}}</li>
                    </ul>
                  </div>
                </div>
<!--
                <div class="selectDiv">
                  <span class="sel-span">*项目编号</span><input name="" type="text" class="input-text" value="" placeholder="">
                </div>
-->
                <div class="selectDiv">
                  <span class="sel-span">*项目类型</span>
                  <div class="slcWrap" @click="isShowCreateGoodsTypeList = !isShowCreateGoodsTypeList">
                    <input name="" type="text" class="selectIpt" readOnly="true" placeholder="请选择项目类型" v-model="createGoodsConditions.typeName">
                    <ul class="selectUl" v-show="isShowCreateGoodsTypeList">
                      <li v-for="(goodsType, index) in goodsTypeList" @click="selectGoodsType(index, 'create')">{{goodsType}}</li>
                    </ul>
                  </div>
                </div>
                <div class="selectDiv">
                  <span class="sel-span">*项目名称</span><input name="" type="text" class="input-text" placeholder="" v-model="createGoodsConditions.goodsName">
                </div>
                <div class="selectDiv">
                  <span class="sel-span">*项目成本</span><input name="" type="text" class="input-text" placeholder="" v-model="createGoodsConditions.goodsCost">
                </div>
                <div class="selectDiv">
                  <span class="sel-span">*项目价格</span><input name="" type="text" class="input-text" placeholder="" v-model="createGoodsConditions.goodsPrice">
                </div>

              </div><!--/md-modal-inner-->
              <div class="md-modal-inner card-modal-inner">
                <h1 class="modal-inner-title">服务信息</h1>
<!--
                <div class="selectDiv">
                  <input name="" type="checkbox" value=""><span> 是否钟房项目 </span>
                </div>
-->
                <div class="selectDiv">
                  <label class="checkbox-label">
                    <input name="" type="checkbox"
                           @click="createGoodsConditions.goodsProperties.extract = !createGoodsConditions.goodsProperties.extract">是否允许提成
                  </label>
                  <label class="checkbox-label">
                    <input name="" type="checkbox"
                           @click="createGoodsConditions.goodsProperties.discount = !createGoodsConditions.goodsProperties.discount">是否参与打折
                  </label>
                  <label class="checkbox-label">
                    <input name="" type="checkbox"
                           @click="createGoodsConditions.goodsProperties.supportMember = !createGoodsConditions.goodsProperties.supportMember">是否支持会员卡结算
                  </label>
                </div>

                <!--
                                <div class="selectDiv">
                                  <span class="sel-span">提供服务人数:</span><input name="" type="text" class="input-text" value="" placeholder="1">
                                </div>
                -->
                <div class="selectDiv">
                  <span class="sel-span">首钟时长:</span>
                  <input name="" type="text" class="input-text" placeholder="" v-model="createGoodsConditions.goodsProperties.firstDuration">
                  <span>分钟</span>
                </div>
                <div class="selectDiv">
                  <span class="sel-span">加钟时长:</span>
                  <input name="" type="text" class="input-text" placeholder="" v-model="createGoodsConditions.goodsProperties.plusDuration">
                  <span>分钟</span>
                </div>
                <div class="selectDiv">
                  <span class="sel-span">催钟提前时间：</span>
                  <input name="" type="text" class="input-text" placeholder="" v-model="createGoodsConditions.goodsProperties.advanceDuration">
                  <span>分钟</span>
                </div>
                <div class="selectDiv">
                  <span class="sel-span textarea-span">描述</span>
                  <textarea class="textarea-text" v-model="createGoodsConditions.goodsDescription"></textarea>
                </div>
                <div class="selectDiv align-center">
                  <input name="" type="button" class="btn_blue" value="确定" @click="createGoods"><input name="" type="button" class="btn_blue" value="取消" @click="GlobalDefined.closeModal">
                </div>
              </div><!--/md-modal-inner-->
            </div><!--/modal-content-->
          </div>

          <div class="md-modal SetModal" >
            <div class="md-title ">添加项目拆分信息<a class="md-close" @click="GlobalDefined.closeModal"></a></div>
            <div class="md-content">
              <div class="md-modal-inner card-modal-inner">
                <h1 class="modal-inner-title">基本信息</h1>
                <div class="selectDiv">
                  <span class="sel-span">当前门店</span>
                  <div class="slcWrap">
                    {{currentShopName}}
                  </div>
                </div>
                <div class="selectDiv">
                  <span class="sel-span">项目名称</span>
                  <div class="slcWrap">
                    {{setGoodsData.goodsName}}
                  </div>
                </div>
                <div class="selectDiv">
                  <span class="sel-span">剩余可拆分价格</span>
                  <div class="slcWrap">
                    {{setGoodsData.goodsPrice}}
                  </div>
                </div>
                <div class="selectDiv">
                  <span class="sel-span">*拆分项名称</span><input name="" type="text" class="input-text" v-model="setGoodsData.itemName">
                </div>
                <div class="selectDiv">
                  <span class="sel-span">*拆分项成本</span><input name="" type="text" class="input-text" v-model="setGoodsData.itemCost">
                </div>
                <div class="selectDiv">
                  <span class="sel-span">*拆分项价格</span><input name="" type="text" class="input-text" v-model="setGoodsData.itemPrice">
                </div>
                <div class="selectDiv align-center">
                  <input name="" type="button" class="btn_blue" value="确定" @click="addItems"><input name="" type="button" class="btn_blue" value="取消" @click="GlobalDefined.closeModal">
                </div>
              </div><!--/md-modal-inner-->
            </div><!--/modal-content-->
          </div>

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'ConsumptionList',
        data () {
            return {
              shopId: '',
              currentShopName: '',
              isShowGoodsTypeList: false,
              isShowCreateGoodsTypeList: false,
              isShowShopList: false,
              searchGoodsConditions: {
                "condition": {
                  "goodsId": 0,
                  "goodsName": "",
                  "goodsState": 1,
                  "goodsType": 0,
                  "ownerId": 0
                },
                "pageNum": 1,
                "pageSize": 5
              },
              goodsTypeList: ['服务项目', '小商品'],
              goodsList: [],
              shopList: [],
              searchGoodType: '',
              createGoodsConditions: {
                "creatorId": 0,
                "creatorName": "",
                "goodsCost": 0,
                "goodsDescription": "",
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
                "goodsType": 0,
                "ownerId": 0,
                "ownerName": "",
                "typeName": ""
              },
              setGoodsData: {},

              pagination:{
                totalNumber: 0,
                limitNumber: 5
              }
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
              this.shopId = this.shopList[0].enterpriseId;
              this.shopList.length > 0 ? this.queryGoodsList(this.shopId) : '';
            }).catch((e) => {
              this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
            })
          },
          queryGoodsList: function (shopId, shop) {
            this.currentShopName = (shop && shop.enterpriseName) || '';
            this.searchGoodsConditions.pageSize = this.pagination.limitNumber;
            this.searchGoodsConditions.condition.ownerId = shopId || '';
            this.shopId = shopId || '';
            let params = this.GlobalDefined.getParams(this.searchGoodsConditions);
            this.searchGoodType ? (params.condition.goodsType = params.condition.goodsType || 0) : '';

            this.http.post(this.GlobalDefined.api + '/goods/findPage', params, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
              this.goodsList = res.data.data.list;
              this.pagination.totalNumber = res.data.data.total;
            }).catch((e) => {
              this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
            })
          },
          createGoodsMsg: function () {
            this.createGoodsConditions = {
              "creatorId": 0,
              "creatorName": "",
              "goodsCost": 0,
              "goodsDescription": "",
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
              "goodsType": 0,
              "ownerId": 0,
              "ownerName": "",
              "typeName": ""
            };
            this.GlobalDefined.AddModal()
          },
          createGoods: function () {
            let params = this.GlobalDefined.getParams(this.createGoodsConditions);
            params.creatorId = sessionStorage.getItem("zy_userId");
            params.creatorName = sessionStorage.getItem("zy_userAccount");
            params.goodsCost = params.goodsCost || 0;
            params.goodsPrice = params.goodsPrice || 0;
            params.goodsType = params.goodsType || 0;
            params.goodsProperties.firstDuration = params.goodsProperties.firstDuration || 0;
            params.goodsProperties.plusDuration = params.goodsProperties.plusDuration || 0;
            params.goodsProperties.advanceDuration = params.goodsProperties.advanceDuration || 0;
            console.log(params);
            this.http.post(this.GlobalDefined.api + '/goods/create', params, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
//              this.goodsList = res.data.data.list;
              this.GlobalDefined.showCenterTip('添加成功');
              this.GlobalDefined.closeModal();
              this.queryGoodsList(this.shopId)

            }).catch((e) => {
              this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
            })
          },
          searchGoods: function () {
            this.queryGoodsList(this.shopId);
          },
          logoutGoods: function (goods) {
            let goodsId = '';
            if(!goods){
              let logoutList = [];
              for(let i in $('.check-son')){
                if($('.check-son')[i]['checked']){
                  logoutList.push(this.goodsList[i]['goodsId'])
                }
              }
              logoutList.length !== 1 ? this.GlobalDefined.showCenterTip('请选择一项') : (goodsId = logoutList[0]);

            }else{
              goodsId = goods.goodsId;
            }
            if(goodsId){
              this.http.get(this.GlobalDefined.api + '/goods/disable?id=' + goodsId, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then((res) => {
                this.GlobalDefined.showCenterTip('注销成功');
                this.queryGoodsList(this.shopId);
                this.GlobalDefined.setCheckboxStatus($('.check-all'), false);
              }).catch((e) => {
                this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
              })
            }
          },
          splitGoods: function (goods) {
            this.setGoodsData = goods;
            this.GlobalDefined.SetModal();
          },
          addItems: function () {
            let params = {
              "goodsId": this.setGoodsData.goodsId,
              "itemCost": this.setGoodsData.itemCost,
              "itemName": this.setGoodsData.itemName,
              "itemPrice": this.setGoodsData.itemPrice
            };
            console.log(params);
            this.http.post(this.GlobalDefined.api + '/items/create', params, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
              if(res.data && res.data.data){
                this.queryGoodsList(this.shopId);
              }
              this.GlobalDefined.showCenterTip(res.data.message);
              this.GlobalDefined.closeModal();
            }).catch((e) => {
              this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
            })
          },
          selectGoodsType: function (index, type) {
            if(type === 'search'){
              this.searchGoodType = this.goodsTypeList[index];
              this.searchGoodsConditions.condition.goodsType = index;
            }else{
              this.createGoodsConditions.goodsType = index;
              this.createGoodsConditions.typeName = this.goodsTypeList[index];
            }
          },
          selectShop: function (shop) {
            this.createGoodsConditions.ownerId = shop.enterpriseId;
            this.createGoodsConditions.ownerName = shop.enterpriseName;
          },
          jumpPage: function (page) {
            this.searchGoodsConditions.pageNum = page;
            this.queryGoodsList(this.shopId);
          },
          selectCheckbox:function (e) {
            this.GlobalDefined.selectAllCheckbox(e && e.target);
          }
        },
        mounted () {
            this.queryShopList();
        }
    }
</script>
