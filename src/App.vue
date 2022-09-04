<template>
  <div id="app">
    <Header></Header>
    <video class="home__bg" width="100%" height="100%" autoplay="" loop="" muted="" src="https://cdn.51lm.tv/resource/web/site/background.mp4" style="height:100%; width: 100%;"></video>
     <router-view/>
    <Footer></Footer>
  </div>
</template>

<script>
  
import Header from './components/Header' // import the Header component
import Footer from './components/Footer' // import the Footer component

  export default {

    components:{
      Header,
      Footer
    }
  }
  
</script>



