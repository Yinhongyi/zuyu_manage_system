<template>
    <div>
      <div class="right-wrapper">
        <div class="location">当前位置：营业数据 > 营业统计</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">营业统计</a>
          </div>
          <div class="right-panel">
            <div class="statistics-tab"><a class="active">今日</a><a>历史</a></div>
            <div class="statistics-wrap">
              <div class="statistics-top-wrap">
                <div class="statistics-top">
                  <p><b>营业收入：</b></p>
                  <p>总数量：<span>300</span>笔</p>
                  <p>总营业收入：<span>20009</span></p>
                  <p>服务项收入：<span>20900</span></p>
                  <p>商品项收入：<span>20009</span></p>
                </div>
                <div class="statistics-top">
                  <p><b>现金收入：</b></p>
                  <p>总数量：<span>300</span>笔</p>
                  <p>总现金收入：<span>20009</span></p>
                  <p>办卡收入：<span>20900</span></p>
                  <p>现金收入：<span>20009</span></p>
                </div>
                <div class="statistics-top">
                  <p><b>收入统计：</b></p>
                  <p>应收总额：<span>20009</span></p>
                  <p>实收总额：<span>20900</span></p>
                  <p>折扣总额：<span>20009</span></p>
                  <p><span>　</span></p>
                </div>
              </div>
              <div class="statistics-cont">
                <div class="statistics-title">服务项目统计</div>
                <div class="statistics-inner">
                  <div class="pie-wrap">
                    <div class="pie-ring" id="touziall_data1"></div>
                    <div class="all-data"><b>总收入</b><p>10000</p></div>
                  </div>
                  <ul class="pie-data">
                    <li class="pie-data-one"><b>服务项目</b><b>金额</b></li>
                    <li><span>足浴</span><span>200</span></li>
                    <li><span>指压</span><span>200</span></li>
                    <li><span>SPA</span><span>200</span></li>
                    <li><span>养生</span><span>200</span></li>
                    <li><span>理疗</span><span>200</span></li>
                  </ul>
                  <div class="legend">
                    <p><em class="data-dot-1"></em><span>足浴</span></p>
                    <p><em class="data-dot-2"></em><span>指压</span></p>
                    <p><em class="data-dot-3"></em><span>SPA</span></p>
                    <p><em class="data-dot-4"></em><span>养生</span></p>
                    <p><em class="data-dot-5"></em><span>理疗</span></p>
                  </div>
                </div>
              </div>
              <div class="statistics-cont">
                <div class="statistics-title">商品项目统计</div>
                <div class="statistics-inner">
                  <div class="pie-wrap">
                    <div class="pie-ring" id="touziall_data2"></div>
                    <div class="all-data"><b>总收入</b><p>10000</p></div>
                  </div>
                  <ul class="pie-data">
                    <li class="pie-data-one"><b>消费项目</b><b>金额</b></li>
                    <li><span>玉溪</span><span>200</span></li>
                    <li><span>中华</span><span>200</span></li>
                    <li><span>铁观音</span><span>200</span></li>
                    <li><span>咖啡</span><span>200</span></li>
                    <li><span>小吃</span><span>200</span></li>
                  </ul>
                  <div class="legend">
                    <p><em class="data-dot-1"></em><span>玉溪</span></p>
                    <p><em class="data-dot-2"></em><span>中华</span></p>
                    <p><em class="data-dot-3"></em><span>铁观音</span></p>
                    <p><em class="data-dot-4"></em><span>咖啡</span></p>
                    <p><em class="data-dot-5"></em><span>小吃</span></p>
                  </div>
                </div>
              </div>
              <div class="statistics-cont">
                <div class="statistics-title">商品项目统计</div>
                <div class="statistics-inner">
                  <div class="pie-wrap">
                    <div class="pie-ring" id="touziall_data3"></div>
                    <div class="all-data"><b>总收入</b><p>10000</p></div>
                  </div>
                  <ul class="pie-data">
                    <li class="pie-data-one"><b>消费项目</b><b>金额</b></li>
                    <li><span>钻石卡</span><span>200</span></li>
                    <li><span>铂金卡</span><span>200</span></li>
                    <li><span>金卡</span><span>200</span></li>
                    <li><span>贵宾卡</span><span>200</span></li>
                  </ul>
                  <div class="legend">
                    <p><em class="data-dot-1"></em><span>钻石卡</span></p>
                    <p><em class="data-dot-2"></em><span>铂金卡</span></p>
                    <p><em class="data-dot-3"></em><span>金卡</span></p>
                    <p><em class="data-dot-4"></em><span>贵宾卡</span></p>
                  </div>
                </div>
              </div>
              <div class="statistics-cont">
                <div class="statistics-title">商品项目统计</div>
                <div class="statistics-inner">
                  <div class="pie-wrap">
                    <div class="pie-ring" id="touziall_data4"></div>
                    <div class="all-data"><b>总收入</b><p>10000</p></div>
                  </div>
                  <ul class="pie-data">
                    <li class="pie-data-one"><b>消费项目</b><b>金额</b></li>
                    <li><span>钻石卡</span><span>200</span></li>
                    <li><span>铂金卡</span><span>200</span></li>
                    <li><span>金卡</span><span>200</span></li>
                    <li><span>贵宾卡</span><span>200</span></li>
                  </ul>
                  <div class="legend">
                    <p><em class="data-dot-1"></em><span>钻石卡</span></p>
                    <p><em class="data-dot-2"></em><span>铂金卡</span></p>
                    <p><em class="data-dot-3"></em><span>金卡</span></p>
                    <p><em class="data-dot-4"></em><span>贵宾卡</span></p>
                  </div>
                </div>
              </div>
            </div><!--/statistics-wrap-->
            <div class="statistics-wrap">
              <div class="statistics-cont">
                <div class="statistics-title">服务项目统计</div>
                <div class="statistics-inner"></div>
              </div>
              <div class="statistics-cont">
                <div class="statistics-title">商品项目统计</div>
                <div class="statistics-inner"></div>
              </div>
              <div class="statistics-cont">
                <div class="statistics-title">开卡统计</div>
                <div class="statistics-inner"></div>
              </div>
              <div class="statistics-cont">
                <div class="statistics-title">充值统计</div>
                <div class="statistics-inner"></div>
              </div>
            </div><!--/statistics-wrap-->
          </div><!--/right-panel -->
        </div><!--/right-content-->
      </div>
    </div>
</template>

<script>
    export default {
        name: 'BusinessStatistics',
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
            console.log('business-statistics page')
        }
    }
</script>
