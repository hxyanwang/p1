import Vue from 'vue'
import Router from 'vue-router'
import Index from './views/Index.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Notfound from './views/404.vue'
import Home from './views/Home.vue'
import InfoShow from './views/InfoShow.vue'
import Fundlist from './views/Fundlist.vue'

Vue.use(Router)




const router = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
		path: '/',
		redirect:'/index',
    },
	{
		path: '/index',
		name:'index',
		component:Index,
		children:[
			{path:'',redirect:'home'},
			{path:'home',name:'home',component:Home},
			{path:'infoshow',name:'infoshow',component:InfoShow},
			{path:'fundlist',name:'fundlist',component:Fundlist}
		]
	},
	{
		path: '/register',
		name:'register',
		component:Register
	},
	{
		path: '/login',
		name:'login',
		component:Login
	},
	{
		path: '/*',
		name:'/404',
		component:Notfound
	},
	
  ]
})

//路由守卫

router.beforeEach((to, from, next) => {
    const token = localStorage.getItem('TOKEN');
	// console.log(token);
	if(to.path=='/login'||to.path=='/register'){
		next();
	}else{
		token ? next() : next('/login');
	}
});




//点击没问题 如果在这个点击页面 在点击一次router-link 就会报这个错 但是不影响功能
//去你引用vue-router的页面添加一段代码
const originalPush = Router.prototype.push
Router.prototype.push = function push(location) {
  return originalPush.call(this, location).catch(err => err)
}




export default router;
