<template>
    <div>
      <div class="right-wrapper">
        <div class="location">当前位置：考勤管理 > 排班信息列表</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">排班信息列表</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer">
                <input class="button blue fr" type="button" value="排班" />
                <input class="button blue fr" type="button" value="复制" />
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
                      <td>
                        <div class="calendar-wrap">
                          <div id="ca"></div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
                <div class="left-tab-panel">
                  <table>
                    <tr>
                      <td>
                        <div class="calendar-wrap">
                          <div id="ca2"></div>
                        </div>
                      </td>
                    </tr>
                  </table>
                </div>
              </div>

            </div>

          </div><!--/right-panel -->
        </div><!--/right-content-->
      </div>
    </div>
</template>

<script>
    export default {
        name: 'Scheduling',
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
            console.log('scheduling page')
        }
    }
</script>
