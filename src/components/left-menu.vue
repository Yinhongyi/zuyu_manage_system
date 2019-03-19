<template>
    <div id="left-menu">
        <div class="left-menu">
            <div class="menu-info">
                <dl>
                  <!--<router-link to="/home/store-list" @click.native="currentClicked = '';currentSelected = 'index'">-->
                  <router-link to="/home/store-list" @click.native="clickMenu('index')">
                    <dt class="index-icon" :class="currentSelected === 'index' ? 'selected' : ''"><i></i>首页</dt>
                  </router-link>
                  <router-link to="/home/store-list" @click.native="clickMenu('store')">
                    <dt class="department-icon" :class="currentSelected === 'store' ? 'selected' : ''"><i></i>门店管理</dt>
                  </router-link>
                  <router-link to="/home/department-list" @click.native="clickMenu('department')">
                    <dt class="department-icon" :class="currentSelected === 'department' ? 'selected' : ''"><i></i>部门管理</dt>
                  </router-link>
                  <router-link to="/home/staff-list" @click.native="clickMenu('staff')">
                    <dt class="staff-icon"><i></i>员工管理</dt>
                  </router-link>
                  <dd v-if="currentClicked === 'staff'">
                    <router-link to="/home/staff-list" :class="currentSelected === 'staff' ? 'selected' : ''" @click.native="clickMenu('staff')">员工列表</router-link>
                    <router-link to="/home/employee-positions-list" :class="currentSelected === 'employee-positions' ? 'selected' : ''" @click.native="clickMenu('staff', 'employee-positions')">员工职位列表</router-link>
                  </dd>
                  <router-link to="/home/room-list" @click.native="clickMenu('room')">
                    <dt class="room-icon"><i></i>房间管理</dt>
                  </router-link>
                  <dd v-if="currentClicked === 'room'">
                    <router-link to="/home/room-list" :class="currentSelected === 'room' ? 'selected' : ''" @click.native="clickMenu('room')">房间列表</router-link>
                    <router-link to="/home/roomtype-list" :class="currentSelected === 'roomtype' ? 'selected' : ''" @click.native="clickMenu('room', 'roomtype')">房间类型列表</router-link>
                  </dd>
                  <router-link to="/home/hand-list" @click.native="clickMenu('hand')">
                    <dt class="hand-icon" :class="currentSelected === 'hand' ? 'selected' : ''"><i></i>手牌管理</dt>
                  </router-link>
                  <router-link to="/home/consumption-list" @click.native="clickMenu('consumption')">
                    <dt class="consume-icon"><i></i>消费项目管理</dt>
                  </router-link>
                  <dd v-if="currentClicked === 'consumption'">
                    <router-link to="/home/consumption-list" :class="currentSelected === 'consumption' ? 'selected' : ''" @click.native="clickMenu('consumption')">消费项目列表</router-link>
                    <router-link to="/home/consumption-type-list" :class="currentSelected === 'consumption-type' ? 'selected' : ''" @click.native="clickMenu('consumption', 'consumption-type')">消费项类型表</router-link>
                  </dd>
                  <router-link to="/home/card-list" @click.native="clickMenu('card')">
                    <dt class="membercard-icon" :class="currentSelected === 'card' ? 'selected' : ''"><i></i>会员卡管理</dt>
                  </router-link>
                  <router-link to="/home/member-list" @click.native="clickMenu('member')">
                    <dt class="member-icon" :class="currentSelected === 'member' ? 'selected' : ''"><i></i>会员管理</dt>
                  </router-link>
                  <router-link to="/home/user-list" @click.native="clickMenu('user')">
                    <dt class="user-icon"><i></i>用户管理</dt>
                  </router-link>
                  <dd v-if="currentClicked === 'user'">
                    <router-link to="/home/user-list" :class="currentSelected === 'user' ? 'selected' : ''" @click.native="clickMenu('user')">用户列表</router-link>
                    <router-link to="/home/user-role-list" :class="currentSelected === 'user-role' ? 'selected' : ''" @click.native="clickMenu('user', 'user-role')">用户角色列表</router-link>
                  </dd>
                  <router-link to="/home/role-permissions" @click.native="clickMenu('role')">
                    <dt class="system-icon"><i></i>系统管理</dt>
                  </router-link>
                  <dd v-if="currentClicked === 'role'">
                    <router-link to="/home/role-permissions" :class="currentSelected === 'role' ? 'selected' : ''" @click.native="clickMenu('role')">角色权限</router-link>
                    <router-link to="/home/user-rights" :class="currentSelected === 'user-rights' ? 'selected' : ''" @click.native="clickMenu('role', 'user-rights')">用户权限</router-link>
                  </dd>
                  <router-link to="/home/billed-list" @click.native="clickMenu('data')">
                    <dt class="system-icon"><i></i>营业数据</dt>
                  </router-link>
                  <dd v-if="currentClicked === 'data'">
                    <router-link to="/home/billed-list" :class="currentSelected === 'data' ? 'selected' : ''" @click.native="clickMenu('data')">已结账单列表</router-link>
                    <router-link to="/home/nospending-list" :class="currentSelected === 'nospending' ? 'selected' : ''" @click.native="clickMenu('data', 'nospending')">未结消费列表</router-link>
                    <router-link to="/home/accounts-list" :class="currentSelected === 'accounts' ? 'selected' : ''" @click.native="clickMenu('data', 'accounts')">挂账消费列表</router-link>
                    <router-link to="/home/members-card" :class="currentSelected === 'members-card' ? 'selected' : ''" @click.native="clickMenu('data', 'members-card')">会员办卡信息</router-link>
                    <router-link to="/home/recharge-list" :class="currentSelected === 'recharge' ? 'selected' : ''" @click.native="clickMenu('data', 'recharge')">会员充值列表</router-link>
                    <router-link to="/home/clock-details-list" :class="currentSelected === 'clock-details' ? 'selected' : ''" @click.native="clickMenu('data', 'clock-details')">钟量明细列表</router-link>
                    <router-link to="/home/clock-statistics" :class="currentSelected === 'clock-statistics' ? 'selected' : ''" @click.native="clickMenu('data', 'clock-statistics')">钟量统计</router-link>
                    <router-link to="/home/business-statistics" :class="currentSelected === 'business' ? 'selected' : ''" @click.native="clickMenu('data', 'business')">营业统计</router-link>
                  </dd>
                  <router-link to="/home/punch-record" @click.native="clickMenu('attendance')">
                    <dt class="attendance-icon"><i></i>考勤管理</dt>
                  </router-link>
                  <dd v-if="currentClicked === 'attendance'">
                    <router-link to="/home/punch-record" :class="currentSelected === 'attendance' ? 'selected' : ''" @click.native="clickMenu('attendance')">未打卡记录</router-link>
                    <router-link to="/home/attendance-record" :class="currentSelected === 'attendance-record' ? 'selected' : ''" @click.native="clickMenu('attendance', 'attendance-record')">考勤记录</router-link>
                    <router-link to="/home/leave-record" :class="currentSelected === 'leave' ? 'selected' : ''" @click.native="clickMenu('attendance', 'leave')">请假记录</router-link>
                    <router-link to="/home/scheduling" :class="currentSelected === 'scheduling' ? 'selected' : ''" @click.native="clickMenu('attendance', 'scheduling')">排班信息</router-link>
                    <router-link to="/home/class-list" :class="currentSelected === 'class' ? 'selected' : ''" @click.native="clickMenu('attendance', 'class')">班次列表</router-link>
                  </dd>
                  <router-link to="/home/settlement" @click.native="clickMenu('settlement')">
                    <dt class="cashier-icon"><i></i>收银台</dt>
                  </router-link>
                  <dd v-if="currentClicked === 'settlement'">
                    <router-link to="/home/settlement" :class="currentSelected === 'settlement' ? 'selected' : ''" @click.native="clickMenu('settlement')">结算</router-link>
                  </dd>
                </dl>
                <div style="width:100%; height:50px"></div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'left-menu',
        data() {
            return {
              currentClicked: '',
              currentSelected: ''
            }
        },
        methods: {
            init: function () {
                document.getElementsByClassName('left-menu')[0].style.height = (window.innerHeight - 90) + 'px';
            },
            clickMenu: function (name1, name2) {
              this.currentClicked = name1;
              this.currentSelected = name2 || name1;
            }
        },
        mounted() {
            this.init();
        }
    }
</script>
<style>
    #left-menu{
        display: inline-block;
    }
</style>
