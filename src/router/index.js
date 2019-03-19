import Vue from 'vue'
import Router from 'vue-router'

const Home = () => import( '../components/home.vue')
const Login = () => import( '../components/login.vue')
const StoreList = () => import( '../components/lists/store-list.vue')
const StoreDetails = () => import( '../components/lists/store-details.vue')
const DepartmentList = () => import( '../components/lists/department-list.vue')
const StaffList = () => import( '../components/lists/staff-list.vue')
const EmployeeDetails = () => import( '../components/lists/employee-details.vue')
const EmployeePositionsList = () => import( '../components/lists/employee-positions-list.vue')
const RoomList = () => import( '../components/lists/room-list.vue')
const RoomtypeList = () => import( '../components/lists/roomtype-list.vue')
const HandList = () => import( '../components/lists/hand-list.vue')
const ConsumptionList = () => import( '../components/lists/consumption-list.vue')
const ConsumerProjectDetails = () => import( '../components/lists/consumer-project-details.vue')
const ConsumptionTypeList = () => import( '../components/lists/consumption-type-list.vue')
const CardList = () => import( '../components/lists/card-list.vue')
const MemberList = () => import( '../components/lists/member-list.vue')
const UserList = () => import( '../components/lists/user-list.vue')
const UserRoleList = () => import( '../components/lists/user-role-list.vue')
const RolePermissions = () => import( '../components/lists/role-permissions.vue')
const UserRights = () => import( '../components/lists/user-rights.vue')
const BilledList = () => import( '../components/lists/billed-list.vue')
const NospendingList = () => import( '../components/lists/nospending-list.vue')
const AccountsList = () => import( '../components/lists/accounts-list.vue')
const BillDetails = () => import( '../components/lists/bill-details.vue')
const MembersCard = () => import( '../components/lists/members-card.vue')
const RechargeList = () => import( '../components/lists/recharge-list.vue')
const ClockDetailsList = () => import( '../components/lists/clock-details-list.vue')
const ClockStatistics = () => import( '../components/lists/clock-statistics.vue')
const BusinessStatistics = () => import( '../components/lists/business-statistics.vue')
const PunchRecord = () => import( '../components/lists/punch-record.vue')
const AttendanceRecord = () => import( '../components/lists/attendance-record.vue')
const LeaveRecord = () => import( '../components/lists/leave-record.vue')
const Scheduling = () => import( '../components/lists/scheduling.vue')
const ClassList = () => import( '../components/lists/class-list.vue')
const Settlement = () => import( '../components/lists/settlement.vue')

Vue.use(Router)

export default new Router({
  // mode: 'history',
  // base:  '/sm/',
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '*',
      redirect: '/home'
    },
    {
      path: '/login',
      component:  Login
    },
    {
      path: "/home",
      component:  Home,
      children: [
        {
          path: '/',
          redirect: '/home/store-list'
        },
        {
          path: 'store-list', // 门店管理
          component: StoreList
        },
        {
          path: 'store-details', // 门店详情
          component: StoreDetails
        },
        {
          path: 'department-list', // 部门管理
          component: DepartmentList
        },
        {
          path: 'staff-list', // 员工管理 -- 员工列表
          component: StaffList
        },
        {
          path: 'employee-details', // 员工管理 -- 员工详情
          component: EmployeeDetails
        },
        {
          path: 'employee-positions-list', // 员工管理 -- 员工职位列表
          component: EmployeePositionsList
        },
        {
          path: 'room-list', // 房间管理 -- 房间列表
          component: RoomList
        },
        {
          path: 'roomtype-list', // 房间管理 -- 房间类型列表
          component: RoomtypeList
        },
        {
          path: 'hand-list', // 手牌管理
          component: HandList
        },
        {
          path: 'consumption-list', // 消费项目管理 -- 消费项目列表
          component: ConsumptionList
        },
        {
          path: 'consumer-project-details', // 消费项目管理 -- 消费项目列表
          component: ConsumerProjectDetails
        },
        {
          path: 'consumption-type-list', // 消费项目管理 -- 消费项类型表
          component: ConsumptionTypeList
        },
        {
          path: 'card-list', // 会员卡管理
          component: CardList
        },
        {
          path: 'member-list', // 会员管理
          component: MemberList
        },
        {
          path: 'user-list', // 用户管理 -- 用户列表
          component: UserList
        },
        {
          path: 'user-role-list', // 用户管理 -- 用户角色列表
          component: UserRoleList
        },
        {
          path: 'role-permissions', // 系统管理 -- 角色权限
          component: RolePermissions
        },
        {
          path: 'user-rights', // 系统管理 -- 用户权限
          component: UserRights
        },
        {
          path: 'billed-list', // 营业数据 -- 已结账单列表
          component: BilledList
        },
        {
          path: 'nospending-list', // 营业数据 -- 未结消费列表
          component: NospendingList
        },
        {
          path: 'accounts-list', // 营业数据 -- 挂账消费列表
          component: AccountsList
        },
        {
          path: 'bill-details', // 营业数据 -- 账单详情
          component: BillDetails
        },
        {
          path: 'members-card', // 营业数据 -- 会员办卡信息
          component: MembersCard
        },
        {
          path: 'recharge-list', // 营业数据 -- 会员充值列表
          component: RechargeList
        },
        {
          path: 'clock-details-list', // 营业数据 -- 钟量明细列表
          component: ClockDetailsList
        },
        {
          path: 'clock-statistics', // 营业数据 -- 钟量统计
          component: ClockStatistics
        },
        {
          path: 'business-statistics', // 营业数据 -- 营业统计
          component: BusinessStatistics
        },
        {
          path: 'punch-record', // 考勤管理 -- 未打卡记录
          component: PunchRecord
        },
        {
          path: 'attendance-record', // 考勤管理 -- 考勤记录
          component: AttendanceRecord
        },
        {
          path: 'leave-record', // 考勤管理 -- 请假记录
          component: LeaveRecord
        },
        {
          path: 'scheduling', // 考勤管理 -- 排班信息
          component: Scheduling
        },
        {
          path: 'class-list', // 考勤管理 -- 班次列表
          component: ClassList
        },
        {
          path: 'settlement', // 收银台 -- 结算
          component: Settlement
        }
      ]
    },
  ]
})
