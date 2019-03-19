<template>
  <div>
    <div class="right-wrapper">
      <div class="location">当前位置：> 员工列表</div>
      <div class="right-content">
        <div class="right-title">
          <a :class="staffType === 'effective'? 'active': ''" @click="toggleTab('effective')">当前有效员工</a>
          <a :class="staffType === 'logout'? 'active': ''" @click="toggleTab('logout')">已注销员工</a>
        </div>
        <div class="right-panel">
          <div class="main-cont">
            <div class="select-layer pleft">
              <span>员工职位：</span>
              <div class="slcWrap" @click="isShowRoleList = !isShowRoleList">
                <input name="" type="text" class="selectIpt" readOnly="true"  value="" placeholder="请选择角色" v-model="selectedSearchRole">
                <ul class="selectUl" v-show="isShowRoleList">
                  <li v-for="(role, index) in userRoleList" @click="selectRole(index, 'search')">{{role}}</li>
                </ul>
              </div>
              <span>工号：</span>
              <input name="" type="text" class="input-text sw100" value="" placeholder="" v-model="searchStaffConditions.condition.staffNumber">
              <input class="button blue " type="button" value="查询" @click="queryStaffList(currentShopId)"/>
              <input class="button blue fr" type="button" value="注销" @click="logoutStaff()"/>
              <input class="button blue fr" type="button" value="添加" @click="GlobalDefined.AddModal" />

            </div>
            <div class="table-wrap">
              <div class="left-tab">
                <!--<p class="cursor-pointer" @click="queryStaffList()">我的门店</p>-->
                <p class="cursor-pointer">我的门店</p>
                <ul class="left-tab-ul">
                  <li class="shop-list" v-for="shop in shopList" @click="queryStaffList(shop.enterpriseId)" :class="{'selected': currentShopId === shop.enterpriseId}">{{shop.enterpriseName}}</li>
                </ul>
              </div>
              <div class="left-tab-panel" v-if="staffList.length > 0">
                <table>
                  <tr>
                    <td class="line-one" width="100"><input name="" type="checkbox" value="" class="check-all" @click="selectCheckbox($event)">全选</td>
                    <td class="line-one" width="120">员工工号</td>
                    <td class="line-one" width="150">部门</td>
                    <td class="line-one">员工名称</td>
                    <td class="line-one">员工职位</td>
                    <td class="line-one">操作</td>
                  </tr>
                  <tr v-for="staff in staffList">
                    <td><input name="" type="checkbox" value="" class="check-son"></td>
                    <td>{{staff.staffNumber}}</td>
                    <td>{{staff.departmentName}}</td>
                    <td><span>{{staff.staffName}}</span>　　电话：<span>{{staff.staffPhone}}</span></td>
                    <td>{{staff.stationName}}</td>
                    <td>
                      <router-link class="button green" :to="{path:'/home/employee-details',query: {id: staff.staffId}}">
                        详细
                      </router-link>
                      <a class="button red" @click="logoutStaff(staff)" v-if="staffType === 'effective'">注销</a>
                    </td>

                  </tr>
                </table>
                <HY-pagination :totalNumber="pagination.totalNumber" :limitNumber="pagination.limitNumber" @HY_page="jumpPage($event)" :simpleType="true" class="pagination"></HY-pagination>

              </div>
              <div class="left-tab-panel" v-if="staffList.length === 0">
                <p style="padding:40px 100px">暂无数据</p>
              </div>
            </div>
          </div>

        </div>

      </div><!--/right-content-->

      <!--弹出层-->
      <div id="showOverLay" class="md-overlay" ></div>
      <div class="md-modal AddModal" >
        <div class="md-title ">添加员工信息<a class="md-close" @click="GlobalDefined.closeModal"></a></div>
        <div class="md-content">
          <div class="md-modal-inner">
            <h1 class="modal-inner-title">员工基本信息</h1>
            <div class="selectDiv">
              <span class="sel-span">*门店名称</span>
              <div class="slcWrap" @click="isShowShopList = !isShowShopList">
                <input name="" type="text" class="selectIpt" readOnly="true"  value="" placeholder="请选择门店" v-model="selectedCreateShop">
                <ul class="selectUl" v-show="isShowShopList">
                  <li class="shop-list" v-for="shop in shopList" @click="selectShop(shop, 'create')">{{shop.enterpriseName}}</li>
                </ul>
              </div>

            </div>
            <div class="selectDiv">
              <span class="sel-span">员工工号：</span><input name="" type="text" class="input-text" v-model="createStaffData.staffNumber">
            </div>
            <div class="selectDiv">
              <span class="sel-span">员工名称：</span><input name="" type="text" class="input-text" v-model="createStaffData.staffName">
            </div>
            <div class="selectDiv">
              <span class="sel-span">性别：</span>
              <label class="checkbox-label"><input name="sex" type="radio" @click="createStaffData.staffSex = '男'"/>男</label>
              <label class="checkbox-label"><input name="sex" type="radio" @click="createStaffData.staffSex = '女'"/>女</label>
            </div>
            <div class="selectDiv">
              <span class="sel-span">员工职位：</span>
              <div class="slcWrap" @click="isShowCreateRoleList = !isShowCreateRoleList">
                <input name="" type="text" class="selectIpt" readOnly="true"  value="" placeholder="请选择职位" v-model="createStaffData.stationName">
                <ul class="selectUl" v-show="isShowCreateRoleList">
                  <li v-for="(role, index) in userRoleList" @click="selectRole(index, 'create')">{{role}}</li>
                </ul>
              </div>
            </div>
            <div class="selectDiv">
              <span class="sel-span">所在部门：</span><input name="" type="text" class="input-text" v-model="createStaffData.departmentName">
            </div>
            <div class="selectDiv">
              <span class="sel-span">部门ID：</span><input name="" type="text" class="input-text" v-model="createStaffData.departmentId">
            </div>
            <div class="selectDiv">
              <span class="sel-span">基本工资：</span><input name="" type="text" class="input-text" v-model="createStaffData.basicWage">
            </div>
            <div class="selectDiv">
              <span class="sel-span">入职时间：</span>
              <div class="slcWrap">
                <div class="ta_date" id="div_date1">
                  <span class="date_title" id="date1"></span>
                  <a class="opt_sel" id="input_trigger1" href="#">
                    <i class="i_orderd"></i>
                  </a>
                </div>

                <!--<input type="text" class="input-text cld" id="dt" value="">-->
                <!--<div id="dd"></div>-->
              </div>
            </div>
            <div class="selectDiv">
              <span class="sel-span">联系电话：</span> <input name="" type="text" class="input-text" v-model="createStaffData.staffPhone">
            </div>
          </div><!--/md-modal-inner-->
          <div class="md-modal-inner">
            <h1 class="modal-inner-title">其他信息</h1>
            <div class="selectDiv">
              <span class="sel-span">身份证号：</span><input name="" type="text" class="input-text" v-model="createStaffData.identityCard">
            </div>
            <div class="selectDiv">
              <span class="sel-span">工资卡号：</span><input name="" type="text" class="input-text" v-model="createStaffData.wageCard">
            </div>
            <div class="selectDiv">
              <span class="sel-span">社保号：</span><input name="" type="text" class="input-text" v-model="createStaffData.staffSSN">
            </div>
            <div class="selectDiv">
              <span class="sel-span textarea-span">备注信息</span>
              <textarea class="textarea-text" v-model="createStaffData.staffMemo"></textarea>
            </div>
            <div class="selectDiv align-center">
              <input name="" type="button" class="btn_blue" value="确定" @click="createStaff"><input name="" type="button" class="btn_blue" value="取消" @click="GlobalDefined.closeModal">
            </div>
          </div><!--/md-modal-inner-->
        </div><!--/modal-content-->
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'StaffList',
    data () {
      return {
        staffType: 'effective',
        searchStaffConditions: {
          "condition": {
            "enterpriseId": 0,
            "identityCard": "",
            "staffName": "",
            "staffNumber": "",
            "staffSex": "",
            "staffState": 1,
            "staffStation": 0
          },
          "pageNum": 1,
          "pageSize": 5
        },
        userRoleList: ['老板','店长','会计','营销','技师','店员','收银'],
        isShowRoleList: false,
        selectedSearchRole: '',
        staffList: [],
        shopList: [],
        isShowShopList: false,
        createStaffData:{
          staffNumber: '',   //员工工号
          enterpriseId: '',	//门店ID
          staffName: '',    //员工姓名
          staffSex: '',   //员工性别
          entryTime: '',   //入职时间
          staffPhone: '',   //员工手机
          identityCard: '',   //员工身份证号
          staffStation: '',   //员工岗位
          stationName: '',   //岗位名称
          basicWage: '',   //员工基本工资
          wageCard: '',   //员工工资卡号
          staffSSN: '',   //员工社保号
          departmentId: '',   //部门ID
          departmentName: '',   //部门名称
          staffMemo: '',   //员工备忘录
        },
        selectedCreateShop: '',
        isShowCreateRoleList: false,
        currentShopId: '',

        pagination:{
          totalNumber: 0,
          limitNumber: 5
        }
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
          let shopId = this.shopList[0].enterpriseId;
          this.currentShopId = shopId;
          this.queryStaffList(shopId);
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })
      },
      queryStaffList: function (shopId) {
        this.searchStaffConditions.pageSize = this.pagination.limitNumber;
        this.searchStaffConditions.condition.enterpriseId = shopId || 0;
        this.currentShopId = shopId || '';
        let params = this.GlobalDefined.getParams(this.searchStaffConditions);
        if(this.selectedSearchRole){
          params.condition.staffStation = this.searchStaffConditions.condition.staffStation || 0;
        }
        this.http.post(this.GlobalDefined.api + '/staff/findPage', params, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.staffList = res.data.data.list;
          this.pagination.totalNumber = res.data.data.total;
          this.selectCheckbox('');
        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })
      },
      logoutStaff: function (staff) {
        let staffId = '';
        if(!staff){
          let logoutList = [];
          for(let i in $('.check-son')){
            if($('.check-son')[i]['checked']){
              logoutList.push(this.shopList[i]['enterpriseId'])
            }
          }
          logoutList.length !== 1 ? this.GlobalDefined.showCenterTip('请选择一项') : (staffId = logoutList[0]);

        }else{
          staffId = staff.staffId;
        }
        if(staffId){
          this.http.get(this.GlobalDefined.api + '/staff/disable?id=' + staffId, {
            headers: {
              'Content-Type': 'application/json'
            }
          }).then((res) => {
            this.queryStaffList(this.searchStaffConditions.condition.enterpriseId);
            this.GlobalDefined.showCenterTip(res.data.message);
          }).catch((e) => {
            this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
          })
        }
      },
      createStaff: function () {
        this.createStaffData.entryTime = this.createStaffData.entryTime
          || new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate();
        let params = this.GlobalDefined.getParams(this.createStaffData);
        params.staffStation = params.staffStation || 0;
        this.http.post(this.GlobalDefined.api + '/staff/add', params, {
          headers: {
            'Content-Type': 'application/json'
          }
        }).then((res) => {
          this.GlobalDefined.showCenterTip(res.data.message);
          this.GlobalDefined.closeModal();

        }).catch((e) => {
          this.GlobalDefined.showCenterTip("失败，'" + e.response.data.path + "'接口状态码: "+ e.response.status, 3000);
        })

      },
      selectRole: function (index, type) {
        if(type === 'search'){
          this.searchStaffConditions.condition.staffStation = index;
          this.selectedSearchRole = this.userRoleList[index]
        }else{
          this.createStaffData.stationName = this.userRoleList[index];
          this.createStaffData.staffStation = index;
        }
      },
      toggleTab: function (tab) {
        this.staffType = tab;
        this.searchStaffConditions.condition.staffState = tab === 'effective' ? 1 :0;
        this.queryStaffList(this.currentShopId);
      },
      jumpPage: function (page) {
        this.searchStaffConditions.pageNum = page;
        this.queryStaffList(this.currentShopId);
      },
      selectShop: function (shop, type) {
        if(type === 'create'){
          this.selectedCreateShop = shop.enterpriseName;
          this.createStaffData.enterpriseId = shop.enterpriseId;
        }
      },
      selectCheckbox: function (e) {
        this.GlobalDefined.selectAllCheckbox(e && e.target);
      },
    },
    mounted () {
      this.queryShopList();


      let dateRange1 = pickerDateRange.execute('date1', {
        isTodayValid : true,
        startDate : new Date().getFullYear() + "-" + (new Date().getMonth() + 1) + "-" + new Date().getDate(),
        needCompare : false,
        autoSubmit : true,
        inputTrigger : 'input_trigger1',
        theme : 'ta',
        singleCompare: true,
        shortOpr: true,
        calendars: 1,
        success : (obj) => {
          this.createStaffData.entryTime = obj.startDate;
        }
      });

    }
  }
</script>
