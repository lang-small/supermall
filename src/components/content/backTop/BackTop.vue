<template>
<div class="back-top" @click="backClick">
  <img src="~assets/img/back-top.png">
</div>
</template>

<script>
export default {
  name: "BackTop"
}
</script>

<style scoped>
.back-top{
  position: fixed;
  right: 10px;
  bottom: 60px;
}
.back-top img{
  width: 43px;
  height: 43px;
}
</style>
