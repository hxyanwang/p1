import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)


export default new Vuex.Store({
	state:{
		isAuthenticated:false,
		user:{},
	},
	getters:{
		isAuthenticated:state=>state.isAuthenticated,
		user:state=>state.user
	},
	mutations:{
		setAuthenticated(state,isAuthenticated){
			if(isAuthenticated){
				state.isAuthenticated=isAuthenticated;
			}else{
				state.isAuthenticated=false;
			}
		},
		setUser(state,user){
			if(user){
				state.user=user;
			}else{
				state.user={};
			}
		}
	},
	actions:{
		//Action 函数接受一个与 store 实例具有相同方法和属性的 commit 对象
		//{commit} 是  var commit = commit.commit;
		setAuthenticated:({commit},isAuthenticated)=>{
			commit('setAuthenticated',isAuthenticated);
		},
		setUser:({commit},user)=>{
			commit('setUser',user);
		}
	} 
})
