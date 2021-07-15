<template>
<div id="home">
<!--  顶部导航-->
  <nav-bar class="home-nav">
<template v-slot:center><div>购物街</div></template>
  </nav-bar>
<!--  轮播图-->
<HomeSwiper :banners="banners"></HomeSwiper>

<!--  推荐-->
<home-recommerd-view :recommends="recommends"></home-recommerd-view>

<!-- 本周精选 -->
  <feature-view></feature-view>
  <h2>我是home</h2>
</div>



</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommerdView from "./childComps/HomeRecommerdView";
import FeatureView from "./childComps/FeatureView";
import {getHomeMultidata} from "network/home";


//导入轮播图


export default {
  name: "Home",
  data(){
    return{
     banners:[],
      recommends:[]

    }
  },
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommerdView,
    FeatureView
  },
  //生命周期请求，组件一被创建就发送网络请求
  created() {
    getHomeMultidata().then(res=>{

      //this.result=res;
      this.banners=res.data.banner.list;
      this.recommends=res.data.recommend.list;
    })
  }
}
</script>

<style scoped>
#home{
  padding-top: 44px;
}
.home-nav{
  background-color: var(--color-text);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 2;

}


</style>
