<template>
    <div>
      <div class="right-wrapper">
        <div class="location">当前位置：房间管理 > 房间类型列表</div>
        <div class="right-content">
          <div class="right-title">
            <a class="active">房间类型列表</a>
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
                      <td class="line-one" width="120">房间类型</td>
                      <td class="line-one" width="45%">描述</td>
                      <td class="line-one">门店</td>
                      <td class="line-one">操作</td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>单人间</td>
                      <td><p>淡淡的檀木香充斥在身旁,镂空的雕花窗桕中射入斑斑点点细碎的阳光,细细打量一番,身下是一张的木床,精致的雕花装饰的是不凡,身上是一床锦被</p></td>
                      <td>简阳店</td>
                      <td><a href="javascript:;" class="button green" onClick="ChangeModal()" >修改</a></td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>单人间</td>
                      <td><p>淡淡的檀木香充斥在身旁,镂空的雕花窗桕中射入斑斑点点细碎的阳光,细细打量一番,身下是一张的木床,精致的雕花装饰的是不凡,身上是一床锦被</p></td>
                      <td>简阳店</td>
                      <td><a href="javascript:;" class="button green" onClick="ChangeModal()" >修改</a></td>
                    </tr>
                    <tr>
                      <td><input name="" type="checkbox" value="" class="check-son"></td>
                      <td>单人间</td>
                      <td><p>淡淡的檀木香充斥在身旁,镂空的雕花窗桕中射入斑斑点点细碎的阳光,细细打量一番,身下是一张的木床,精致的雕花装饰的是不凡,身上是一床锦被</p></td>
                      <td>简阳店</td>
                      <td><a href="javascript:;" class="button green" onClick="ChangeModal()" >修改</a></td>
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

        </div>



        <div id="showOverLay" class="md-overlay" ></div>
        <div class="md-modal AddModal" >
          <div class="md-title ">添加房间类型<a class="md-close"></a></div>
          <div class="md-content">
            <div class="md-modal-inner">
              <h1 class="modal-inner-title">基本信息</h1>
              <div class="selectDiv">
                <span class="sel-span">当前门店</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="" placeholder="请选择门店">
                  <ul class="selectUl">
                    <li>尚缘轩柏店</li>
                    <li>尚缘轩</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv">
                <span class="sel-span">*房间类型</span><input name="" type="text" class="input-text" value="" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span textarea-span">描述</span>
                <textarea class="textarea-text"></textarea>
              </div>
              <div class="selectDiv align-center">
                <input name="" type="button" class="btn_blue" value="确定" id="addYes"><input name="" type="button" class="btn_blue" value="取消">
              </div>
            </div><!--/md-modal-inner-->
          </div><!--/modal-content-->
        </div>

        <div class="md-modal ChangeModal" >
          <div class="md-title ">修改房间类型<a class="md-close"></a></div>
          <div class="md-content">
            <div class="md-modal-inner">
              <h1 class="modal-inner-title">基本信息</h1>
              <div class="selectDiv">
                <span class="sel-span">当前门店</span>
                <div class="slcWrap">
                  <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="尚缘轩柏店" placeholder="请选择门店">
                  <ul class="selectUl">
                    <li>尚缘轩柏店</li>
                    <li>尚缘轩</li>
                  </ul>
                </div>
              </div>
              <div class="selectDiv">
                <span class="sel-span">*房间类型</span><input name="" type="text" class="input-text" value="单人间" placeholder="">
              </div>
              <div class="selectDiv">
                <span class="sel-span textarea-span">描述</span>
                <textarea class="textarea-text">房间类型描述</textarea>
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
        name: 'RoomtypeList',
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
            console.log('RoomtypeList page')
        }
    }
</script>
