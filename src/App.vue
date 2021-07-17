<template>
  <div id="app" class="wrapper">

<!--
保留home不要销毁

-->
    <router-view v-slot="{ Component }">
      <keep-alive>
        <component :is="Component" />
      </keep-alive>
    </router-view>
<main-tab-bar></main-tab-bar>



  </div>

</template>



<script>
import MainTabBar from "./components/content/mainTabbar/MainTabBar";

export default {
  name:'app',
  components:{
    MainTabBar,

  }
}


</script>
<style>
@import "assets/css/base.css";
@import "assets/css/tabbar.css";
</style>
