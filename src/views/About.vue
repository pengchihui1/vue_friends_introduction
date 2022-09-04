<template>
 <div>
  <div class="content">
    <h1><i><b>联系我们</b></i></h1>
    <div class="inner">
      <div class="left">
        <div class="line">
          <p>深圳市爱聊科技有限公司</p>
        </div>
        <div class="line">
          <p>深圳市南山区深南大道大冲商务中心（华润城）A座</p>
        </div>
        <div class="line">
          <p>邮政编码：518000</p>
        </div>
        <div class="line">
          <p>联系电话：4001551810</p>
        </div>
        <div class="line">
          <p>客服QQ：800882886</p>
        </div>
      </div>
      <div class="right">
        <div class="coordinate"><i></i></div>
      </div>
    </div>
    <div class="contact">
      <div class="item">
        <i></i>
        <div class="info">
          <p>用户反馈：</p>
          <p>user@iicall.com</p>
        </div>
      </div>
      <div class="item">
        <i></i>
        <div class="info">
          <p>商务合作：</p>
          <p>bd@iicall.com</p>
        </div>
      </div>
      <div class="item">
        <i></i>
        <div class="info">
          <p>媒体对接：</p>
          <p>pr@iicall.com</p>
        </div>
      </div>
    </div>
    <!-- <div class="hide">
      <img src="//img1.liang520.com/vhuaboss/web/image/icon_contact_check_1.png" alt="">
      <img src="//img1.liang520.com/vhuaboss/web/image/icon_contact_check_2.png" alt="">
      <img src="//img1.liang520.com/vhuaboss/web/image/icon_contact_check_3.png" alt="">
    </div> -->
  </div>
 </div>
</template>
 
<script>
  
  export default {
    name: 'About',
  }
</script>
<style scoped>
.content h1 {
    font-size: 0.38rem;
    color: #404040;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 1rem;
}

.content {
    width: 14.4rem;
    margin: auto;
    padding: 0.8rem 0 0.9rem;
}

.content .inner .right {
    width: 8.04rem;
    height: 3.04rem;
    margin-right: 0.6rem;
    background: url(/map.png) no-repeat center center;
    background-size: 100%;
    position: relative;
}
</style>