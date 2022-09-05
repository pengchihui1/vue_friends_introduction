<template>
  <div class="inner">
    <video class="video" 
     width="100%" 
     height="100%" 
     autoplay="" 
     loop=""
     muted="" 
     src="https://cdn.51lm.tv/resource/web/site/background.mp4" 
     style="width: 100%;height: 100%;"
     ></video> 
  </div>
</template>

<script>
  export default {
      name: 'PageVideo'
  }
</script>
<style scoped>
.inner {
    margin: 0 auto;
    padding: 0;
    width: 100%;
    height: 100%;
  
}

video{
      width: 100%;
      object-fit:fill;
}
</style>