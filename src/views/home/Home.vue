<template>
<div id="home">
<!--  顶部导航-->
  <nav-bar class="home-nav">
<template v-slot:center><div>购物街</div></template>
  </nav-bar>

<!--滚动-->
<!--传入子组件 probe-type =3 ,说明要实时监听  pull-up-load 上拉获取更多-->
  <scroll class="content" ref="scroll" :probe-type="3" @scroll="contentScroll" :pull-up-load="true" @pullingUp="loadMore">
    <!--  轮播图-->
<HomeSwiper :banners="banners"></HomeSwiper>

<!--  推荐-->
<home-recommerd-view :recommends="recommends"></home-recommerd-view>

<!-- 本周精选 -->
  <feature-view></feature-view>

<!--  点击事件动态切换-->
  <tab-control class="tab-controls" :titles="['流行','精选','新款']" @tabClick="tabClick"></tab-control>

<!--  利用计算属性进行取值-->
  <goods-list :goods=showGoods></goods-list>

  </scroll>
<!--  返回顶部   @click.native 监听原生事件  通过position 的坐标值来绑定v-show 来决定返回顶部的图片是否显示-->
<back-top @click.native="backClick" v-show="isShowBackTop"></back-top>
</div>



</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import TabControl from "components/content/tabControl/TabControl";
import GoodsList from "components/content/goods/GoodsList";
//滚动
import Scroll from "components/common/scroll/Scroll";
import BackTop from "components/content/backTop/BackTop";

import HomeSwiper from "./childComps/HomeSwiper";
import HomeRecommerdView from "./childComps/HomeRecommerdView";
import FeatureView from "./childComps/FeatureView";


import {getHomeMultidata,getHomeGoods} from "network/home";




//导入轮播图


export default {
  name: "Home",
  data(){
    return{
     banners:[],
      recommends:[],
      goods:{
       'pop':{page:0,list:[]},
        'new':{page:0,list:[]},
        'sell':{page:0,list:[]}

      },
      currentType:'pop',
      isShowBackTop:false

    }
  },
  //通过计算属性拿到商品的值
  computed:{
    showGoods(){
      return this.goods[this.currentType].list
    }
  },

  //组件
  components:{
    NavBar,
    HomeSwiper,
    HomeRecommerdView,
    FeatureView,
    TabControl,
    GoodsList,
    Scroll,
    BackTop
  },
  //生命周期请求，组件一被创建就发送网络请求
  created() {
    //1.请求多个数据
    this.getHomeMultidata()
    //请求商品数据
    this.getHomeGoods('pop')
    this.getHomeGoods('new')
    this.getHomeGoods('sell')

  },

  methods:{
    /**
     * 事件监听
     *
     *
     *
    */

    loadMore(){
      // console.log('上拉加载更多');调用下面的getHomeGoods方法
      this.getHomeGoods(this.currentType),
        //每次加载更多完成后刷新一下高度
      this.$refs.scroll.scroll.refresh()
    },

    contentScroll(position){

      //和下面if else效果一样
      this.isShowBackTop=(-position.y)>1000
     // console.log(position)
     //  if(-position.y>1000){
     //    this.isShowBackTop=true
     //  }else {
     //    this.isShowBackTop=false
     //  }


    },
    tabClick(index){
     switch (index){
       case 0:
         this.currentType='pop'
             break
       case 1:
          this.currentType='new'
             break
       case  2:
         this.currentType='sell'
             break
     }

    },
backClick(){
//      回到坐标（0，0），在500毫秒内this.$refs.scroll就会调用子组件里面的东西，这个就是调用子组件里面的scrollTo方法
this.$refs.scroll.scrollTo(0,0,500);
},


    /**
     * 网络请求方法
     */

    getHomeMultidata(){
      getHomeMultidata().then(res=>{

        //this.result=res;
        this.banners=res.data.banner.list;
        this.recommends=res.data.recommend.list;
      })
    },
    getHomeGoods(type){
      //获取商品，需要传入商品类型
   const page=this.goods[type].page+1
      getHomeGoods(type,page).then(res=>{
        //将返回数据里面的list复制给goods
        this.goods[type].list.push(...res.data.list),
          //页数加一
        this.goods[type].page+=1
        // console.log(res);
        //调用子组件里面的完成下拉
        this.$refs.scroll.finishPullUp()
      })

    }
  }
}
</script>

<style scoped>
#home{
  /*padding-top: 44px;*/
  /*视口高度 view height*/
  height: 100vh;
  position: relative;
}
.home-nav{
  background-color: var(--color-text);
  color: white;
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  z-index: 9;

}
.tab-controls{
  position:sticky;
  top: 44px;
  z-index: 9;
  background-color: #eeeeee;
}

.content{
  height: calc(100% - 98px);
  overflow: hidden;
   top: 44px;
  position: absolute;
  bottom: 49px;
  left: 0;
  right: 0;
}

</style>
