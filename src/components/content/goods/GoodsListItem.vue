<template>
<div class="goods-item">
  <img :src="goodsItem.show.img" alt="" @load="imageLoad">
<div class="goods-info">
  <p>{{goodsItem.title}}</p>
  <span class="price">{{goodsItem.price}}</span>
<!--  <img src="~assets/img/home/collect_icon.png">-->
  <span class="collect">收藏{{goodsItem.cfav}}</span>
</div>
</div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props:{
    goodsItem:{
      type:Object,
      default(){
        return []
      }
    }
  },
  // methods:{
  //   imageLoad(){
  //    // 事件总线，在这里发射出去，然后在Home那边监听
  //     console.log('-----------------')
  //    this.bus.$emit('itemImageLoad')
  //   }
  // }
}
</script>

<style scoped>

.goods-item{
  padding-bottom: 40px;
  position: relative;
  width: 48%;
}
.goods-item img{
  width: 100%;
  border-radius: 5px;
}
.goods-info{
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}
.goods-info p{
  overflow: hidden;
  /*太多文字后面显示...*/
  text-overflow: ellipsis;
  /*段落中的文本不换行*/
  white-space: nowrap;
  margin-top: 3px;
}
.goods-info .collect{
  position: relative;
}
.goods-info .collect::before{
  content: '';
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;

}

.price{
  color: red;
}

/*.goods-list-item {*/
/*  width: 49%;*/
/*  height: auto;*/
/*  padding-top: 6px;*/
/*  font-size: 14px;}*/

/*.goods-list-img{*/
/*  width: 100%;*/
/*  height: auto;*/
/*  border-radius: 4px;*/
/*}*/
/*.goods-list-price {*/
/*  display: flex;*/
/*  justify-content: space-between;*/
/*  margin: 6px 0;}*/

/*.collect-icon {*/
/*  display: inline-block;*/
/*  width: 20px;*/
/*  height: 20px;*/
/*  background: url('~assets/img/home/collect_icon.png') no-repeat;*/
/*  background-size: cover;*/
/*  vertical-align: bottom;*/
/*}*/

</style>
