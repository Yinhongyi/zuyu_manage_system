<template>
    <div>
      <div class="right-wrapper width-new-lg-right">
        <div class="location">当前位置：会员卡管理 > 会员卡列表 > 会员办卡信息</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active"> 会员办卡信息</a>
          </div>
          <div class="right-panel ">
            <div class="main-cont ">
              <div class="select-layer accounts-layer pleft">
                <span>会员手机号：</span><input name="" type="text" class="input-text" value="" placeholder="">
                <span>卡号：</span><input name="" type="text" class="input-text" value="" placeholder="">
                <span>会员卡类型：</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw150" readOnly="true"  value="" placeholder="选择会员卡类型">
                  <ul class="selectUl">
                    <li>黑卡</li>
                    <li>金卡</li>
                  </ul>
                </div>
                <span>支付方式：</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw150" readOnly="true"  value="" placeholder="选择支付方式">
                  <ul class="selectUl">
                    <li>现金</li>
                    <li>微信</li>
                  </ul>
                </div>
                <span>办卡时间：</span>
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
              <div class="table-wrap">
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
                      <td class="line-one">办卡时间</td>
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
                      <td><a href="javascript:;" class="button green" onClick="ChangeModal()">修改</a></td>
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
                      <td><a href="javascript:;" class="button green" onClick="ChangeModal()">修改</a></td>
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
                      <td><a href="javascript:;" class="button green" onClick="ChangeModal()">修改</a></td>
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
          </div><!--/right-panel -->
        </div><!--/right-content-->

        <!--弹出层-->
        <div id="showOverLay" class="md-overlay" ></div>
        <div class="md-modal ChangeModal" >
          <div class="md-title ">添加会员卡信息<a class="md-close"></a></div>
          <div class="md-content">
            <div class="md-modal-inner card-modal-inner">
              <h1 class="modal-inner-title">基本信息</h1>
              <div class="selectDiv">
                <span class="sel-span">当前门店</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="西区店" placeholder="请选择门店">
                  <ul class="selectUl">
                    <li>东区店</li>
                    <li>西区店</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv">
                <span class="sel-span">*会员卡名称</span><input name="" type="text" class="input-text" value="白金卡" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span">*卡面金额（开卡金额）</span><input name="" type="text" class="input-text" value="3000" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span">*最低充值金额</span><input name="" type="text" class="input-text" value="1000" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span">有效时间</span><input name="" type="text" class="input-text" value="" placeholder=""><span style="color:inherit; margin-right:40px">天</span><label class="checkbox-label"><input name="time" type="radio" checked  />不限有限时间</label>
              </div>

            </div><!--/md-modal-inner-->
            <div class="md-modal-inner riado-modal-inner ">
              <h1 class="modal-inner-title">设置信息</h1>
              <div class="selectDiv">
                <label class="checkbox-label"><input name="" type="checkbox" value="" checked>是否允许充值</label>
                <label class="checkbox-label"><input name="" type="checkbox" value="" checked>是否允许合卡</label>
                <label class="checkbox-label"><input name="" type="checkbox" value="" checked>是否允许提成</label>
                <label class="checkbox-label"><input name="" type="checkbox" value="" checked>是否允许积分</label>
              </div>
              <div class="selectDiv">
                <span class="sel-span">积分方式：</span>
                <label class="checkbox-label"><input name="theway" type="radio"  checked />消费金额</label>
                <label class="checkbox-label"><input name="theway" type="radio"  />消费次数</label>
                <label class="checkbox-label"><input name="theway" type="radio"  />充值金额</label>
              </div>
              <div class="selectDiv">
                <span class="sel-span">计分方式：</span>
                <label class="checkbox-label"><input name="way" type="radio"  checked />每次</label>
                <label class="checkbox-label"><input name="way" type="radio"  />累计</label>
              </div>
              <div class="selectDiv">
                <span class="sel-span">计算方式：</span>
                <input name="" type="text" class="input-text" value="1" placeholder=""><span class="sel-span">元</span>
                <span class="sel-span">积</span><input name="" type="text" class="input-text" value="1" placeholder="">
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
        name: 'MembersCard',
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
            console.log('members-card page')
        }
    }
</script>
