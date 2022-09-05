<template>
  <div class="inner">
    <p class='bg_common'></p>
    <div class="images">
      <img src="/images/33.png" alt="">
      <img src="/images/333.png" alt="">
    </div>
  </div>
</template>

<script>
  export default {
      name: 'PageThree'
  }
</script>
<style scoped>
.inner {
    margin: auto;
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: flex-start;
    position: relative;
}

.images{
  margin:10rem 0rem ; 
}

.bg_common{
  position: relative;
  left: 0;
  top: 70%;
  background: url(//img1.liang520.com/vhuaboss/web/image/shapesh1.png) no-repeat;
  width: 30rem; 
  height: 30rem;
}
  
</style>