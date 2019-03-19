<template>
    <div>
      <div class="right-wrapper width-new-lg-right">
        <div class="location">当前位置：营业数据 > 会员充值列表</div>
        <div class="right-content width-lg-right">
          <div class="right-title">
            <a class="active">会员充值列表</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer accounts-layer pleft">
                <span>会员手机号：</span><input name="" type="text" class="input-text" value="" placeholder="">
                <span>卡号：</span><input name="" type="text" class="input-text" value="" placeholder="">
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="" placeholder="会员卡类型">
                  <ul class="selectUl">
                    <li>金卡</li>
                    <li>黑卡</li>
                  </ul>
                </div>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="" placeholder="支付方式">
                  <ul class="selectUl">
                    <li>现金</li>
                    <li>刷卡</li>
                  </ul>
                </div>
                <span>充值时间：</span>
                <div class="slcWrap">
                  <div class="ta_date" id="div_date1">
                    <span class="date_title" id="date1"></span>
                    <a class="opt_sel" id="input_trigger1" href="#">
                      <i class="i_orderd"></i>
                    </a>
                  </div>
                </div>
                <span>营销工号：</span><input name="" type="text" class="input-text" value="" placeholder="">
                <label class="checkbox-label"><input name="" type="checkbox" value="">打折账单</label>
                <input class="button blue" type="button" value="查询" />
              </div>
              <div class="table-wrap accounts-tab">
                <div class="left-tab">
                  <p>我的门店</p>
                  <ul class="left-tab-ul">
                    <li>门店1</li>
                    <li>门店2</li>
                  </ul>
                </div>
                <div class="left-tab-panel">
                  <table>
                    <tr>
                      <td class="line-one">卡号</td>
                      <td class="line-one">卡类型</td>
                      <td class="line-one">门店</td>
                      <td class="line-one">会员手机号</td>
                      <td class="line-one">会员名称</td>
                      <td class="line-one">充值时间</td>
                      <td class="line-one">营销员</td>
                      <td class="line-one">应收金额</td>
                      <td class="line-one">实收金额</td>
                      <td class="line-one">支付方式</td>
                      <td class="line-one">是否打折</td>
                      <td class="line-one">授权人</td>
                      <td class="line-one">收银员</td>
                      <td class="line-one">操作</td>
                    </tr>
                    <tr>
                      <td>201709110000</td>
                      <td>钻石卡</td>
                      <td>简阳店</td>
                      <td>13981899999</td>
                      <td>张哥</td>
                      <td>2017/9/11 16:44:55</td>
                      <td>张三</td>
                      <td>1000</td>
                      <td>1000</td>
                      <td>现金</td>
                      <td>否</td>
                      <td>王五</td>
                      <td>小兵</td>
                      <td><a href="javascript:;"  class="button green" onClick="ChangeChongzhi()">修改</a></td>
                    </tr>
                    <tr>
                      <td>201709110000</td>
                      <td>钻石卡</td>
                      <td>简阳店</td>
                      <td>13981899999</td>
                      <td>张哥</td>
                      <td>2017/9/11 16:44:55</td>
                      <td>张三</td>
                      <td>1000</td>
                      <td>1000</td>
                      <td>现金</td>
                      <td>否</td>
                      <td>王五</td>
                      <td>小兵</td>
                      <td><a href="javascript:;"  class="button green" onClick="ChangeChongzhi()">修改</a></td>
                    </tr>
                    <tr>
                      <td>201709110000</td>
                      <td>钻石卡</td>
                      <td>简阳店</td>
                      <td>13981899999</td>
                      <td>张哥</td>
                      <td>2017/9/11 16:44:55</td>
                      <td>张三</td>
                      <td>1000</td>
                      <td>1000</td>
                      <td>现金</td>
                      <td>否</td>
                      <td>王五</td>
                      <td>小兵</td>
                      <td><a href="javascript:;"  class="button green" onClick="ChangeChongzhi()">修改</a></td>
                    </tr>
                  </table>
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
                </div>
                <div class="left-tab-panel">
                  <p style="padding:40px 100px">暂无数据</p>
                </div>
              </div>
            </div>
          </div>
          <!--/right-panel -->
        </div>


        <!--弹出层-->
        <div id="showOverLay" class="md-overlay" ></div>
        <div class="md-modal ChangeChongzhi" >
          <div class="md-title ">修改充值信息<a class="md-close"></a></div>
          <div class="md-content">
            <div class="md-modal-inner">
              <div class="selectDiv">
                <span class="sel-span">会员卡号：</span><input name="" type="text" class="input-text" value="0123123" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span">会员卡类型：</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="白金卡">
                  <ul class="selectUl">
                    <li>白金卡</li>
                    <li>钻石卡</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv">
                <span class="sel-span">办卡时间：</span>
                <div class="slcWrap">
                  <input type="text" class="input-text cld" id="dt2" value="2013-10-09">
                  <div id="dd2"></div>
                </div>
              </div>
              <div class="selectDiv">
                <span class="sel-span">支付方式：</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="现金">
                  <ul class="selectUl">
                    <li>现金</li>
                    <li>Pos刷卡</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv">
                <span class="sel-span">收银员：</span><input name="" type="text" class="input-text" value="小李" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span">营业员：</span><input name="" type="text" class="input-text" value="张三" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span">卡余额：</span> <input type="text" name="" value="1000" class="input-text" />
              </div>
              <div class="selectDiv align-center">
                <input name="" type="button" class="btn_blue" value="确定"><input name="" type="button" class="btn_blue" value="取消">
              </div>
            </div><!--/md-modal-inner-->
          </div><!--/modal-content-->
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'RechargeList',
        data () {
            return {
            }
        },
        methods: {
            init: function () {
            },
            queryPort: function () {
                let params  = {
                    "enterpriseCanton": "dddd",
                    "enterpriseId": 3,
                    "enterpriseName": "cscasc",
                    "enterpriseState": 0,
                    "enterpriseType": 2
                };
                this.http.post(this.GlobalDefined.api + '/shop/findList', params, {
                    headers: {
                        'Content-Type': 'application/json'
                    }
                }).then((res) => {
//                    console.log(res)
                }).catch((e) => {
                  this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
                })
            }
        },
        mounted () {
            this.init();
//            this.queryPort();
            console.log('recharge-list page')
        }
    }
</script>
