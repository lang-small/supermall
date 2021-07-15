import {request} from "./request";

//首页的所以请求
export function getHomeMultidata(){
  return request({
    url:'/home/multidata'
  })
}
