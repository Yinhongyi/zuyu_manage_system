<template>
    <div>
      <div class="right-wrapper  width-new-lg-right">
        <div class="location">当前位置：营业数据 > 已结账单列表</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">已结账单列表</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer accounts-layer pleft">
                <span>账单号：</span><input name="" type="text" class="input-text" v-model="searchOrderConditions.condition.orderId">
                <span>批次号：</span><input name="" type="text" class="input-text" v-model="searchOrderConditions.condition.batchNumber">
                <span>手牌号：</span><input name="" type="text" class="input-text" v-model="searchOrderConditions.condition.customerName">
                <span>订单类型：</span>
                <div class="slcWrap" @click="isShowOrderType = !isShowOrderType">
                  <input name="" type="text" class="selectIpt" readOnly="true"  value="" placeholder="请选择门店" v-model="selectedSearchType">
                  <ul class="selectUl" v-show="isShowOrderType">
                    <li class="shop-list" v-for="(type, index) in orderTypeList" @click="selectType(index, 'search')">{{type}}</li>
                  </ul>
                </div>

                <!--
                                <span>消费项目：</span>
                                <div class="slcWrap">
                                  <input name="" type="text" class="selectIpt sw150" readOnly="true"  value="" placeholder="请选择消费项目">
                                  <ul class="selectUl">
                                    <li>吃饭</li>
                                    <li>文具</li>
                                  </ul>
                                </div>
                -->
<!--
                <span>支付方式：</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw150" readOnly="true"  value="" placeholder="请选择支付方式">
                  <ul class="selectUl">
                    <li>现金</li>
                    <li>银行卡</li>
                  </ul>
                </div>
-->
                <span>消费时间：</span>
                <div class="slcWrap">
                  <div class="ta_date" id="div_date1">
                    <span class="date_title" id="date1"></span>
                    <a class="opt_sel" id="input_trigger1" href="#">
                      <i class="i_orderd"></i>
                    </a>
                  </div>
                </div>
                <!--<label class="checkbox-label"><input name="" type="checkbox" value="">打折账单</label>-->
                <input class="button blue" type="button" value="查询" @click="queryOrderList(currentShopId)"/>
              </div>
              <div class="table-wrap accounts-tab">
                <div class="left-tab">
                  <!--<p class="cursor-pointer" @click="queryOrderList()">我的门店</p>-->
                  <p class="cursor-pointer">我的门店</p>
                  <ul class="left-tab-ul">
                    <li class="shop-list" v-for="shop in shopList" @click="queryOrderList(shop.enterpriseId)" :class="{'selected': currentShopId === shop.enterpriseId}">{{shop.enterpriseName}}</li>
                  </ul>
                </div>
                <div class="left-tab-panel" v-if="orderList.length > 0">
                  <table>
                    <tr>
                      <td class="line-one">账单号</td>
                      <td class="line-one">批次号</td>
                      <td class="line-one">手牌号</td>
                      <td class="line-one">订单类型</td>
                      <td class="line-one">消费项目</td>
                      <td class="line-one">消费时间</td>
                      <td class="line-one">营销员</td>
                      <td class="line-one">应收金额</td>
                      <td class="line-one">实收金额</td>
                      <td class="line-one">结账时间</td>
                      <td class="line-one">操作</td>
                    </tr>
                    <tr v-for="order in orderList">
                      <td>{{order.orderId}}</td> <!--账单号-->
                      <td>{{order.batchNumber}}</td> <!--批次号-->
                      <td>{{order.customerName}}</td> <!--手牌号-->
                      <td>{{order.typeName}}</td> <!--订单类型-->
                      <td>{{order.goodsName}}</td> <!--消费项目-->
                      <td style="white-space: pre;">{{order.orderTime && order.orderTime.substring(0,order.orderTime.length-9).replace('T', '   ')}}</td> <!--消费时间-->
                      <td>{{order.salesmanName}}</td> <!--营销员-->
                      <td>{{order.orderPrice}}</td> <!--应收金额-->
                      <td>{{order.receivableTotal}}</td> <!--实收金额-->
                      <td style="white-space: pre;">{{order.paymentTime && order.paymentTime.substring(0,order.paymentTime.length-9).replace('T', '   ')}}</td> <!--结账时间-->
                      <td>
                        <router-link class="button green" :to="{path:'/home/bill-details',query: {id: order.orderId}}">
                          详细
                        </router-link>

                        <a class="button green" @click="GlobalDefined.ChangeModal();queryOrderDetails(order.orderId)">修改</a>
                      </td>
                    </tr>
                  </table>
                  <HY-pagination :totalNumber="pagination.totalNumber" :limitNumber="pagination.limitNumber" @HY_page="jumpPage($event)" :simpleType="true" class="pagination"></HY-pagination>
                </div>

<!--
                <router-link class="button green" :to="{path:'/home/bill-details',query: {id: '458692434449309696'}}">
                  详细
                </router-link>
