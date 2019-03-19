<template>
    <div>
      <div class="right-wrapper  width-new-lg-right">
        <div class="location">当前位置： > 钟量明细列表</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">钟量明细列表</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer accounts-layer pleft">
                <span>技师号：</span><input name="" type="text" class="input-text" value="" placeholder="">
                <span>消费项目：</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw150" readOnly="true"  value="" placeholder="请选择消费项目">
                  <ul class="selectUl">
                    <li>吃饭</li>
                    <li>文具</li>
                  </ul>
                </div>
                <span>消费时间：</span>
                <div class="slcWrap">
                  <div class="ta_date" id="div_date1">
                    <span class="date_title" id="date1"></span>
                    <a class="opt_sel" id="input_trigger1" href="#">
                      <i class="i_orderd"></i>
                    </a>
                  </div>
                </div>
                <span>批次号：</span>
                <input name="" type="text" class="input-text" value="" placeholder="">
                <span>手牌号：</span><input name="" type="text" class="input-text" value="" placeholder="">
                <span>排钟类型：</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw150" readOnly="true"  value="" placeholder="请选择排钟类型">
                  <ul class="selectUl">
                    <li>排钟类型</li>
                    <li>排钟类型2</li>
                  </ul>
                </div>
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
                      <td class="line-one">订单号</td>
                      <td class="line-one">消费类型</td>
                      <td class="line-one">门店</td>
                      <td class="line-one">批次号</td>
                      <td class="line-one">手牌号</td>
                      <td class="line-one">消费时间</td>
                      <td class="line-one">排钟类型</td>
                      <td class="line-one">技师工号</td>
                      <td class="line-one">营销</td>
                      <td class="line-one">上钟时间</td>
                      <td class="line-one">上钟超时</td>
                      <td class="line-one">下钟时间</td>
                      <td class="line-one">授权人</td>
                    </tr>
                    <tr>
                      <td>201709110000</td>
                      <td>足浴</td>
                      <td>西区店</td>
                      <td>21</td>
                      <td>801</td>
                      <td>2017/9/12</td>
                      <td>轮排</td>
                      <td>89</td>
                      <td>李四</td>
                      <td>2017/9/12  14:02:55</td>
                      <td>0</td>
                      <td>2017/9/12  14:02:55</td>
                      <td>王五</td>
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
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer accounts-layer">
                <span>技师号：</span><input name="" type="text" class="input-text" value="" placeholder="">
                <span>消费项目：</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw150" readOnly="true"  value="" placeholder="请选择消费项目">
                  <ul class="selectUl">
                    <li>吃饭</li>
                    <li>文具</li>
                  </ul>
                </div>
                <span>消费时间</span>
                <input type="text" name="" value="" class="input-text laydate-icon tbox" onClick="laydate()" placeholder="消费时间" /><span>至</span>
                <input type="text" name="" value="" class="input-text laydate-icon tbox" onClick="laydate()" placeholder="退房时间" /><span>批次号</span>
                <input name="" type="text" class="input-text" value="" placeholder="">
                <span>手牌号</span><input name="" type="text" class="input-text" value="" placeholder="">
                <span>排钟类型</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw150" readOnly="true"  value="" placeholder="请选择排钟类型">
                  <ul class="selectUl">
                    <li>排钟类型</li>
                    <li>排钟类型2</li>
                  </ul>
                </div>
                <input class="button blue" type="button" value="查询" />
              </div>
              <div class="table-wrap accounts-tab">
                <table>
                  <tr>
                    <td class="line-one">订单号</td>
                    <td class="line-one">消费类型</td>
                    <td class="line-one">门店</td>
                    <td class="line-one">批次号</td>
                    <td class="line-one">手牌号</td>
                    <td class="line-one">消费时间</td>
                    <td class="line-one">排钟类型</td>
                    <td class="line-one">技师工号</td>
                    <td class="line-one">营销</td>
                    <td class="line-one">上钟时间</td>
                    <td class="line-one">上钟超时</td>
                    <td class="line-one">下钟时间</td>
                    <td class="line-one">授权人</td>
                  </tr>
                  <tr>
                    <td>201709110000</td>
                    <td>足浴</td>
                    <td>简阳店</td>
                    <td>21</td>
                    <td>801</td>
                    <td>2017/9/12</td>
                    <td>轮排</td>
                    <td>89</td>
                    <td>李四</td>
                    <td>2017/9/12  14:02:55</td>
                    <td>0</td>
                    <td>2017/9/12  14:02:55</td>
                    <td>王五</td>
                  </tr>
                  <tr>
                    <td>201709110000</td>
                    <td>足浴</td>
                    <td>简阳店</td>
                    <td>21</td>
                    <td>801</td>
                    <td>2017/9/12</td>
                    <td>轮排</td>
                    <td>89</td>
                    <td>李四</td>
                    <td>2017/9/12  14:02:55</td>
                    <td>0</td>
                    <td>2017/9/12  14:02:55</td>
                    <td>王五</td>
                  </tr>
                  <tr>
                    <td>201709110000</td>
                    <td>足浴</td>
                    <td>简阳店</td>
                    <td>21</td>
                    <td>801</td>
                    <td>2017/9/12</td>
                    <td>轮排</td>
                    <td>89</td>
                    <td>李四</td>
                    <td>2017/9/12  14:02:55</td>
                    <td>0</td>
                    <td>2017/9/12  14:02:55</td>
                    <td>王五</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="footPages">
              <a href="" >上页</a>
              <span>1</span>
              <span class="on">2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>...</span>
              <span>10</span>
              <a href="">下页</a>
            </div>
          </div>
          <!--/right-panel -->
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer accounts-layer">
                <span>技师号：</span><input name="" type="text" class="input-text" value="" placeholder="">
                <span>消费项目：</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw150" readOnly="true"  value="" placeholder="请选择消费项目">
                  <ul class="selectUl">
                    <li>吃饭</li>
                    <li>文具</li>
                  </ul>
                </div>
                <span>消费时间</span>
                <input type="text" name="" value="" class="input-text laydate-icon tbox" onClick="laydate()" placeholder="消费时间" /><span>至</span>
                <input type="text" name="" value="" class="input-text laydate-icon tbox" onClick="laydate()" placeholder="退房时间" /><span>批次号</span>
                <input name="" type="text" class="input-text" value="" placeholder="">
                <span>手牌号</span><input name="" type="text" class="input-text" value="" placeholder="">
                <span>排钟类型</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw150" readOnly="true"  value="" placeholder="请选择排钟类型">
                  <ul class="selectUl">
                    <li>排钟类型</li>
                    <li>排钟类型2</li>
                  </ul>
                </div>
                <input class="button blue" type="button" value="查询" />
              </div>
              <div class="table-wrap accounts-tab">
                <table>
                  <tr>
                    <td class="line-one">订单号</td>
                    <td class="line-one">消费类型</td>
                    <td class="line-one">门店</td>
                    <td class="line-one">批次号</td>
                    <td class="line-one">手牌号</td>
                    <td class="line-one">消费时间</td>
                    <td class="line-one">排钟类型</td>
                    <td class="line-one">技师工号</td>
                    <td class="line-one">营销</td>
                    <td class="line-one">上钟时间</td>
                    <td class="line-one">上钟超时</td>
                    <td class="line-one">下钟时间</td>
                    <td class="line-one">授权人</td>
                  </tr>
                  <tr>
                    <td>201709110000</td>
                    <td>足浴</td>
                    <td>东区店</td>
                    <td>21</td>
                    <td>801</td>
                    <td>2017/9/12</td>
                    <td>轮排</td>
                    <td>89</td>
                    <td>李四</td>
                    <td>2017/9/12  14:02:55</td>
                    <td>0</td>
                    <td>2017/9/12  14:02:55</td>
                    <td>王五</td>
                  </tr>
                  <tr>
                    <td>201709110000</td>
                    <td>足浴</td>
                    <td>东区店</td>
                    <td>21</td>
                    <td>801</td>
                    <td>2017/9/12</td>
                    <td>轮排</td>
                    <td>89</td>
                    <td>李四</td>
                    <td>2017/9/12  14:02:55</td>
                    <td>0</td>
                    <td>2017/9/12  14:02:55</td>
                    <td>王五</td>
                  </tr>
                </table>
              </div>
            </div>
            <div class="footPages">
              <a href="" >上页</a>
              <span>1</span>
              <span class="on">2</span>
              <span>3</span>
              <span>4</span>
              <span>5</span>
              <span>...</span>
              <span>10</span>
              <a href="">下页</a>
            </div>
          </div>
          <!--/right-panel -->
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'ClockDetailsList',
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
            console.log('clock-details-list page')
        }
    }
</script>
