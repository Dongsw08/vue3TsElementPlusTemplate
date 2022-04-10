<template>
  <div class="container">
    <el-container class="container_inner">
      <el-header class="header">
        <Header />
      </el-header>
      <el-container>
        <el-aside class="aside" width="200px">
          <el-menu v-if="routes.length"  :default-active="activeIndex" class="menu"  >
              <MenuItem :routes="routes" ></MenuItem>
        </el-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from "vue";
import { useRouter } from "vue-router";
import  MenuItem  from './components/menuItem.vue'
import Header from './components/header.vue'

export default defineComponent({
    components:{
        MenuItem,
        Header
    },

  setup() {
    const router = useRouter();
    console.log(router.options.routes);

    const allRoutes = router.options.routes

    const layoutRoutes = allRoutes.find(el => el.name === 'Layout')

    const routes = layoutRoutes && layoutRoutes.children && layoutRoutes.children.length ? ref(layoutRoutes.children) : ref([]);

    // const routes =  reactive(layoutRoutes.children)

    const activeIndex = ref("1");

    return {
      routes,
      activeIndex
    };
  },
});
</script>

<style lang="scss" scoped>
.header {
  border-bottom: 1px solid #dcdfe6;
}

.menu {
  height: 100%;
}

.container {
  height: 100%;

  .container_inner {
    height: 100%;
  }
}
</style>
