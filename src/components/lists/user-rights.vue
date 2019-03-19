<template>
    <div>
      <div class="right-wrapper">
        <div class="location">当前位置：用户 > 用户权限</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">用户权限</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer pleft">
                <span>当前门店：</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw150" readOnly="true"  value="" placeholder="请选择门店">
                  <ul class="selectUl">
                    <li>东区店</li>
                    <li>西区店</li>
                  </ul>
                </div>

                <input class="button blue" type="button" value="查询" />
              </div>
              <div class="table-wrap">
                <div class="left-tab">
                  <p>我的门店</p>
                  <div class="slcWrap mdsel">
                    <input name="" type="text" class="selectIpt sw150 " readOnly="true"  value="" placeholder="所有用户角色">
                    <ul class="selectUl">
                      <li>所有用户</li>
                      <li>管理员</li>
                      <li>员工</li>
                    </ul>
                  </div>
                  <ul class="left-tab-ul">
                    <li>张三</li>
                    <li>李四</li>
                    <li>王五</li>
                  </ul>
                </div>
                <div class="left-tab-panel">
                  <table>
                    <tr>
                      <td class="line-one" width="100"><input name="" type="checkbox" value="" class="check-all">全选</td>
                      <td class="line-one" width="150">功能点</td>
                      <td class="line-one" >描述</td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value=""></td>
                      <td>用户列表</td>
                      <td><p>用户权限描述用户权限描述用户权限描述</p></td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value=""></td>
                      <td>用户列表</td>
                      <td><p>用户权限描述用户权限描述用户权限描述</p></td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value=""></td>
                      <td>用户列表</td>
                      <td><p>用户权限描述用户权限描述用户权限描述</p></td>
                    </tr>
                  </table>
                </div>
                <div class="left-tab-panel">
                  <table>
                    <tr>
                      <td class="line-one" width="100"><input name="" type="checkbox" value="" class="check-all">全选</td>
                      <td class="line-one" width="150">功能点</td>
                      <td class="line-one" >描述</td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value=""></td>
                      <td>用户列表</td>
                      <td><p>用户权限描述用户权限描述用户权限描述</p></td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value=""></td>
                      <td>添加用户</td>
                      <td><p>用户权限描述用户权限描述用户权限描述</p></td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value=""></td>
                      <td>部门列表</td>
                      <td><p>用户权限描述用户权限描述用户权限描述</p></td>
                    </tr>
                  </table>
                </div>
                <div class="left-tab-panel">
                  <table>
                    <tr>
                      <td class="line-one" width="100"><input name="" type="checkbox" value="" class="check-all">全选</td>
                      <td class="line-one" width="150">功能点</td>
                      <td class="line-one" >描述</td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value=""></td>
                      <td>用户列表</td>
                      <td><p>用户权限描述用户权限描述用户权限描述</p></td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value=""></td>
                      <td>用户列表</td>
                      <td><p>用户权限描述用户权限描述用户权限描述</p></td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value=""></td>
                      <td>用户列表</td>
                      <td><p>用户权限描述用户权限描述用户权限描述锦被</p></td>
                    </tr>
                  </table>
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
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'UserRights',
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
            console.log('user-rights page')
        }
    }
</script>
