import axios from 'axios';
import { Loading,Message } from 'element-ui';
import router from './router'

let loading;
function startLoading(){
	loading=Loading.service({
		lock:true,
		text:'加载中',
		background:'rgba(0,0,0,0.7)'
	});
}
function endLoading(){
	loading.close();
}

axios.interceptors.request.use(config=>{
    // 在发送请求之前做些什么
	// console.log(config);
	if(localStorage.TOKEN){
		//设置请求头
		config.headers.Authorization = localStorage.TOKEN;
	}
	startLoading()
    return config;
},error=>{
    // 对请求错误做些什么
	Message({showClose: true,message: '请求错误',type: 'error'});
	console.log(error);
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(response=>{
    // 对响应数据做点什么
	// console.log(response);
	endLoading()
    return response;
},error=>{
	// 对响应错误做点什么
	endLoading();
	Message({showClose: true,message: '响应错误',type: 'error'});
	console.log(error);
	return Promise.reject(error);
});



export default axios;