<template>

  <TabBar>
    <tab-bar-item path="/home" activeColor="blue">
      <template v-slot:item-icon> <img src="~assets/img/tabbar/首页.png"></template>
      <template v-slot:item-icon-active> <img src="~assets/img/tabbar/首页-active.png"></template>
<!--      <img src="~assets/img/tabbar/首页-active.png" slot="item-icon-active" alt="">-->
     <template v-slot:item-text> 首页</template>
    </tab-bar-item>



    <tab-bar-item path="/category" activeColor="blue">
      <template v-slot:item-icon> <img src="~assets/img/tabbar/分类.png"></template>
      <template v-slot:item-icon-active> <img src="~assets/img/tabbar/分类-active.png"></template>
      <!--      <img src="~assets/img/tabbar/首页-active.png" slot="item-icon-active" alt="">-->
      <template v-slot:item-text>分类</template>
    </tab-bar-item>



    <tab-bar-item path="/cart" activeColor="blue">
      <template v-slot:item-icon> <img src="~assets/img/tabbar/购物车-23.png"></template>
      <template v-slot:item-icon-active> <img src="~assets/img/tabbar/购物车-active.png"></template>
      <!--      <img src="~assets/img/tabbar/首页-active.png" slot="item-icon-active" alt="">-->
      <template v-slot:item-text>购物车</template>
    </tab-bar-item>


    <tab-bar-item path="/profile" activeColor="blue">
      <template v-slot:item-icon> <img src="~assets/img/tabbar/my.png"></template>
      <template v-slot:item-icon-active> <img src="~assets/img/tabbar/my-active.png"></template>
      <!--      <img src="~assets/img/tabbar/首页-active.png" slot="item-icon-active" alt="">-->
      <template v-slot:item-text>我的</template>
    </tab-bar-item>



  </TabBar>

</template>

<script>
import TabBar from "../../common/tabbar/TabBar";      //使用@
//import TabBarItem from "./tabbar/TabBarItem";
//import TabBarItem from "../../common/tabbar/TabBarItem"
import TabBarItem from "components/common/tabbar/TabBarItem";

export default {
  name: "MainTabBar",
  components:{
    TabBar,
    TabBarItem
  }
}
</script>

<style scoped>

</style>
