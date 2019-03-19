<template>
    <div>
      <div class="right-wrapper width-md-right">
        <div class="location">当前位置：会员管理 > 会员列表</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">会员列表</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer pleft">
                <span>会员卡号：</span><input name="" type="text" class="input-text" value="" placeholder="">
                <span>手机号：</span><input name="" type="text" class="input-text" value="" placeholder="">
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="" placeholder="会员卡类型">
                  <ul class="selectUl">
                    <li>粉卡</li>
                    <li>黑卡</li>
                  </ul>
                </div>
                <input class="button blue" type="button" value="查询" />
                <input class="button blue" type="button" value="删除" onClick="deleteCheckbox('已删除')" />
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
                      <td class="line-one" width="120">会员名称</td>
                      <td class="line-one" width="150">手机号</td>
                      <td class="line-one">门店</td>
                      <td class="line-one">总余额</td>
                      <td class="line-one">会员卡总数</td>
                      <td class="line-one">最近消费时间</td>
                      <td class="line-one">操作</td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>张三</td>
                      <td>13981899950</td>
                      <td>简阳店</td>
                      <td>1000</td>
                      <td>1</td>
                      <td>2017/9/10 15:53</td>
                      <td><a href="member-details.html" class="button green" >修改</a></td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>张三</td>
                      <td>13981899950</td>
                      <td>简阳店</td>
                      <td>1000</td>
                      <td>1</td>
                      <td>2017/9/10 15:53</td>
                      <td><a href="member-details.html" class="button green" >修改</a></td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>张三</td>
                      <td>13981899950</td>
                      <td>简阳店</td>
                      <td>1000</td>
                      <td>1</td>
                      <td>2017/9/10 15:53</td>
                      <td><a href="member-details.html" class="button green" >修改</a></td>
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

        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: 'MemberList',
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
            console.log('member-list page')
        }
    }
</script>
