<template>
  <div>
    <div class="right-wrapper  width-new-lg-right">
      <div class="location">当前位置：营业数据 > 未结消费列表</div>
      <div class="right-content">
        <div class="right-title">
          <a class="active">未结消费列表</a>
        </div>
        <div class="right-panel">
          <div class="main-cont">
            <div class="select-layer accounts-layer pleft">
              <span>账单号：</span><input name="" type="text" class="input-text" v-model="searchOrderConditions.condition.orderId">
              <span>批次号：</span><input name="" type="text" class="input-text" v-model="searchOrderConditions.condition.batchNumber">
              <span>手牌号：</span><input name="" type="text" class="input-text" v-model="searchOrderConditions.condition.customerName">
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
              <span>消费时间：</span>
              <div class="slcWrap">
                <div class="ta_date" id="div_date1">
                  <span class="date_title" id="date1"></span>
                  <a class="opt_sel" id="input_trigger1" href="#">
                    <i class="i_orderd"></i>
                  </a>
                </div>
              </div>

              <input class="button blue" type="button" value="查询" />
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

              <div class="left-tab-panel" v-if="orderList.length === 0">
                <p style="padding:40px 100px">暂无数据</p>
              </div>
            </div>
          </div>
        </div>
        <!--/right-panel -->

      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'NospendingList',
    data () {
      return {
        searchOrderConditions: {
          "condition": {
            "batchNumber": '',
            "endTime": '',
            "orderId": '',
            "orderState": 0, //订单状态：0-未结算， 1-已结算， 2-挂账
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
        shopList: [],
        orderList: [],
        currentShopId: '',

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
          let shopId = this.shopList[0].enterpriseId;
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

        this.http.post(this.GlobalDefined.api + '/order/findPage', params, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.orderList = res.data.data.list;
          this.pagination.totalNumber = res.data.data.total;
          console.log(res)
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })
      },
      jumpPage: function (page) {
        this.searchOrderConditions.pageNum = page;
        this.queryOrderList(this.currentShopId);
      },
    },
    mounted () {
      this.queryShopList();
//      this.queryOrderList();

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
