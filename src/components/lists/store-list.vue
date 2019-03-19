<template>
    <div>
        <div class="right-wrapper">
            <div class="location">当前位置：门店管理 > 门店列表</div>
            <div class="right-content">
                <div class="right-title">
                    <a :class="shopType === 'effective'? 'active': ''" @click="toggleTab('effective')">当前有效门店</a>
                    <a :class="shopType === 'logout'? 'active': ''" @click="toggleTab('logout')">已注销门店</a>
                </div>
                <div class="right-panel">
                    <div class="main-cont">
                        <div class="select-layer">
<!--
                          <span>地址：</span>
                          <div class="slcWrap">
                            <input name="" type="text" class="selectIpt no-bg no-bg sw100" value="" placeholder="" v-model="searchShopConditions.condition.province">
                            <span>省</span>
                          </div>
                          <div class="slcWrap">
                            <input name="" type="text" class="selectIpt no-bg no-bg sw100" value="" placeholder="" v-model="searchShopConditions.condition.city">
                            <span>市</span>
                          </div>
                          <div class="slcWrap">
                            <input name="" type="text" class="selectIpt no-bg no-bg sw100" value="" placeholder="" v-model="searchShopConditions.condition.area">
                            <span>区/县</span>
                          </div>
-->
                            <span>门店名称：</span>
                            <input name="" type="text" class="input-text" value="" placeholder="" v-model="searchShopConditions.condition.enterpriseName">
                            <input class="button blue" type="button" value="查询" @click="queryShopList" />
                            <input class="button blue fr" type="button" value="注销" @click="logoutShop('','已注销')" v-if="shopType === 'effective'"/>
                            <input class="button blue fr" type="button" value="添加" @click="GlobalDefined.AddModal()"v-if="shopType === 'effective'" />
                        </div>
                        <div class="table-wrap">
                            <table>
                                <tr>
                                    <td class="line-one" width="100"><input name="" type="checkbox" value="" class="check-all" @click="selectCheckbox($event)">全选</td>
                                    <td class="line-one" width="120">门店编码</td>
                                    <td class="line-one" width="150">门店名称</td>
                                    <td class="line-one">门店负责人</td>
                                    <td class="line-one">门店地址</td>
                                    <td class="line-one">操作</td>
                                </tr>
                                <tr v-for="shop in shopList">
                                  <td><input name="" type="checkbox" value="" class="check-son"></td>
                                  <td>{{shop.enterpriseId}}</td>
                                  <td>
                                    <!--<router-link to="/home/store-details">-->
                                    <router-link :to="{path:'/home/store-details',query: {id: shop.enterpriseId}}">
                                      {{shop.enterpriseName}}
                                    </router-link>

                                    <!--<a href="store-details.html">{{shop.enterpriseName}}</a>-->
                                  </td>
                                  <!--<td><a href="store-details.html">{{shop.enterpriseName}}</a></td>-->
                                  <td><span>{{shop.enterpriseContact}}</span>　　电话：<span>{{shop.contactPhone}}</span></td>
                                  <td>{{shop.enterpriseAddress}}</td>
                                  <td>
                                    <router-link class="button green" :to="{path:'/home/store-details',query: {id: shop.enterpriseId}}">
                                      详细
                                    </router-link>
                                    <a v-if="shopType === 'effective'" class="button red" @click="logoutShop(shop,'已注销')">注销</a>
                                    <a v-if="shopType === 'logout'" class="button red" @click="restoreShop(shop,'已恢复')">恢复</a>
                                  </td>

                                </tr>
                            </table>

                            <HY-pagination :totalNumber="pagination.totalNumber" :limitNumber="pagination.limitNumber" @HY_page="jumpPage($event)" :simpleType="true" class="pagination"></HY-pagination>
                        </div>
                    </div>
                </div>
            </div><!--/right-content-->

            <!--弹出层-->
            <div id="showOverLay" class="md-overlay" ></div>
            <div class="md-modal AddModal" >
            <div class="md-title ">添加门店信息<a class="md-close" @click="GlobalDefined.closeModal"></a></div>
            <div class="md-content">
              <div class="md-modal-inner">
                <h1 class="modal-inner-title">门店信息</h1>
                <!--<div class="selectDiv">-->
                  <!--<span class="sel-span">*门店编号</span><input name="" type="text" class="input-text" value="" placeholder="" v-model="createShopDetail.shopNo">-->
                <!--</div>-->
                <div class="selectDiv">
                  <span class="sel-span">*门店名称</span><input name="" type="text" class="input-text" value="" placeholder="" v-model="createShopDetail.enterpriseName">
                </div>
<!--
                <div class="selectDiv">
                  <span class="sel-span">*门店地址</span>
                  <div class="slcWrap">
                    <input name="" type="text" class="selectIpt no-bg no-bg sw100" value="" placeholder="" v-model="createShopDetail.province">
                    <span>省</span>
                  </div>
                  <div class="slcWrap">
                    <input name="" type="text" class="selectIpt no-bg no-bg sw100" value="" placeholder="" v-model="createShopDetail.city">
                    <span>市</span>
                  </div>
                  <div class="slcWrap">
                    <input name="" type="text" class="selectIpt no-bg no-bg sw100" value="" placeholder="" v-model="createShopDetail.area">
                    <span>区/县</span>
                  </div>

                </div>