-->

                <div class="left-tab-panel" v-if="orderList.length === 0">
                  <p style="padding:40px 100px">暂无数据</p>
                </div>
              </div>
            </div>
          </div>
          <!--/right-panel -->

          <!--弹出层-->
          <div id="showOverLay" class="md-overlay" ></div>
          <div class="md-modal ChangeModal" >
            <div class="md-title ">修改账单信息<a class="md-close" @click="GlobalDefined.closeModal"></a></div>
            <div class="md-content">
              <div class="md-modal-inner">
                <div class="selectDiv">
                  <span class="sel-span">账单号：</span>
                  <span class="sel-val">{{orderDetails.orderId}}</span>
                  <!--<input name="" type="text" class="input-text" v-model="orderDetails.orderId">-->
                </div>
                <div class="selectDiv">
                  <span class="sel-span">批次号：</span><input name="" type="text" class="input-text" v-model="orderDetails.batchNumber">
                </div>
                <div class="selectDiv">
                  <span class="sel-span">手牌号：</span><input name="" type="text" class="input-text" v-model="orderDetails.customerName">
                </div>
                <div class="selectDiv">
                  <span class="sel-span">门 店：</span>
                  <div class="slcWrap" @click="isShowShopList = !isShowShopList">
                    <input name="" type="text" class="selectIpt" readOnly="true"  value="" placeholder="请选择门店" v-model="orderDetails.ownerName">
                    <ul class="selectUl" v-show="isShowShopList">
                      <li class="shop-list" v-for="shop in shopList" @click="selectShop(shop, 'modify')">{{shop.enterpriseName}}</li>
                    </ul>
                  </div>
                  <span class="sel-span">房间号：</span><input name="" type="text" class="input-text sw100" v-model="orderDetails.orderer">
                </div>
                <div class="selectDiv">
                  <span class="sel-span">消费项目：</span><input name="" type="text" class="input-text" v-model="orderDetails.goodsName">
                </div>

                <div class="selectDiv">
                  <span class="sel-span">消费时间：</span><span class="sel-val">{{orderDetails.orderDate && orderDetails.orderDate.substring(0,orderDetails.orderDate.length-9).replace('T', '   ')}}</span>
                </div>
                <div class="selectDiv">
                  <span class="sel-span">营销员：</span><input name="" type="text" class="input-text" v-model="orderDetails.salesmanName">
                </div>
<!--
                <div class="selectDiv">
                  <span class="sel-span">技师：</span><input name="" type="text" class="input-text" v-model="orderDetails.salesmanName">
                </div>
-->
                <div class="selectDiv">
                  <span class="sel-span">应收金额：</span><input name="" type="text" class="input-text" v-model="orderDetails.orderPrice">
                </div>
                <div class="selectDiv">
                  <span class="sel-span">实收金额：</span><input name="" type="text" class="input-text" v-model="orderDetails.receivableTotal">
                </div>
<!--
                <div class="selectDiv">
                  <span class="sel-span">折扣金额：</span><input name="" type="text" class="input-text" v-model="orderDetails.overdueLong">
                </div>
-->
<!--
                <div class="selectDiv">
                  <span class="sel-span">支付方式：</span>
                  <div class="slcWrap">
                    <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="现金" placeholder="">
                    <ul class="selectUl">
                      <li>现金</li>
                      <li>刷卡</li>
                    </ul>
                  </div>
                </div>
-->
<!--
                <div class="selectDiv">
                  <span class="sel-span">是否打折：</span>
                  <label class="checkbox-label"><input name="sex" type="radio" />是</label>
                  <label class="checkbox-label"><input name="sex" type="radio" checked />否</label>
                </div>
-->
<!--
                <div class="selectDiv">
                  <span class="sel-span">授权人：</span><span class="sel-val">wangan</span>
                </div>
