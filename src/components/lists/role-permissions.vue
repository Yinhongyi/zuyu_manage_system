<template>
    <div>
      <div class="right-wrapper">
        <div class="location">当前位置：角色管理 > 角色权限</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">老板</a>
            <a>系统管理员</a>
            <a>营销</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer accounts-layer">
                <input class="button blue fr" type="button" value="查询" />
              </div>
              <div class="table-wrap accounts-tab">
                <table>
                  <tr>
                    <td class="line-one" width="100"><input name="" type="checkbox" value="" class="check-all">全选</td>
                    <td class="line-one">功能点</td>
                    <td class="line-one" width="70%">描述</td>
                  </tr>
                  <tr>
                    <td><input name="" type="checkbox" value=""></td>
                    <td>用户列表</td>
                    <td>1987年9月14日21时07分中国第一封电子邮件从北京发往德国“越过长城，走向世界”</td>
                  </tr>
                  <tr>
                    <td><input name="" type="checkbox" value=""></td>
                    <td>用户列表</td>
                    <td>1987年9月14日21时07分中国第一封电子邮件从北京发往德国“越过长城，走向世界”</td>
                  </tr>
                  <tr>
                    <td><input name="" type="checkbox" value=""></td>
                    <td>用户列表</td>
                    <td>1987年9月14日21时07分中国第一封电子邮件从北京发往德国“越过长城，走向世界”</td>
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
          <!--/right-panel -->
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer accounts-layer">
                <input class="button blue fr" type="button" value="查询" />
              </div>
              <div class="table-wrap accounts-tab">
                <table>
                  <tr>
                    <td class="line-one" width="100"><input name="" type="checkbox" value="" class="check-all">全选</td>
                    <td class="line-one">功能点</td>
                    <td class="line-one" width="70%">描述</td>
                  </tr>
                  <tr>
                    <td><input name="" type="checkbox" value=""></td>
                    <td>用户列表</td>
                    <td>1987年9月14日21时07分中国第一封电子邮件从北京发往德国“越过长城，走向世界”</td>
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
          <!--/right-panel -->
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer accounts-layer">
                <input class="button blue fr" type="button" value="查询" />
              </div>
              <div class="table-wrap accounts-tab">
                <table>
                  <tr>
                    <td class="line-one" width="100"><input name="" type="checkbox" value="" class="check-all">全选</td>
                    <td class="line-one">功能点</td>
                    <td class="line-one" width="70%">描述</td>
                  </tr>
                  <tr>
                    <td><input name="" type="checkbox" value=""></td>
                    <td>用户列表</td>
                    <td>1987年9月14日21时07分中国第一封电子邮件从北京发往德国“越过长城，走向世界”</td>
                  </tr>
                  <tr>
                    <td><input name="" type="checkbox" value=""></td>
                    <td>用户列表</td>
                    <td>1987年9月14日21时07分中国第一封电子邮件从北京发往德国“越过长城，走向世界”</td>
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
          <!--/right-panel -->
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'RolePermissions',
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
            console.log('role-permissions page')
        }
    }
</script>
