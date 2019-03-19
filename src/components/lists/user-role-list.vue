<template>
    <div>
      <div class="right-wrapper">
        <div class="location">当前位置：用户 > 用户角色列表</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">用户角色列表</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer">
                <input class="button blue fr" type="button" value="删除" onClick="deleteCheckbox('已删除')" />
                <input class="button blue fr" type="button" value="添加" onClick="AddModal()" />

              </div>
              <div class="table-wrap">
                <table>
                  <tr>
                    <td class="line-one" width="120"><input name="" type="checkbox" value="" class="check-all">全选</td>
                    <td class="line-one" width="200">用户角色</td>
                    <td class="line-one" width="40%">描述</td>
                    <td class="line-one">操作</td>
                  </tr>
                  <tr>
                    <td><input name="" type="checkbox" value="" class="check-son"></td>
                    <td>老板</td>
                    <td><p>描述详情</p></td>
                    <td><a href="javascript:;" class="button green">修改</a></td>
                  </tr>
                  <tr>
                    <td><input name="" type="checkbox" value="" class="check-son"></td>
                    <td>老板</td>
                    <td><p>描述详情</p></td>
                    <td><a href="javascript:;" class="button green">修改</a></td>
                  </tr>
                  <tr>
                    <td><input name="" type="checkbox" value="" class="check-son"></td>
                    <td>老板</td>
                    <td><p>描述详情</p></td>
                    <td><a href="javascript:;" class="button green">修改</a></td>
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
        <div id="showOverLay" class="md-overlay" ></div>
        <div class="md-modal AddModal" >
          <div class="md-title ">添加用户角色<a class="md-close"></a></div>
          <div class="md-content">
            <div class="md-modal-inner">
              <div class="selectDiv">
                <span class="sel-span">*角色名称</span><input name="" type="text" class="input-text" value="" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span textarea-span">描述信息</span>
                <textarea class="textarea-text"></textarea>
              </div>
              <div class="selectDiv align-center">
                <input name="" type="button" class="btn_blue" value="确定" id="addYes"><input name="" type="button" class="btn_blue" value="取消">
              </div>

            </div><!--/md-modal-inner-->
          </div><!--/modal-content-->
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'UserRoleList',
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
            console.log('user-role-list page')
        }
    }
</script>