-->
                <div class="selectDiv">
                  <span class="sel-span">订单类型：</span>
                  <div class="slcWrap" @click="isShowType = !isShowType">
                    <input name="" type="text" class="selectIpt" readOnly="true" value="" placeholder="" v-model="orderDetails.typeName">
                    <ul class="selectUl" v-show="isShowType">
                      <li v-for="(type, index) in orderTypeList" @click="selectType(index, 'modify')">{{type}}</li>
                    </ul>
                  </div>
                </div>
                <div class="selectDiv">
                  <span class="sel-span">订单状态：</span>
                  <div class="slcWrap" @click="isShowState = !isShowState">
                    <input name="" type="text" class="selectIpt" readOnly="true" value="" placeholder="" v-model="orderDetails.stateName">
                    <ul class="selectUl" v-show="isShowState">
                      <li v-for="(state, index) in orderStateList" @click="selectState(state, index)">{{state}}</li>
                    </ul>
                  </div>
                </div>

                <div class="selectDiv">
                  <span class="sel-span">结账时间：</span><span class="sel-val">{{orderDetails.orderTime && orderDetails.orderTime.substring(0,orderDetails.orderTime.length-9).replace('T', '   ')}}</span>
                </div>
                <!--<div class="selectDiv">-->
                  <!--<span class="sel-span">收银员：</span> <input name="" type="text" class="input-text" value="小李" placeholder="">-->
                <!--</div>-->
                <div class="selectDiv align-center">
                  <input name="" type="button" class="btn_blue" value="确定" @click="modifyOrderMsg"><input name="" type="button" class="btn_blue" value="取消" @click="GlobalDefined.closeModal">
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
        name: 'UserRoleList',
        data () {
            return {
              searchOrderConditions: {
                "condition": {
                  "batchNumber": '',
                  "endTime": '',
                  "orderId": '',
                  "orderState": 1, //订单状态：0-未结算， 1-已结算， 2-挂账
                  "orderTime": '',
                  "orderType": 0,
                  "ownerId": 0,
                  "paymentState": '',
                  "salesmanId": '',
                  "startTime": ''
                },
                "pageNum": 1,
                "pageSize": 5
              },
              currentShopId: '',
              shopList: [],
              orderList: [],
              orderDetails: {},
              isShowShopList: false,
              orderTypeList: ['排钟','加钟','点钟','加班'],
              orderStateList: ['未结算','已结算','挂账'],
              isShowType: false,
              isShowState: false,
              isShowOrderType: false,
              selectedSearchType: '',

              pagination:{
                totalNumber: 0,
                limitNumber: 5
              }
            }
        },
        methods: {
          getCustomizedDate: function (number) {
            let currentDate = new Date();
            let date;
            if(!number){
              date = currentDate.getFullYear() + "-" + (currentDate.getMonth() + 1) + "-" + currentDate.getDate();
            }else{
              let customizedDate = new Date(new Date(Date.parse(currentDate) + number*24*3600*1000));
              date = customizedDate.getFullYear() + "-" + (customizedDate.getMonth() + 1) + "-" + customizedDate.getDate();
            }
            return date;
          },
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
              this.queryOrderList(shopId);
            }).catch((e) => {
              this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
            })
          },
          queryOrderList: function (shopId) {
            this.searchOrderConditions.pageSize = this.pagination.limitNumber;
            this.searchOrderConditions.condition.ownerId = shopId || '';
            this.currentShopId = shopId || '';
            let params = this.GlobalDefined.getParams(this.searchOrderConditions);
            this.selectedSearchType ? (params.orderType = params.orderType || 0): '';

              this.http.post(this.GlobalDefined.api + '/order/findPage', params, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
              this.orderList = res.data.data.list;
              this.pagination.totalNumber = res.data.data.total;
            }).catch((e) => {
              this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
            })
          },
          queryOrderDetails: function (orderId) {
            this.http.get(this.GlobalDefined.api + '/order/get?id=' + orderId, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
              this.orderDetails = res.data.data;
//              this.pagination.totalNumber = res.data.data.total;
              console.log(this.orderDetails)
            }).catch((e) => {
              this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
            })
          },
          modifyOrderMsg: function () {
            let params = this.GlobalDefined.getParams(this.orderDetails);
            params.orderState = params.orderState || 0;
            params.orderType = params.orderType || 0;
            params.overdueLong = params.overdueLong || 0;
            params.paymentState = params.paymentState || 0;
//            params.preferential = params.preferential || false;
            this.http.post(this.GlobalDefined.api + '/order/update', params, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
              this.queryOrderList(this.searchOrderConditions.condition.ownerId);
              this.GlobalDefined.showCenterTip(res.data.message);
              this.GlobalDefined.closeModal();

            }).catch((e) => {
              this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
            })
          },
          selectShop: function (shop, type) {
            this.orderDetails.ownerName = shop.enterpriseName;
            this.orderDetails.ownerId = shop.enterpriseId;
//            if(type === 'create'){
//              this.createUserData.organName = shop.enterpriseName;
//              this.createUserData.organId = shop.enterpriseId;
//            }else{
//              this.modifyUserData.organName = shop.enterpriseName;
//              this.modifyUserData.organId = shop.enterpriseId;
//            }
          },
          selectType: function (index, type) {
            if(type === 'modify'){
              this.orderDetails.typeName = this.orderTypeList[index];
              this.orderDetails.orderType = index;

            }else if(type === 'search'){
              this.selectedSearchType = this.orderTypeList[index];
            }
          },
          selectState: function (state, index) {
            this.orderDetails.stateName = state;
            this.orderDetails.orderState = index;
          },
          jumpPage: function (page) {
            this.searchOrderConditions.pageNum = page;
            this.queryOrderList(this.currentShopId);
          },
        },
      mounted () {
        this.queryShopList();

//        let startDate = this.getCustomizedDate(-7);
//        let endDate = this.getCustomizedDate(0);

        // 初始化日历插件；
        let dateRange1 = pickerDateRange.execute('date1', {
          isTodayValid : true,
          startDate : '',
          endDate : '',
//          startDate : startDate,
//          endDate : endDate,
          needCompare : false,
          defaultText : ' 至 ',
          autoSubmit : true,
          inputTrigger : 'input_trigger1',
          theme : 'ta',
          success : (obj) => {
            this.searchOrderConditions.condition.startTime = obj.startDate;
            this.searchOrderConditions.condition.endTime = obj.endDate;
          }
        });
      }
    }
</script>
