<template>
    <div>
      <div class="right-wrapper">
        <div class="location">当前位置：营业数据 > 钟量统计</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">钟量统计</a>
          </div>
          <div class="right-panel">
            <div class="statistics-tab"><a class="active">今日</a><a>历史</a></div>
            <div class="statistics-wrap">
              <div class="statistics-top-wrap">
                <div class="statistics-top">
                  <p>日期：<span>2019/10/09</span></p>
                  <p>总钟量：<span>209</span>分钟</p>
                </div>
              </div>
              <div class="statistics-cont">
                <div class="statistics-title">消费项目钟量统计</div>
                <div class="statistics-inner">
                  <div class="pie-wrap">
                    <div class="pie-ring" id="touziall_data1"></div>
                    <div class="all-data"><b>总钟量</b><p>10000</p></div>
                  </div>
                  <ul class="pie-data">
                    <li class="pie-data-one"><b>消费项目</b><b>钟量</b></li>
                    <li><span>指压</span><span>200</span></li>
                    <li><span>指压</span><span>200</span></li>
                    <li><span>指压</span><span>200</span></li>
                    <li><span>指压</span><span>200</span></li>
                    <li><span>指压</span><span>200</span></li>
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
                <div class="statistics-title">排钟类型钟量统计</div>
                <div class="statistics-inner">
                  <div class="pie-wrap">
                    <div class="pie-ring" id="touziall_data2"></div>
                    <div class="all-data"><b>总钟量</b><p>10000</p></div>
                  </div>
                  <ul class="pie-data">
                    <li class="pie-data-one"><b>消费项目</b><b>钟量</b></li>
                    <li><span>指压</span><span>200</span></li>
                    <li><span>指压</span><span>200</span></li>
                    <li><span>指压</span><span>200</span></li>
                    <li><span>指压</span><span>200</span></li>
                    <li><span>指压</span><span>200</span></li>
                  </ul>
                  <div class="legend">
                    <p><em class="data-dot-1"></em><span>轮排</span></p>
                    <p><em class="data-dot-2"></em><span>优排</span></p>
                    <p><em class="data-dot-3"></em><span>点钟</span></p>
                    <p><em class="data-dot-4"></em><span>加钟</span></p>
                    <p><em class="data-dot-5"></em><span>加班</span></p>
                  </div>

                </div>
              </div>
            </div><!--/statistics-wrap-->
            <div class="statistics-wrap">
              <div class="statistics-cont">
                <div class="statistics-title">消费项目钟量统计</div>
                <div class="statistics-inner"></div>
              </div>
              <div class="statistics-cont">
                <div class="statistics-title">消费项目钟量统计</div>
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
        name: 'ClockStatistics',
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
            console.log('clock-statistics page')
        }
    }
</script>
