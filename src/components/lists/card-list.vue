<template>
    <div>
      <div class="right-wrapper">
        <div class="location">当前位置：会员卡管理 > 会员卡列表</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">会员卡列表</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer">
                <input class="button blue fr" type="button" value="删除"onClick="deleteCheckbox('已删除')"  />
                <input class="button blue fr" type="button" value="设置项目" onClick="SetModal()" />
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
                      <td class="line-one" width="100"><input name="" type="checkbox" value="" class="check-all">全选</td>
                      <td class="line-one" width="120">会员卡</td>
                      <td class="line-one" width="150">开卡金额</td>
                      <td class="line-one">充值限额</td>
                      <td class="line-one">门店</td>
                      <td class="line-one">有效期</td>
                      <td class="line-one">操作</td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>金卡</td>
                      <td>1222</td>
                      <td>1222</td>
                      <td>简阳店</td>
                      <td>365天</td>
                      <td><a href="javascript:;" class="button green" onClick="ChangeModal()">修改</a></td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>金卡</td>
                      <td>1222</td>
                      <td>1222</td>
                      <td>简阳店</td>
                      <td>365天</td>
                      <td><a href="javascript:;" class="button green" onClick="ChangeModal()">修改</a></td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>金卡</td>
                      <td>1222</td>
                      <td>1222</td>
                      <td>简阳店</td>
                      <td>365天</td>
                      <td><a href="javascript:;" class="button green" onClick="ChangeModal()">修改</a></td>
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
          </div><!--/right-panel -->
        </div><!--/right-content-->

        <!--弹出层-->
        <div id="showOverLay" class="md-overlay" ></div>
        <div class="md-modal AddModal" >
          <div class="md-title ">添加会员卡信息<a class="md-close"></a></div>
          <div class="md-content">
            <div class="md-modal-inner card-modal-inner">
              <h1 class="modal-inner-title">基本信息</h1>
              <div class="selectDiv">
                <span class="sel-span">当前门店</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="" placeholder="请选择门店">
                  <ul class="selectUl">
                    <li>东区店</li>
                    <li>西区店</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv">
                <span class="sel-span">*会员卡名称</span><input name="" type="text" class="input-text" value="" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span">*卡面金额（开卡金额）</span><input name="" type="text" class="input-text" value="" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span">*最低充值金额</span><input name="" type="text" class="input-text" value="" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span">有效时间</span><input name="" type="text" class="input-text" value="" placeholder=""><span style="color:inherit; margin-right:40px">天</span><label class="checkbox-label"><input name="time" type="radio"  />不限有限时间</label>
              </div>

            </div><!--/md-modal-inner-->
            <div class="md-modal-inner riado-modal-inner ">
              <h1 class="modal-inner-title">设置信息</h1>
              <div class="selectDiv">
                <label class="checkbox-label"><input name="" type="checkbox" value="">是否允许充值</label>
                <label class="checkbox-label"><input name="" type="checkbox" value="">是否允许合卡</label>
                <label class="checkbox-label"><input name="" type="checkbox" value="">是否允许提成</label>
                <label class="checkbox-label"><input name="" type="checkbox" value="">是否允许积分</label>
              </div>
              <div class="selectDiv">
                <span class="sel-span">积分方式：</span>
                <label class="checkbox-label"><input name="theway" type="radio"  />消费金额</label>
                <label class="checkbox-label"><input name="theway" type="radio"  />消费次数</label>
                <label class="checkbox-label"><input name="theway" type="radio"  />充值金额</label>
              </div>
              <div class="selectDiv">
                <span class="sel-span">计分方式：</span>
                <label class="checkbox-label"><input name="way" type="radio"  />每次</label>
                <label class="checkbox-label"><input name="way" type="radio"  />累计</label>
              </div>
              <div class="selectDiv">
                <span class="sel-span">计算方式：</span><input name="" type="text" class="input-text" value="" placeholder=""><span class="sel-span">元</span><span class="sel-span">积</span><input name="" type="text" class="input-text" value="" placeholder="">
              </div>
              <div class="selectDiv align-center">
                <input name="" type="button" class="btn_blue" value="确定" id="addYes"><input name="" type="button" class="btn_blue" value="取消">
              </div>
            </div><!--/md-modal-inner-->
          </div><!--/modal-content-->
        </div>

        <div class="md-modal SetModal" >
          <div class="md-title ">会员卡与项目关联设置<a class="md-close"></a></div>
          <div class="md-content">
            <div class="md-modal-inner card-modal-inner">
              <h1 class="modal-inner-title">基本信息</h1>
              <div class="selectDiv">
                <span class="sel-span">当前门店</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="" placeholder="请选择门店">
                  <ul class="selectUl">
                    <li>东区店</li>
                    <li>西区店</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv">
                <span class="sel-span">*会员卡名称</span><input name="" type="text" class="input-text" value="" placeholder="">
              </div>

              <div class="table-wrap">
                <table>
                  <tr>
                    <td class="line-one" width="180">项目编号</td>
                    <td class="line-one" width="130">消费项目</td>
                    <td class="line-one" width="120">项目类型</td>
                    <td class="line-one">价格</td>
                    <td class="line-one">结算价格</td>
                  </tr>
                  <tr>
                    <td>891</td>
                    <td>足浴</td>
                    <td>服务项目</td>
                    <td>300</td>
                    <td><input name="" type="text" class="input-text" value="" placeholder=""></td>
                  </tr>
                  <tr>
                    <td>891</td>
                    <td>足浴</td>
                    <td>服务项目</td>
                    <td>300</td>
                    <td><input name="" type="text" class="input-text" value="" placeholder=""></td>
                  </tr>
                </table>
              </div>

              <div class="selectDiv align-center">
                <input name="" type="button" class="btn_blue" value="确定" id="addYes"><input name="" type="button" class="btn_blue" value="取消">
              </div>
            </div><!--/md-modal-inner-->
          </div><!--/modal-content-->
        </div>


        <div class="md-modal ChangeModal" >
          <div class="md-title ">修改会员卡信息<a class="md-close"></a></div>
          <div class="md-content">
            <div class="md-modal-inner card-modal-inner">
              <h1 class="modal-inner-title">基本信息</h1>
              <div class="selectDiv">
                <span class="sel-span">当前门店</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="东区店" placeholder="请选择门店">
                  <ul class="selectUl">
                    <li>东区店</li>
                    <li>西区店</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv">
                <span class="sel-span">*会员卡名称</span><input name="" type="text" class="input-text" value="白金卡" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span">*卡面金额（开卡金额）</span><input name="" type="text" class="input-text" value="3000" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span">*最低充值金额</span><input name="" type="text" class="input-text" value="100" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span">有效时间</span><input name="" type="text" class="input-text" value="" placeholder=""><span style="color:inherit; margin-right:40px">天</span><label class="checkbox-label"><input name="time" type="radio"  checked />不限有限时间</label>
              </div>

            </div><!--/md-modal-inner-->
            <div class="md-modal-inner riado-modal-inner ">
              <h1 class="modal-inner-title">设置信息</h1>
              <div class="selectDiv">
                <label class="checkbox-label"><input name="" type="checkbox" value="" checked>是否允许充值</label>
                <label class="checkbox-label"><input name="" type="checkbox" value=""checked>是否允许合卡</label>
                <label class="checkbox-label"><input name="" type="checkbox" value=""checked>是否允许提成</label>
                <label class="checkbox-label"><input name="" type="checkbox" value=""checked>是否允许积分</label>
              </div>
              <div class="selectDiv">
                <span class="sel-span">积分方式：</span>
                <label class="checkbox-label"><input name="theway" type="radio" checked />消费金额</label>
                <label class="checkbox-label"><input name="theway" type="radio"  />消费次数</label>
                <label class="checkbox-label"><input name="theway" type="radio"  />充值金额</label>
              </div>
              <div class="selectDiv">
                <span class="sel-span">计分方式：</span>
                <label class="checkbox-label"><input name="way" type="radio" checked />每次</label>
                <label class="checkbox-label"><input name="way" type="radio"  />累计</label>
              </div>
              <div class="selectDiv">
                <span class="sel-span">计算方式：</span><input name="" type="text" class="input-text" value="1" placeholder=""><span class="sel-span">元</span><span class="sel-span">积</span><input name="" type="text" class="input-text" value="1" placeholder="">
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
        name: 'CardList',
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
            console.log('card-list page')
        }
    }
</script>