-->
                <div class="selectDiv">
                  <span class="sel-span">*门店地址</span><input name="" type="text" class="input-text street-input" value="" placeholder="请填入详细街道地址" v-model="createShopDetail.street">
                </div>
                <div class="selectDiv">
                  <span class="sel-span">负责人</span><input name="" type="text" class="input-text" value="" placeholder="" v-model="createShopDetail.enterpriseContact">
                  <span class="sel-span"></span>
                  <span class="sel-span">联系电话</span><input name="" type="number" class="input-text" value="" placeholder="" v-model="createShopDetail.contactPhone" maxlength="11">
                </div>

              </div><!--/md-modal-inner-->
              <div class="md-modal-inner">
                <h1 class="modal-inner-title">设置管理员</h1>
                <div class="selectDiv">
                  <span class="sel-span">*管理员帐号</span><input name="" type="text" class="input-text" value="" placeholder="" v-model="createShopDetail.adminAccount">
                </div>
                <div class="selectDiv">
                  <span class="sel-span">*管理员名称</span><input name="" type="text" class="input-text" value="" placeholder="" v-model="createShopDetail.adminName">
                </div>
                <div class="selectDiv align-center">
                  <input name="" type="button" class="btn_blue" value="确定"  id="addYes" @click="createShop"><input name="" type="button" class="btn_blue" value="取消" @click="GlobalDefined.closeModal">
                </div>
              </div><!--/md-modal-inner-->
            </div><!--/modal-content-->
          </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'StoreList',
        data () {
            return {
              api: location.hostname.indexOf('localhost') > -1 ? '/api' : '',
              shopType: 'effective',
              shopState: 1,
              searchShopConditions: {
                "condition": {
//                  "province": "",
//                  "city": "",
//                  "area": "",
//                  "street": "",
                  "enterpriseId": 0,
                  "enterpriseName": "",
                  "enterpriseState": 1,
                  "enterpriseType": 0
                },
                "pageNum": 1,
                "pageSize": 5
              },
              createShopDetail: {
                shopNo: '',
                province: '',
                city: '',
                area: '',
                street: '',
                contactPhone: '',
                enterpriseAddress: '',
                enterpriseContact: '',
                enterpriseName: '',
                adminAccount: '',
                adminName: '',
              },
              shopList: [],
              pagination:{
                totalNumber: 0,
                limitNumber: 5
              }
            }
        },
        methods: {
          queryShopList: function () {
            this.searchShopConditions.pageSize = this.pagination.limitNumber;
            let params = this.GlobalDefined.getParams(this.searchShopConditions);
            this.http.post(this.GlobalDefined.api + '/shop/findPage', params, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
              this.shopList = res.data.data.list;
              this.pagination.totalNumber = res.data.data.total;
              this.selectCheckbox('');
            }).catch((e) => {
              this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
            })
          },
          createShop: function () {
            let params  = {
              "contactPhone": this.createShopDetail.contactPhone,
//              "enterpriseAddress": this.createShopDetail.province + this.createShopDetail.city + this.createShopDetail.area + this.createShopDetail.street,
              "enterpriseAddress": this.createShopDetail.street,
              "enterpriseContact": this.createShopDetail.enterpriseContact,
              "enterpriseName": this.createShopDetail.enterpriseName
            };
            this.http.post(this.GlobalDefined.api + '/shop/create', params, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
              this.GlobalDefined.showCenterTip('添加成功');
              this.GlobalDefined.closeModal();
              this.queryShopList()
            }).catch((e) => {
              this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
            })
          },
          logoutShop: function (shop, text) {
            let shopId = '';
            if(!shop){
              let logoutList = [];
              for(let i in $('.check-son')){
                if($('.check-son')[i]['checked']){
                  logoutList.push(this.shopList[i]['enterpriseId'])
                }
              }
              logoutList.length !== 1 ? this.GlobalDefined.showCenterTip('请选择一项') : (shopId = logoutList[0]);

            }else{
              shopId = shop.enterpriseId;
            }
            if(shopId){
              this.http.get(this.GlobalDefined.api + '/shop/disable?id=' + shopId, {
                headers: {
                  'Content-Type': 'application/json'
                }
              }).then((res) => {
                this.GlobalDefined.showCenterTip(text);
                this.queryShopList();
                this.GlobalDefined.setCheckboxStatus($('.check-all'), false);
              }).catch((e) => {
                this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
              })
            }
          },
          restoreShop: function (shop, text) {
            let params = {
              enterpriseId: shop.enterpriseId,
              enterpriseState: 1
            };
            this.http.post(this.GlobalDefined.api + '/shop/update', params, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
              this.GlobalDefined.showCenterTip(text);
              this.queryShopList();
            }).catch((e) => {
              this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
            })
          },
          toggleTab: function (tab) {
            this.shopType = tab;
            this.searchShopConditions.condition.enterpriseState = tab === 'effective' ? 1 :0;
            this.queryShopList();
          },
          jumpPage: function (page) {
            this.searchShopConditions.pageNum = page;
            this.queryShopList();
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
