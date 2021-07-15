<template>
<!--  //轮播图模块-->
  <swiper>
    <!-- <swiper-item v-for="(item,index) in banners" :key="index">-->
    <swiper-item v-for="item in banners" >
      <a :href="item.link">
        <img :src="item.image" class="home-nav-item">
      </a>

    </swiper-item>

  </swiper>

</template>

<script>
import {Swiper,SwiperItem} from 'components/common/swiper'
export default {
  name: "HomeSwiper",
  props:{
    banners:{
    type:Array,
    default(){
      return []
    }
    }
  },
  components:{
    Swiper,
    SwiperItem
  }
}
</script>

<style scoped>
.home-nav-item{
  width: 100%;
}
</style>
