<template>
  <div>
    <div class="right-wrapper">
      <div class="location">当前位置：员工管理 > 员工详情</div>
      <div class="right-content">
        <div class="right-title">
          <a class="active">员工详情</a>
        </div>
        <div class="right-panel">
          <div class="main-cont">
            <div class="details-wrap">
              <div class="details-top">
                <h1 class="details-title">员工基本信息</h1>
                <input class="button blue fr" type="button" value="删除" @click="logoutStaff"/>
                <input class="button blue fr" type="button" value="修改" @click="GlobalDefined.ChangeModal()" />
              </div>
              <div class="details-cont cunsumer-project">
                <div class="picture"><img src="../../assets/images/details-pic.jpg"></div>
                <div class="cp-right">
                  <ul class="dcp-ul">
                    <li>
                      <label class="checkbox-label">所属门店：<span><b class="b-blue">{{staffData.enterpriseName}}</b></span></label>
                    </li>
                    <li>
                      <label class="checkbox-label">员工名称：<span>{{staffData.staffName}}</span></label>
                      <label class="checkbox-label">员工性别：<span>{{staffData.staffSex}}</span></label>
                    </li>
                    <li>
                      <label class="checkbox-label">员工工号：<span>{{staffData.staffNumber}}</span></label>
                    </li>
                    <li>
                      <label class="checkbox-label">联系电话：<span>{{staffData.staffPhone}}</span></label>
                    </li>
                    <li>
                      <label class="checkbox-label">员工职位：<span>{{staffData.stationName}}</span></label>
                      <label class="checkbox-label">所属部门：<span>{{staffData.departmentName}}</span></label>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="details-top">
                <h1 class="details-title"></h1>
              </div>
              <div class="details-cont cunsumer-project">
                <ul class="dcp-ul">
                  <li><label class="checkbox-label">员工状态：<span>{{staffData.stateName}}</span></label></li>
                  <li v-if="staffData.staffState"><label class="checkbox-label">入职时间：
                    <span>{{staffData.entryTime && staffData.entryTime.substring(0,staffData.entryTime.length-9).replace('T', '   ')}}</span>
                  </label></li>
                  <li v-if="!staffData.staffState"><label class="checkbox-label">离职时间：
                    <span>{{staffData.departTime && staffData.departTime.substring(0,staffData.departTime.length-9).replace('T', '   ')}}</span>
                  </label></li>
                  <li><label class="checkbox-label">基本工资：<span>{{staffData.basicWage}}</span></label></li>
                </ul>
              </div>
              <div class="details-top">
                <h1 class="details-title"><br>其它信息</h1>
              </div>
              <div class="details-cont cunsumer-project">
                <ul class="dcp-ul">
                  <li><label class="checkbox-label">身份证号：<span>{{staffData.identityCard}}</span></label></li>
                  <li><label class="checkbox-label">工资卡号：<span>{{staffData.wageCard}}</span></label></li>
                  <li><label class="checkbox-label">社保号：<span>{{staffData.staffSSN}}</span></label></li>
                  <!--<li><label class="checkbox-label">签订时间：<span>2015-10-23</span></label></li>-->
                  <!--<li><label class="checkbox-label">合同保证金：<span>3000</span></label></li>-->
                  <li><label class="checkbox-label">备注信息：<span>{{staffData.staffMemo}}</span></label></li>
                </ul>
              </div>
            </div><!--/details-wrap-->

          </div>
        </div><!--/right-panel-->
      </div>

      <!--弹出层-->
      <div id="showOverLay" class="md-overlay" ></div>
      <div class="md-modal ChangeModal" >
        <div class="md-title ">修改员工信息<a class="md-close" @click="GlobalDefined.closeModal"></a></div>
        <div class="md-content">
          <div class="md-modal-inner">
            <h1 class="modal-inner-title">员工基本信息</h1>
            <div class="selectDiv">
              <span class="sel-span">*门店名称</span>
              <div class="slcWrap" @click="isShowShopList = !isShowShopList">
                <input name="" type="text" class="selectIpt" readOnly="true" placeholder="" v-model="staffModifyData.enterpriseName">
                <ul class="selectUl" v-show="isShowShopList">
                  <li class="shop-list" v-for="shop in shopList" @click="selectShop(shop, 'modify')">{{shop.enterpriseName}}</li>
                </ul>
              </div>
            </div>
            <div class="selectDiv">
              <span class="sel-span">员工工号：</span><input name="" type="text" class="input-text" v-model="staffModifyData.staffNumber">
            </div>
            <div class="selectDiv">
              <span class="sel-span">员工名称：</span><input name="" type="text" class="input-text" v-model="staffModifyData.staffName">
            </div>
            <div class="selectDiv">
              <span class="sel-span">性别：</span>
              <label class="checkbox-label"><input name="sex" type="radio" @click="staffModifyData.staffSex = '男'" :checked="staffModifyData.staffSex === '男'"/>男</label>
              <label class="checkbox-label"><input name="sex" type="radio" @click="staffModifyData.staffSex = '女'" :checked="staffModifyData.staffSex === '女'"/>女</label>
            </div>
            <div class="selectDiv">
              <span class="sel-span">员工职位：</span>
              <div class="slcWrap" @click="isShowRoleList = !isShowRoleList">
                <input name="" type="text" class="selectIpt" readOnly="true"  value="" placeholder="请选择职位" v-model="staffModifyData.stationName">
                <ul class="selectUl" v-show="isShowRoleList">
                  <li v-for="(role, index) in userRoleList" @click="selectRole(index, 'modify')">{{role}}</li>
                </ul>
              </div>

              <!--<input name="" type="text" class="input-text" v-model="staffModifyData.stationName">-->
            </div>
            <div class="selectDiv">
              <span class="sel-span">基本工资：</span><input name="" type="text" class="input-text" v-model="staffModifyData.basicWage">
            </div>
            <!--<div class="selectDiv">-->
              <!--<span class="sel-span">入职职位：</span><input name="" type="text" class="input-text" v-model="staffModifyData.stationName">-->
            <!--</div>-->
            <div class="selectDiv">
              <span class="sel-span">入职时间：</span>
              <div class="slcWrap">
                <div class="ta_date" id="div_date1">
                  <span class="date_title" id="date1"></span>
                  <a class="opt_sel" id="input_trigger1" href="#">
                    <i class="i_orderd"></i>
                  </a>
                </div>
              </div>
            </div>
            <div class="selectDiv">
              <span class="sel-span">联系电话：</span> <input name="" type="text" class="input-text" v-model="staffModifyData.staffPhone">
            </div>
          </div><!--/md-modal-inner-->
          <div class="md-modal-inner">
            <h1 class="modal-inner-title">其他信息</h1>
            <div class="selectDiv">
              <span class="sel-span">身份证号：</span><input name="" type="text" class="input-text" v-model="staffModifyData.identityCard">
            </div>
            <div class="selectDiv">
              <span class="sel-span">工资卡号：</span><input name="" type="text" class="input-text" v-model="staffModifyData.wageCard">
            </div>
            <div class="selectDiv">
              <span class="sel-span">社保号：</span><input name="" type="text" class="input-text" v-model="staffModifyData.staffSSN">
            </div>
