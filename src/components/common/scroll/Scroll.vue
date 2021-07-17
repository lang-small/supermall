<template>
<!--  滑动效果-->

<!--  ref如果绑定在组件中，那么通过this.$refs.refname获取到的就是一个组件对象，
如果ref绑定在普通的元素中，那么通过this.$refs.refname获取到的是一个元素对象

-->
<div class="wapper" ref="wapper">
  <div class="content">
  <slot></slot>
  </div>
</div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "Scroll",
  props:{
    //父组件传过来是否要实时监听坐标
    probeType:{
      type:Number,
      default:0
    },
    //上拉加载更多
    pullUpLoad:{
      type:Boolean,
      default: false
    }
  },
  data(){
    return{
      scroll:null
    }
  },
  mounted() {
    this.scroll=new BScroll(this.$refs.wapper,{
      //使用上面传过来的probeType来决定是否要实时监听
      probeType:this.probeType,
      //设置可以使用监听事件
      click:true,
      pullUpLoad: this.pullUpLoad,
      observeDOM:true

    }),

      this.scroll.on('scroll',(position)=>{
        //时打印坐标
      //  console.log(position);
        //自定义事件，向父组件传自己的坐标值
        this.$emit('scroll',position)
      }),
     this.scroll.refresh();
      //监听上拉事件
    this.scroll.on('pullingUp',()=>{
     this.$emit('pullingUp')
    })


  },
  methods:{
    scrollTo(x,y,time=300){
      this.scroll.scrollTo(x,y,time)

    },
    //调用better-scroll里面的finishPullUp
    finishPullUp(){
      this.scroll.finishPullUp()
    },
    getScrollY(){
      return this.scroll? this.scroll.y:0
    }
  }
}
</script>

<style scoped>

</style>
