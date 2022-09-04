<template >
<div >
  <div>
    <full-page :options="options" ref="fullpage">
      <div class="section">
        <h3>vue-fullpage.js</h3>
      </div>
      <div class="section">
        <div class="slide">
          <h3>Slide 2.1</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.2</h3>
        </div>
        <div class="slide">
          <h3>Slide 2.3</h3>
        </div>
      </div>
      <div class="section">
        <h3>Section 3</h3>
      </div>
    </full-page>
  </div>
</div>

</template>

<script>
  export default {
    name: 'home',
    data() {
            return {
                options: {
                    licenseKey: "OPEN-SOURCE-GPLV3-LICENSE",
                    //是否显示导航，默认为false
                    navigation: true,
                    //为每个section设置背景色
                    sectionsColor: [
                        "#41b883",
                        "#ff5f45",
                        "#0798ec",
                        "#fec401",
                        "#1bcee6",
                        "#ee1a59",
                        "#2c3e4f",
                        "#ba5be9",
                        "#b4b8ab"
                    ],
                }
            }
        },
        methods: {
            next() {
                // 向下滚动一页
                this.$refs.fullpage.api.moveSectionDown();
            }
        }
  }
</script>

<style scoped>

</style>