<!--
            <div class="selectDiv">
              <span class="sel-span">签订时间：</span>
              <div class="slcWrap">
                <input type="text" class="input-text cld" id="dt1" value="2013-10-09">
                <div id="dd1"></div>
              </div>
            </div>
-->
<!--
            <div class="selectDiv">
              <span class="sel-span">合同保证金：</span><input name="" type="text" class="input-text" v-model="staffModifyData.staffPhone">
            </div>
-->
            <div class="selectDiv">
              <span class="sel-span textarea-span">备注信息</span>
              <textarea class="textarea-text" v-model="staffModifyData.staffMemo"></textarea>
            </div>
            <div class="selectDiv align-center">
              <input name="" type="button" class="btn_blue" value="确定" @click="modifyStaffData"><input name="" type="button" class="btn_blue" value="取消" @click="GlobalDefined.closeModal">
            </div>
          </div><!--/md-modal-inner-->
        </div><!--/modal-content-->
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'EmployeeDetails',
    data () {
      return {
        staffId: '',
        staffData: {},
        staffModifyData: {},
        shopList: [],
        isShowShopList: false,
        isShowRoleList: false,
        userRoleList: ['老板','店长','会计','营销','技师','店员','收银'],
      }
    },
    methods: {
      queryShopList: function () {
        let params  = {
          "enterpriseState": 1,
        };
        this.http.post(this.GlobalDefined.api + '/shop/findList', params, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.shopList = res.data.data;
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })
      },
      queryEmployeeDetails: function () {
        this.http.get(this.GlobalDefined.api + '/staff/get?id=' + this.staffId, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.staffData = res.data.data;
          this.staffModifyData = this.GlobalDefined.deepClone(this.staffData);
          this.queryShopList();
          this.initCalendar();
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })
      },
      logoutStaff: function () {
        this.http.get(this.GlobalDefined.api + '/staff/disable?id=' + this.staffId, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.GlobalDefined.showCenterTip('注销成功');
          this.$router.push('/staff-list')
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })
      },
      modifyStaffData: function () {
        if(this.staffModifyData.creatorId !== sessionStorage.getItem("zy_userId")){
          this.staffModifyData.lastMenderId = sessionStorage.getItem("zy_userId");
          this.staffModifyData.lastMenderName = sessionStorage.getItem("zy_userAccount");
        }
        let params = this.GlobalDefined.getParams(this.staffModifyData);
        params.staffStation = params.staffStation || 0;

        console.log(params);
        this.http.post(this.GlobalDefined.api + '/staff/update', params, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          if(res.data && res.data.data){
            this.queryEmployeeDetails(this.staffId);
          }
          this.GlobalDefined.showCenterTip(res.data.message);
          this.GlobalDefined.closeModal();
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })

      },
      initCalendar: function () {
        let startTime = this.staffModifyData.entryTime.split('T')[0];
        console.log(startTime);
        let dateRange1 = pickerDateRange.execute('date1', {
          isTodayValid : true,
          startDate : startTime,
          needCompare : false,
          autoSubmit : true,
          inputTrigger : 'input_trigger1',
          theme : 'ta',
          singleCompare: true,
          shortOpr: true,
          calendars: 1,
          success : (obj) => {
            this.staffModifyData.entryTime = obj.startDate;
          }
        });
      },
      selectShop: function (shop, type) {
        if(type === 'modify'){
          this.staffModifyData.enterpriseName = shop.enterpriseName;
          this.staffModifyData.enterpriseId = shop.enterpriseId;
        }
      },
      selectRole: function (index, type) {
        if(type === 'modify'){
          this.staffModifyData.stationName = this.userRoleList[index];
          this.staffModifyData.staffStation = index;
//          this.SearchRole = this.userRoleList[index];
//          this.userSeachCondition.roleId = index;
        }
      }
    },
    mounted () {
      this.staffId = this.$route.query && this.$route.query.id;
      if(this.staffId){
        this.queryEmployeeDetails(this.staffId);
      }else{
        this.$router.push('/staff-list');
      }
    }
  }
</script>
