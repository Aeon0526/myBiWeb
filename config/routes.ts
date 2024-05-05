export default [
  { path: '/user', layout: false, routes: [{ path: '/user/login', component: './User/Login' }] },
  { path: '/user', layout: false, routes: [{ path: '/user/register', component: './User/Register' }] },
  { path: '/welcome', name: '欢迎', icon: 'smile', component: './Welcome' },
  { path: '/', redirect: '/welcome' },
  { path: '/add_chart', name:'智能分析(学生在线分析)',icon: 'barChart', component: './AddChart' },
  { path: '/add_chart_async', name:'智能分析(教师异步分析)',icon: 'barChart', component: './AddChartAsync' },
  { path: '/my_chart', name:'我的图表',icon: 'pieChart', component: './MyChart' },
  {
    path: '/admin',
    icon: 'crown',
    // access: 'canAdmin',
    name: '管理',
    routes: [
      { path: '/admin', redirect: '/admin/sub-page' },
      { path: '/admin/index', name: '管理员身份介绍', component: './Admin' },
      { path: '/admin/user_manage', name: '用户管理', component: './Admin/UserManage' },
      { path: '/admin/adduser', name: '添加用户', component: './Admin/AddUser' },
      { path: '/admin/chart_manage', name: '图表管理', component: './Admin/ChartManage' },
    ],
  },
  { path: '/', redirect: '/welcome' },
  { path: '*', layout: false, component: './404' },
];
