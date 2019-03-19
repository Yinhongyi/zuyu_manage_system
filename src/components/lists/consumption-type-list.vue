<template>
    <div>
      <div class="right-wrapper">
        <div class="location">当前位置：消费项目 > 消费项类型表</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">消费项类型表</a>
          </div>
          <div class="right-panel">
            <div class="main-cont">
              <div class="select-layer">
                <input class="button blue fr" type="button" value="删除" onClick="deleteCheckbox('已删除')" />
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
                      <td class="line-one"><input name="" type="checkbox" value="" class="check-all">全选</td>
                      <td class="line-one">消费类型</td>
                      <td class="line-one">描述</td>
                      <td class="line-one">操作</td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>服务项目  </td>
                      <td> *************************</td>
                      <td><a href="javascript:;" class="button green" onClick="ChangeModal()">修改</a></td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>服务项目  </td>
                      <td> *************************</td>
                      <td><a href="javascript:;" class="button green" onClick="ChangeModal()">修改</a></td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>服务项目  </td>
                      <td> *************************</td>
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

          <div id="showOverLay" class="md-overlay" ></div>
          <div class="md-modal AddModal" >
            <div class="md-title ">添加消费项类型信息<a class="md-close"></a></div>
            <div class="md-content">
              <div class="md-modal-inner">
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
                  <span class="sel-span">*项目类型</span>
                  <input name="" type="text" class="input-text" value="" placeholder="">
                </div>
                <div class="selectDiv">
                  <span class="sel-span textarea-span">描述信息</span>
                  <textarea class="textarea-text"></textarea>
                </div>
              </div><!--/md-modal-inner-->
              <div class="md-modal-inner card-modal-inner">
                <h1 class="modal-inner-title">设置信息</h1>
                <div class="selectDiv">
                  <label class="checkbox-label"><input name="" type="checkbox" value="">是否钟房项目</label>
                  <label class="checkbox-label"><input name="" type="checkbox" value="">是否允许提成</label>
                  <label class="checkbox-label"><input name="" type="checkbox" value="">是否参与打折</label>
                  <label class="checkbox-label"><input name="" type="checkbox" value="">是否支持会员卡结算</label>
                </div>

                <div class="selectDiv align-center">
                  <input name="" type="button" class="btn_blue" value="确定" id="addYes"><input name="" type="button" class="btn_blue cancel" value="取消">
                </div>
              </div><!--/md-modal-inner-->
            </div><!--/modal-content-->
          </div>

          <!--修改弹窗-->
          <div class="md-modal ChangeModal" >
            <div class="md-title ">修改消费项类型信息<a class="md-close"></a></div>
            <div class="md-content">
              <div class="md-modal-inner">
                <h1 class="modal-inner-title">基本信息</h1>
                <div class="selectDiv">
                  <span class="sel-span">当前门店</span>
                  <div class="slcWrap">
                    <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="东区店" >
                    <ul class="selectUl">
                      <li>东区店</li>
                      <li>西区店</li>
                    </ul>
                  </div>
                </div>
                <div class="selectDiv">
                  <span class="sel-span">*项目类型</span>
                  <input name="" type="text" class="input-text" value="服务项目" placeholder="">
                </div>
                <div class="selectDiv">
                  <span class="sel-span textarea-span">描述信息</span>
                  <textarea class="textarea-text">服务项目描述详情</textarea>
                </div>
              </div><!--/md-modal-inner-->
              <div class="md-modal-inner card-modal-inner">
                <h1 class="modal-inner-title">设置信息</h1>
                <div class="selectDiv">
                  <label class="checkbox-label"><input name="" type="checkbox"  checked>是否钟房项目</label>
                  <label class="checkbox-label"><input name="" type="checkbox" value="">是否允许提成</label>
                  <label class="checkbox-label"><input name="" type="checkbox" value="">是否参与打折</label>
                  <label class="checkbox-label"><input name="" type="checkbox" value="">是否支持会员卡结算</label>
                </div>

                <div class="selectDiv align-center">
                  <input name="" type="button" class="btn_blue" value="确定" id="changeYes"><input name="" type="button" class="btn_blue cancel" value="取消">
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
        name: 'ConsumptionTypeList',
        data () {
            return {
              consumptionTypeConditions:{
                "condition": {
                  "goodsId": 0,
                  "itemName": "",
                  "itemType": 0,
                  "status": 1
                },
                "pageNum": 1,
                "pageSize": 5
              }
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
            console.log('consumption-type-list page')
        }
    }
</script>
