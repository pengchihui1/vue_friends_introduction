<template>
  <div>
    <div class="title" @click="handleClick">
      <!-- 标题 -->
      <a href="javascript:void(0)" style="user-select: none">{{
        item.meta.title
      }}</a>
      <!-- 箭头符号 -->
      <svg class="icon" viewBox="0 0 1024 1024" width="16" height="16">
        <path
          d="M472.064 751.552 72.832 352.32c-22.08-22.08-22.08-57.792 0-79.872 22.016-22.016 57.792-22.08 79.872 0L512 631.744l359.296-359.296c22.016-22.016 57.792-22.08 79.872 0 22.08 22.08 22.016 57.792 0 79.872l-399.232 399.232C529.856 773.568 494.144 773.568 472.064 751.552z"
          fill="#999999"
        />
      </svg>
    </div>
    <div v-show="expanded" class="children">
      <template v-for="itemX in item.children">
        <sub-menu
          v-if="itemX.children && itemX.children.length > 1"
          :item="itemX"
          :base-path="resolvePath(itemX.path)"
          :key="itemX.path"
        />
        <menu-item
          v-else
          :path="resolvePath(itemX.path)"
          :title="itemX.meta.title"
          :key="itemX.path"
        />
      </template>
    </template>
  </div>
</template>

<script>
import path from "path";
import MenuItem from "./MenuItem";

export default {
  components: { MenuItem },
  name: "sub-menu", // 一定要写 name，不然递归调用自己会报错
  inject: ["rootMenu"],
  props: {
    item: {
      // route object
      type: Object,
      required: true,
    },
    basePath: {
      // 上级 path
      type: String,
      default: "",
    },
  },
  data() {
    return {};
  },
  computed: {
    // 是否展开
    expanded() {
      return this.rootMenu.openedSubMenus.includes(this.basePath);
    },
  },
  methods: {
    // 将 routePath 和 basePath 拼接起来
    resolvePath(routePath) {
      return path.resolve(this.basePath, routePath);
    },
    // 处理展开收起事件
    handleClick() {
      this.rootMenu.handleClickSubMenu(this.basePath);
    },
  },
};
</script>

<style scoped>
.title {
  padding: 20px;
  color: rgb(153, 153, 153);
}

.title:hover {
  background: rgb(244, 244, 244);
}

.children {
  padding-left: 20px;
  background: rgb(244, 244, 244);
}

.icon {
  float: right;
  color: #999999;
}
</style>