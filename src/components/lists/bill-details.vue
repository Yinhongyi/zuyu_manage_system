<template>
    <div>
      <div class="right-wrapper">
        <div class="location">当前位置：营业数据 > 已结账单列表 > 已结账单明细表</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">已结账单明细表</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="details-wrap">
                <div class="details-top">
                  <h1 class="details-title">账单基本信息</h1>
                </div>
                <div class="details-cont cunsumer-project">

                  <ul class="dcp-ul">
                    <li><div class="line-dot"></div></li>
                    <li>账单号：<b class="b-blue">{{billData.orderId}}</b></li>
                    <li>
                      <label class="checkbox-label">门店：<span>{{billData.ownerName}}</span></label>
                      <label class="checkbox-label">批次号：<span>{{billData.batchNumber}}</span></label>
                      <!--<label class="checkbox-label">房间号：<span>{{billData.customerName}}</span></label>-->
                      <label class="checkbox-label">营销人员：<span>{{billData.salesmanName}}</span></label>
                    </li>
                    <li>
                      <label class="checkbox-label">消费时间：<span>{{paymentData.paymentTime && paymentData.paymentTime.substring(0,paymentData.paymentTime.length-9).replace('T', '   ')}}</span></label>
                      <!--<label class="checkbox-label">是否授权打折：<span>否</span></label>-->
                    </li>
                  </ul>
                </div>
              </div><!--/details-wrap-->
              <div class="details-wrap">
                <div class="details-top">
                  <h1 class="details-title">消费信息</h1>
                  <a class="button red fr" @click="modifyOrderProp()" v-if="!isModifyOrderData">修改</a>
                  <a class="button green fr" @click="queryPaymentList();isModifyOrderData = false" v-if="isModifyOrderData">取消修改</a>
                  <a class="button red fr" @click="modifyOrderProp()" v-if="isModifyOrderData">确认修改</a>
                </div>
                <div class="details-cont cunsumer-project">
                  <div class="table-wrap">
                    <table v-if="!isModifyOrderData">
                      <tr>
                        <td class="line-one" width="180">消费项目</td>
                        <td class="line-one" width="130">手牌号</td>
                        <td class="line-one" width="120">单价</td>
                        <td class="line-one">实收单价</td>
                        <td class="line-one">消费时间</td>
                      </tr>
                      <tr v-if="paymentData && paymentData.orderProperties" v-for="orderProp in paymentData.orderProperties">
                        <td>{{orderProp.goodsName}}</td>
                        <td>{{orderProp.customerName}}</td>
                        <td>{{orderProp.orderPrice}}</td>
                        <td>{{orderProp.receivableTotal}}</td>
                        <td>{{orderProp.orderDate && orderProp.orderDate.substring(0,orderProp.orderDate.length-9).replace('T', '   ')}}</td>
                      </tr>
                    </table>
                    <table v-if="isModifyOrderData">
                      <tr>
                        <td class="line-one" width="180">消费项目</td>
                        <td class="line-one" width="130">手牌号</td>
                        <td class="line-one" width="120">单价</td>
                        <td class="line-one">实收单价</td>
                        <td class="line-one">消费时间</td>
                      </tr>
                      <tr v-if="paymentData && paymentData.orderProperties" v-for="orderProp in paymentData.orderProperties">
                        <td><input name="" type="text" class="input-text" v-model="orderProp.goodsName"></td>
                        <td><input name="" type="text" class="input-text" v-model="orderProp.customerName"></td>
                        <td><input name="" type="text" class="input-text" v-model="orderProp.orderPrice"></td>
                        <td><input name="" type="text" class="input-text" v-model="orderProp.receivableTotal"></td>
                        <td><input name="" type="text" class="input-text" v-model="orderProp.orderDate"></td>
                      </tr>
                    </table>
                  </div>
                </div><!--/details-cont-->
              </div>
              <div class="details-wrap">
                <div class="details-top">
                  <h1 class="details-title">支付信息</h1>
                  <a class="button red fr" @click="modifyPaymentProp()" v-if="!isModifyPaymentData">修改</a>
                  <a class="button green fr" @click="queryPaymentList();isModifyPaymentData = false" v-if="isModifyPaymentData">取消修改</a>
                  <a class="button red fr" @click="modifyPaymentProp()" v-if="isModifyPaymentData">确认修改</a>

                </div>
                <div class="details-cont cunsumer-project">
                  <div class="table-wrap">
                    <table v-if="!isModifyPaymentData">
                      <tr>
                        <td class="line-one" width="200">支付方式</td>
                        <td class="line-one" width="200">支付金额</td>
                        <td class="line-one" width="150"></td>
                      </tr>
                      <tr v-if="paymentData && paymentData.paymentModes" v-for="payment in paymentData.paymentModes">
                        <td>{{payment.modeName}}</td>
                        <td>{{payment.paymentAmount}}</td>
                        <td>{{payment.code}}</td>
                      </tr>
                    </table>
                    <table v-if="isModifyPaymentData">
                      <tr>
                        <td class="line-one" width="200">支付方式</td>
                        <td class="line-one" width="200">支付金额</td>
                        <td class="line-one" width="150"></td>
                      </tr>
                      <tr v-if="paymentData && paymentData.paymentModes" v-for="payment in paymentData.paymentModes">
                        <td><input name="" type="text" class="input-text" v-model="payment.modeName"></td>
                        <td><input name="" type="text" class="input-text" v-model="payment.paymentAmount"></td>
                        <td><input name="" type="text" class="input-text" v-model="payment.code"></td>
                      </tr>
                    </table>
                  </div>
                </div><!--/details-cont-->
              </div>
              <div class="details-wrap">
                <div class="details-top">
                  <h1 class="details-title">合计信息</h1>
                  <a class="button red fr" @click="modifyAmountProp()" v-if="!isModifyAmountData">修改</a>
                  <a class="button green fr" @click="queryPaymentList();isModifyAmountData = false" v-if="isModifyAmountData">取消修改</a>
                  <a class="button red fr" @click="modifyAmountProp()" v-if="isModifyAmountData">确认修改</a>

                </div>
                <div class="details-cont cunsumer-project">

                  <ul class="dcp-ul" v-if="!isModifyAmountData">
                    <li><div class="line-dot"></div></li>
                    <li>
                      <label class="checkbox-label">应收金额：<b class="b-red">{{paymentData.actualAmount}}</b></label>
                      <label class="checkbox-label">实收金额：<b class="b-red">{{paymentData.receivableAmount}}</b></label>
                      <label class="checkbox-label">折扣金额：<b class="b-red">{{paymentData.discountAmount}}</b></label>
                    </li>
                    <li>
                      <label class="checkbox-label">账户名称：<span>{{paymentData.accountName}}</span></label>
                      <label class="checkbox-label">支付方式：<span>{{paymentData.typeName}}</span></label>
                    </li>
                    <li>
                      <label class="checkbox-label">收银员：<span>{{paymentData.cashierName}}</span></label>
                    </li>
                  </ul>
                  <ul class="dcp-ul" v-if="isModifyAmountData">
                    <li><div class="line-dot"></div></li>
                    <li>
                      <label class="checkbox-label">应收金额：<b class="b-red"><input name="" type="text" class="input-text" v-model="paymentData.actualAmount"></b></label>
                      <label class="checkbox-label">实收金额：<b class="b-red"><input name="" type="text" class="input-text" v-model="paymentData.receivableAmount"></b></label>
                      <label class="checkbox-label">折扣金额：<b class="b-red"><input name="" type="text" class="input-text" v-model="paymentData.discountAmount"></b></label>
                    </li>
                    <li>
                      <label class="checkbox-label">账户名称：<span><input name="" type="text" class="input-text" v-model="paymentData.accountName"></span></label>
                      <label class="checkbox-label">支付方式：<span><input name="" type="text" class="input-text" v-model="paymentData.typeName"></span></label>
                    </li>
                    <li>
                      <label class="checkbox-label">收银员：<span><input name="" type="text" class="input-text" v-model="paymentData.cashierName"></span></label>
                    </li>
                  </ul>
                </div>
              </div><!--/details-wrap-->
            </div>
          </div><!--/right-panel-->

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'BillDetails',
        data () {
            return {
              billId: '',
              billData: {},
              paymentData: {},
              isModifyOrderData: false,
              isModifyPaymentData: false,
              isModifyAmountData: false,
            }
        },
        methods: {
          queryBillDetails: function () {
            this.http.get(this.GlobalDefined.api + '/order/get?id=' + this.billId, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
              this.billData = res.data.data;
              this.queryPaymentList();
            }).catch((e) => {
              this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
            })
          },
          queryPaymentList: function () {
            let params = {
              "ownerId": this.billData.orderId,
              "paymentNumber": this.billData.paymentNumber,
            };

            this.http.post(this.GlobalDefined.api + '/payment/findList', params, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
              this.paymentData = res.data.data[0];
            }).catch((e) => {
              this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
            })
          },
          modifyOrderProp: function () {
            if(this.isModifyOrderData){
              this.queryModifyPaymentPort();
            }
            this.isModifyOrderData = !this.isModifyOrderData;
          },
          modifyPaymentProp: function () {
            if(this.isModifyPaymentData){
              this.queryModifyPaymentPort();
            }
            this.isModifyPaymentData = !this.isModifyPaymentData;
          },
          modifyAmountProp: function () {
            if(this.isModifyAmountData){
              this.queryModifyPaymentPort();
            }
            this.isModifyAmountData = !this.isModifyAmountData;
          },
          queryModifyPaymentPort: function () {
            let params = this.paymentData;
            this.http.post(this.GlobalDefined.api + '/payment/update', params, {
              headers: {
                'Content-Type': 'application/json'
              }
            }).then((res) => {
              this.GlobalDefined.showCenterTip(res.data.message);
            }).catch((e) => {
              this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
            });

            this.queryPaymentList();
          }
        },
      mounted () {
        this.billId = this.$route.query && this.$route.query.id;
        if(this.billId){
          this.queryBillDetails();
        }else{
          this.$router.push('/billed-list');
        }

      }
    }
</script>
