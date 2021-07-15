<template>

<div class="tab-bar-item" @click="itemClick">
 <div v-if="!isActive"> <slot name="item-icon"></slot></div>
  <div v-else> <slot name="item-icon-active"></slot></div>
  <div :style="activeStyle"> <slot name="item-text"></slot></div>
</div>
</template>

<script>
export default {
  name: "TabBarItem",
  props:{
    path: String,
    activeColor: {
      type :String,
      default: 'red'

    }
  },
  data(){
    return{
      // isActive :true

    }
  },
  computed:{
    isActive(){
      //不等于-1的时候表示找到了，isActive=true
      return this.$route.path.indexOf(this.path) !==-1
    },
    activeStyle(){
      return this.isActive?{color:this.activeColor} :{}
    }
  },
  methods :{
    itemClick(){
     this.$router.replace(this.path).catch(()=>{});

    }
  }
}
</script>

<style scoped>


</style>
