<template>
  <div>
    <div class="right-wrapper">
      <div class="location">当前位置：员工 > 员工职位列表</div>
      <div class="right-content">
        <div class="right-title">
          <a class="active">员工职位列表</a>
        </div>
        <div class="right-panel">
          <div class="main-cont">
            <div class="select-layer">
              <input class="button blue fr" type="button" value="添加" onClick="AddModal()" />
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
                    <td class="line-one" width="120">员工职位</td>
                    <td class="line-one" width="30%">职位描述</td>
                    <td class="line-one" width="120">门店</td>
                    <td class="line-one">操作</td>
                  </tr>
                  <tr>
                    <td>技师</td>
                    <td><p>职位描述</p></td>
                    <td>简阳店</td>
                    <td><a href="javascript:;" class="button green" onClick="ChangeModal()" >修改</a><a href="javascript:;" class="button red" onClick="deleteTr(event,'已删除')">删除</a></td>
                  </tr>
                  <tr>
                    <td>服务员</td>
                    <td><p>职位描述</p></td>
                    <td>简阳店</td>
                    <td><a href="javascript:;" class="button green" onClick="ChangeModal()" >修改</a><a href="javascript:;" class="button red" onClick="deleteTr(event,'已删除')">删除</a></td>
                  </tr>
                  <tr>
                    <td>店长</td>
                    <td><p>职位描述</p></td>
                    <td>简阳店</td>
                    <td><a href="javascript:;" class="button green" onClick="ChangeModal()" >修改</a><a href="javascript:;" class="button red" onClick="deleteTr(event,'已删除')">删除</a></td>
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
                <table>
                  <tr>
                    <td class="line-one" width="120">员工职位</td>
                    <td class="line-one" width="30%">职位描述</td>
                    <td class="line-one" width="120">门店</td>
                    <td class="line-one">操作</td>
                  </tr>
                  <tr>
                    <td><input name="" type="checkbox" value=""></td>
                    <td><p>职位描述</p></td>
                    <td>东区店</td>
                    <td><a href="javascript:;" class="button green" onClick="ChangeModal()" >修改</a><a href="javascript:;" class="button red" onClick="deleteTr(event,'已删除')">删除</a></td>
                  </tr>
                  <tr>
                    <td><input name="" type="checkbox" value=""></td>
                    <td><p>职位描述</p></td>
                    <td>东区店</td>
                    <td><a href="javascript:;" class="button green" onClick="ChangeModal()" >修改</a><a href="javascript:;" class="button red" onClick="deleteTr(event,'已删除')">删除</a></td>
                  </tr>
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
            </div>
          </div>

        </div>
        <!--end-->

        <div id="showOverLay" class="md-overlay" ></div>
        <div class="md-modal AddModal" >
          <div class="md-title ">添加职位名称<a class="md-close"></a></div>
          <div class="md-content">
            <div class="md-modal-inner">
              <div class="selectDiv">
                <span class="sel-span">当前门店</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="" placeholder="当前门店">
                  <ul class="selectUl">
                    <li>东区店</li>
                    <li>西区店</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv">
                <span class="sel-span">*职位名称：</span><input name="" type="text" class="input-text" value="" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span textarea-span">描述信息</span>
                <textarea class="textarea-text"></textarea>
              </div>
              <div class="selectDiv align-center">
                <input name="" type="button" class="btn_blue" value="确定"  id="addYes"><input name="" type="button" class="btn_blue" value="取消">
              </div>

            </div><!--/md-modal-inner-->
          </div><!--/modal-content-->
        </div>



        <div class="md-modal ChangeModal" >
          <div class="md-title ">修改职位名称<a class="md-close"></a></div>
          <div class="md-content">
            <div class="md-modal-inner">
              <div class="selectDiv">
                <span class="sel-span">当前门店</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="东区店" placeholder="当前门店">
                  <ul class="selectUl">
                    <li>东区店</li>
                    <li>西区店</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv">
                <span class="sel-span">*职位名称：</span><input name="" type="text" class="input-text" value="技师" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span textarea-span">描述信息</span>
                <textarea class="textarea-text">职位描述信息</textarea>
              </div>
              <div class="selectDiv align-center">
                <input name="" type="button" class="btn_blue" value="确定"  ><input name="" type="button" class="btn_blue" value="取消">
              </div>

            </div><!--/md-modal-inner-->
          </div><!--/modal-content-->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'EmployeePositionsList',
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
//            this.init();
//            this.queryPort();
      console.log('employee-positions page')
    }
  }
</script>
