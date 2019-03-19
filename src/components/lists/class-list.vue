<template>
    <div>
      <div class="right-wrapper">
        <div class="location">当前位置：考勤管理 > 班次列表</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">班次列表</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer">
                <input class="button blue fr" type="button" value="添加"  onClick="AddModal()"/>
                <input class="button blue fr" type="button" value="删除" onClick="deleteCheckbox('已删除')" />
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
                      <td class="line-one" width="100"><input name="" type="checkbox" value="" class="check-all">全选</td>
                      <td class="line-one" width="120">班次</td>
                      <td class="line-one" width="150">门店</td>
                      <td class="line-one">上班时间</td>
                      <td class="line-one">下班时间</td>
                      <td class="line-one">操作</td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>早班</td>
                      <td>简阳店</td>
                      <td>8:00</td>
                      <td>20:00</td>
                      <td><a href="javascript:;" class="button green" onClick="ChangeModal()">修改</a></td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>早班</td>
                      <td>简阳店</td>
                      <td>8:00</td>
                      <td>20:00</td>
                      <td><a href="javascript:;" class="button green" onClick="ChangeModal()">修改</a></td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>早班</td>
                      <td>简阳店</td>
                      <td>8:00</td>
                      <td>20:00</td>
                      <td><a href="javascript:;" class="button green" onClick="ChangeModal()">修改</a></td>
                    </tr>
                  </table>
                </div>
                <div class="left-tab-panel">
                  <p style="padding:40px 100px">暂无数据</p>
                </div>
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

        <!--弹出层-->
        <div id="showOverLay" class="md-overlay" ></div>
        <div class="md-modal AddModal" >
          <div class="md-title ">添加班次<a class="md-close"></a></div>
          <div class="md-content">
            <div class="md-modal-inner">
              <div class="selectDiv">
                <span class="sel-span">*班次</span><input name="" type="text" class="input-text" value="" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span">*门店</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw200" readOnly="true"  value="" placeholder="选择门店">
                  <ul class="selectUl">
                    <li>省份1</li>
                    <li>省份2</li>
                  </ul>
                </div>

              </div>
              <div class="selectDiv">
                <span class="sel-span">上班时间</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="" placeholder="选择时间">
                  <ul class="selectUl">
                    <li>01:00</li>
                    <li>02:00</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv">
                <span class="sel-span">下班时间</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="" placeholder="选择时间">
                  <ul class="selectUl">
                    <li>01:00</li>
                    <li>02:00</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv align-center">
                <input name="" type="button" class="btn_blue" value="确定" id="addYes"><input name="" type="button" class="btn_blue" value="取消">
              </div>

            </div><!--/md-modal-inner-->
          </div><!--/modal-content-->
        </div>


        <div class="md-modal ChangeModal" >
          <div class="md-title ">修改班次<a class="md-close"></a></div>
          <div class="md-content">
            <div class="md-modal-inner">
              <div class="selectDiv">
                <span class="sel-span">*班次</span><input name="" type="text" class="input-text" value="白班" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span">*门店</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw200" readOnly="true"  value="西区店" placeholder="选择门店">
                  <ul class="selectUl">
                    <li>西区店</li>
                    <li>东区店</li>
                  </ul>
                </div>

              </div>
              <div class="selectDiv">
                <span class="sel-span">上班时间</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="09:00" placeholder="选择时间">
                  <ul class="selectUl">
                    <li>01:00</li>
                    <li>02:00</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv">
                <span class="sel-span">下班时间</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="18:00" placeholder="选择时间">
                  <ul class="selectUl">
                    <li>01:00</li>
                    <li>02:00</li>
                  </ul>
                </div>
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
        name: 'ClassList',
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
            console.log('class-list page')
        }
    }
</script>
