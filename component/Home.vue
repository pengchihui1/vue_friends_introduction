<template>
  <!-- 全局不知 -->
  <Layout />
</template>
<script>
import Loading from "./Loading.vue";
import Layout from "./Layout.vue";
export default {
  name: "Home",
  data() {
    return {
      isLogouting: false,
    };
  },
  components: {
    Loading,
    Layout,
  },
  computed: {},
  methods: {},
};
</script>

<style scoped>
.info {
  background: #fff;
  width: 100%;
  height: 600px;
  color: #2c3e50;
  text-align: center;
  padding-top: 170px;
}
</style>
