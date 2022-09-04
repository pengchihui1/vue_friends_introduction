<template>
    <div class="footer" style="height: 100vh;">
        <div class="ab p5">
          <div class="inner">
            <div class="top">
              <em></em>
              <div class="mibile">
                <div class="home">
                  <div class="scroll">
                    <!-- <img src="/img1.liang520.com/vhuaboss/web/image/appHome20210918.png" alt=""> -->
                  </div>
                </div>
              </div>
              <div class="loadApp">
                <!-- <img class="page4font" src="/img1.liang520.com/vhuaboss/web/image/20210918page4font.png" alt=""> -->
                <div class="load">
                  <!-- <img src="./image/logo_app.png" alt=""> -->
                  <div class="links">
                    <a class="indexImg" href="./download.php" target="_blank"></a>
                    <a class="indexImg" href="./download.php" target="_blank"></a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="bottom">
            <div class="content">

              <div class="left">
                <div class="tabbar">
                  <a href="javascript:void(0)">下载爱聊</a>
                  <a href="/company/">公司简介</a>
                  <a href="/aboutAiLiao/">关于我们</a>
                  <a href="/contactUs/">联系我们</a>
                  <a href="//m.pinlian520.com/antiFraud/">防骗指南</a>
                </div>
                <p>Copyright 2012-2022 All Rights Reserved.</p>
                <p>深圳市爱聊科技有限公司 版权所有</p>
                <p>增值电信业务经营许可证：<span id="licence">粤B2-20130201</span></p>
                <p><span>开发者：深圳市爱聊科技有限公司</span></p>
                <p><span style="display: flex;height: 0.21rem;"> 版本：爱聊V<span id="edition">5.6.0</span>
                    &nbsp;&nbsp;&nbsp;<a style="margin: 0;" href="https://www.pinlian520.com/privacy/jurisdiction.html">权限</a>
                    &nbsp;| &nbsp;<a style="margin: 0;" href="https://m.pinlian520.com/policy/privacy.html">隐私</a>
                  </span></p>
                <!-- <p>网络文化经营许可证：粤网文（2020）1559-088号</p> -->
                <p><a href="http://beian.miit.gov.cn" target="_blank" id="id_ICP">ICP备案号：粤ICP备12092958号</a>
                  <a target="_blank" id="identifier" href="http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=44030502000923">粤公网安备：44030502000923号</a>
                </p>
              </div>
              <div class="right">
                <h2>关注我们</h2>
                <div class="links">
                  <div class="wx">
                    <i class="indexImg"></i>
                    <span>爱聊公众号</span>
                  </div>
                  <a class="web" href="https://weibo.com/5478033882" target="_blank">
                    <i class="indexImg"></i>
                    <span>爱聊微博</span>
                  </a>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
</template>

<script>

import { mapState } from 'vuex'

export default {

    data(){
        return{
            currentAuthor: []
        }
    },
    computed: {
        ...mapState([
      'authors',
    ])},
    methods:{
        showDetails(author){
            this.currentAuthor = author;
        }
    }

}
</script>