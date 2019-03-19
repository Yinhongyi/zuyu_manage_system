<template>
    <div>
        <div class="right-wrapper">
            <div class="location">当前位置：部门管理</div>
            <div class="right-content">
                <div class="right-title">
                    <a class="active">当前有效部门</a>
                    <a href="javascript::">已注销部门</a>
                </div>
                <div class="right-panel">
                    <div class="main-cont">
                        <div class="select-layer">
                            <input class="button blue fr" type="button" value="添加"  onClick="AddModal()" />
                            <input class="button blue fr" type="button" value="注销"  onClick="deleteCheckbox('已注销')"  />
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
                                        <td class="line-one" width="120"> 门店编码</td>
                                        <td class="line-one" width="150">门店名称</td>
                                        <td class="line-one">部门负责人</td>
                                        <td class="line-one">部门名称</td>
                                        <td class="line-one">操作</td>
                                    </tr>
                                    <tr>
                                        <td><input name="" type="checkbox" value="" class="check-son"></td>
                                        <td>001</td>
                                        <td><a href="store-details.html">尚缘轩柏溪店</a></td>
                                        <td> <span>何某</span> 联系电话：<span>13981899954</span></td>
                                        <td>技师部</td>
                                        <td><a href="javascript:;" class="button green"onClick="ChangeModal()" >修改</a><a href="javascript:;" class="button red" onClick="deleteTr(event,'已注销')">注销</a></td>
                                    </tr>
                                    <tr>
                                        <td><input name="" type="checkbox" value="" class="check-son"></td>
                                        <td>001</td>
                                        <td><a href="store-details.html">尚缘轩柏溪店</a></td>
                                        <td> <span>何某</span> 联系电话：<span>13981899954</span></td>
                                        <td>技师部</td>
                                        <td><a href="javascript:;" class="button green"onClick="ChangeModal()" >修改</a><a href="javascript:;" class="button red" onClick="deleteTr(event,'已注销')">注销</a></td>
                                    </tr>
                                    <tr>
                                        <td><input name="" type="checkbox" value="" class="check-son"></td>
                                        <td>001</td>
                                        <td><a href="store-details.html">尚缘轩柏溪店</a></td>
                                        <td> <span>何某</span> 联系电话：<span>13981899954</span></td>
                                        <td>技师部</td>
                                        <td><a href="javascript:;" class="button green"onClick="ChangeModal()" >修改</a><a href="javascript:;" class="button red" onClick="deleteTr(event,'已注销')">注销</a></td>
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
                <div class="right-panel">
                    <div class="main-cont">
                        <div class="select-layer">
                            <input class="button blue fr" type="button" value="激活" onClick="deleteCheckbox('已激活')" />
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
                                        <td class="line-one" width="120"> 门店编码</td>
                                        <td class="line-one" width="150">门店名称</td>
                                        <td class="line-one">部门负责人</td>
                                        <td class="line-one">部门名称</td>
                                        <td class="line-one">操作</td>
                                    </tr>
                                    <tr>
                                        <td><input name="" type="checkbox" value="" class="check-son"></td>
                                        <td>001</td>
                                        <td><a href="store-details.html">尚缘轩柏溪店</a></td>
                                        <td> <span>何某</span> 联系电话：<span>13981899954</span></td>
                                        <td>技师部</td>
                                        <td><a href="javascript:;" class="button red" onClick="deleteTr(event,'已删除')">删除</a></td>
                                    </tr>
                                    <tr>
                                        <td><input name="" type="checkbox" value="" class="check-son"></td>
                                        <td>001</td>
                                        <td><a href="store-details.html">尚缘轩柏溪店</a></td>
                                        <td> <span>何某</span> 联系电话：<span>13981899954</span></td>
                                        <td>技师部</td>
                                        <td><a href="javascript:;" class="button red" onClick="deleteTr(event,'已删除')">删除</a></td>
                                    </tr>
                                    <tr>
                                        <td><input name="" type="checkbox" value="" class="check-son"></td>
                                        <td>001</td>
                                        <td><a href="store-details.html">尚缘轩柏溪店</a></td>
                                        <td> <span>何某</span> 联系电话：<span>13981899954</span></td>
                                        <td>技师部</td>
                                        <td><a href="javascript:;" class="button red" onClick="deleteTr(event,'已删除')">删除</a></td>
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

            <!--弹出层-->
            <div id="showOverLay" class="md-overlay" ></div>
            <div class="md-modal AddModal" >
                <div class="md-title ">添加部门信息<a class="md-close"></a></div>
                <div class="md-content">
                    <div class="md-modal-inner">
                        <h1 class="modal-inner-title">部门信息</h1>
                        <div class="selectDiv">
                            <span class="sel-span">当前门店</span>
                            <div class="slcWrap">
                                <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="" placeholder="请选择门店">
                                <ul class="selectUl">
                                    <li>尚缘轩柏溪店</li>
                                    <li>尚缘轩</li>
                                </ul>
                            </div>
                        </div>
                        <div class="selectDiv">
                            <span class="sel-span">*部门名称</span><input name="" type="text" class="input-text" value="" placeholder="">
                        </div>
                        <div class="selectDiv">
                            <span class="sel-span">负责人</span><input name="" type="text" class="input-text" value="" placeholder="">
                            <span class="sel-span"></span>
                            <span class="sel-span">联系电话</span><input name="" type="text" class="input-text" value="" placeholder="">
                        </div>
                        <div class="selectDiv align-center">
                            <input name="" type="button" class="btn_blue" value="确定" id="addYes"><input name="" type="button" class="btn_blue" value="取消">
                        </div>
                    </div><!--/md-modal-inner-->
                </div><!--/modal-content-->
            </div>


            <div class="md-modal ChangeModal" >
                <div class="md-title ">修改部门信息<a class="md-close"></a></div>
                <div class="md-content">
                    <div class="md-modal-inner">
                        <h1 class="modal-inner-title">部门信息</h1>
                        <div class="selectDiv">
                            <span class="sel-span">当前门店</span>
                            <div class="slcWrap">
                                <input name="" type="text" class="selectIpt sw100" readOnly="true"  value="" placeholder="请选择门店">
                                <ul class="selectUl">
                                    <li>尚缘轩柏溪店</li>
                                    <li>尚缘轩</li>
                                </ul>
                            </div>
                        </div>
                        <div class="selectDiv">
                            <span class="sel-span">*部门名称</span><input name="" type="text" class="input-text" value="" placeholder="">
                        </div>
                        <div class="selectDiv">
                            <span class="sel-span">负责人</span><input name="" type="text" class="input-text" value="" placeholder="">
                            <span class="sel-span"></span>
                            <span class="sel-span">联系电话</span><input name="" type="text" class="input-text" value="" placeholder="">
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
        name: 'DepartmentList',
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
            console.log('department page')
        }
    }
</script>
