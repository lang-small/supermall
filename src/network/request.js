import axios from 'axios';
//最终写法
export function request(config) {

    const instance=axios.create({
      // baseURL:'http://123.207.32.32:8000',
      baseURL:'http://152.136.185.210:7878/api/m5' ,
      timeout:5000
    })
      //axios的拦截器
      instance.interceptors.request.use(config=>{
        //一般使用场景，比如config中的一些信息不符合服务器的要求
        //每次发送网络请求的时候，都希望显示一个请求图标
        //某些网络请求（比如登录token）,必须携带一些特殊的东西
//
        console.log(config);
        return config;
        //拦截之后要返回，不然获取不到数据
      },err => {
        console.log(err);
      })
  //响应拦截

instance.interceptors.response.use(res=>{
  console.log(res);
  return res.data;
},err=>{
  console.log(err);
})
  return instance(config)

}



