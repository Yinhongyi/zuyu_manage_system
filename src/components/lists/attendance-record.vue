<template>
    <div>
      <div class="right-wrapper width-md-right">
        <div class="location">当前位置：> 考勤记录</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">考勤记录</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer accounts-layer pleft">
                <span>工号：</span><input name="" type="text" class="input-text sw50" value="" placeholder="">
                <span>姓名：</span><input name="" type="text" class="input-text" value="" placeholder="">
                <span>考勤日期：</span>
                <div class="slcWrap">
                  <div class="ta_date" id="div_date1">
                    <span class="date_title" id="date1"></span>
                    <a class="opt_sel" id="input_trigger1" href="#">
                      <i class="i_orderd"></i>
                    </a>
                  </div>
                </div>
                <span>状态：</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="" placeholder="选择状态">
                  <ul class="selectUl">
                    <li>迟到</li>
                    <li>早退</li>
                  </ul>
                </div>
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
                      <td class="line-one" width="120">工号</td>
                      <td class="line-one" width="150">门店</td>
                      <td class="line-one">姓名</td>
                      <td class="line-one">上班打卡时间</td>
                      <td class="line-one">下班打卡时间</td>
                      <td class="line-one">状态</td>
                    </tr>
                    <tr>
                      <td>001</td>
                      <td>简阳店</td>
                      <td>张三</td>
                      <td>2017/9/11 16:44:55</td>
                      <td>2017/9/11</td>
                      <td>迟到</td>
                    </tr>
                    <tr>
                      <td>001</td>
                      <td>简阳店</td>
                      <td>张三</td>
                      <td>2017/9/11 16:44:55</td>
                      <td>2017/9/11</td>
                      <td>迟到</td>
                    </tr>
                    <tr>
                      <td>001</td>
                      <td>简阳店</td>
                      <td>张三</td>
                      <td>2017/9/11 16:44:55</td>
                      <td>2017/9/11</td>
                      <td>临时假</td>
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

        </div><!--/right-content-->
      </div>
    </div>
</template>

<script>
    export default {
        name: 'AttendanceRecord',
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
            console.log('attendance-record page')
        }
    }
</script>
