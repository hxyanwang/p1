import axios from 'axios';
import { Loading,Message } from 'element-ui';

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
	startLoading
    return config;
},error=>{
    // 对请求错误做些什么
    return Promise.reject(error);
});

// 添加响应拦截器
axios.interceptors.response.use(response=>{
    // 对响应数据做点什么
	endLoading
    return response;
},error=>{
	// 对响应错误做点什么
	Message({
		showClose: true,
		message: '错误'+error,
		type: 'error'
	});
	return Promise.reject(error);
});



export default axios;