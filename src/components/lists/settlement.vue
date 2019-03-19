<template>
    <div>
      <div class="right-wrapper">
        <div class="location">当前位置：营业数据  > 结算</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">结算</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="details-wrap">
                <div class="select-layer">
                  <span>批次号：</span><input name="" type="text" class="input-text sw100" value="" placeholder="">
                  <span>手牌号：</span><input name="" type="text" class="input-text sw100" value="" placeholder="">
                  <span>房间号：</span><input name="" type="text" class="input-text sw100" value="" placeholder="">
                  <input class="button blue" type="button" value="去手牌" />
                  <input class="button blue" type="button" value="去项目" />
                  <input class="button blue" type="button" value="去批次" />
                </div>
                <div class="details-top">
                  <h1 class="details-title">消费信息</h1>
                </div>
                <div class="details-cont cunsumer-project">
                  <div class="table-wrap">
                    <table>
                      <tr>
                        <td class="line-one">消费项目</td>
                        <td class="line-one">技师工号</td>
                        <td class="line-one">单价</td>
                        <td class="line-one">上钟时间</td>
                        <td class="line-one">上钟迟到时间</td>
                        <td class="line-one">批次号</td>
                        <td class="line-one">手牌号</td>
                      </tr>
                      <tr>
                        <td>拔罐</td>
                        <td>89</td>
                        <td>200</td>
                        <td>2017/9/12 19：00:00</td>
                        <td>300</td>
                        <td>21</td>
                        <td>21</td>
                      </tr>
                      <tr>
                        <td>拔罐</td>
                        <td>89</td>
                        <td>200</td>
                        <td>2017/9/12 19：00:00</td>
                        <td>300</td>
                        <td>21</td>
                        <td>21</td>
                      </tr>
                    </table>
                  </div>
                </div>
                <div class="selectDiv">

                  <label class="checkbox-label"><input name="theway" type="radio"  />贵宾消费</label>
                  <label class="checkbox-label"><input name="theway" type="radio"  />会员消费</label>
                  <input name="" type="button" class="btn_blue fr" value="结算"><input name="" type="button" class="btn_blue fr" value="打折">
                </div>
              </div><!--/details-wrap-->
              <div class="details-wrap">
                <div class="details-top">
                  <h1 class="details-title">合计信息</h1>
                </div>
                <div class="details-cont cunsumer-project">

                  <ul class="dcp-ul">
                    <li><div class="line-dot"></div></li>
                    <li>
                      <label class="checkbox-label">应收金额：<b class="b-red">600</b></label>
                      <label class="checkbox-label">实收金额：<b class="b-red">600</b></label>
                      <label class="checkbox-label">折扣金额：<b class="b-red">600</b></label>
                    </li>
                    <li>
                      <label class="checkbox-label">收银员：<span>李四</span></label>
                      <label class="checkbox-label">授权人：<span>王五</span></label>
                    </li>
                    <li>
                      <label class="checkbox-label">结账时间：<span>2017/9/12 17:16:52</span></label>
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
        name: 'Settlement',
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
            console.log('settlement page')
        }
    }
</script>
