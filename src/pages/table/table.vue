<template>
  <div class="main">
    <el-form :model="queryForm" :inline="true" @submit.prevent>
      <el-form-item label="名称">
        <el-input
          v-model="queryForm.title"
          placeholder="只支持全词匹配"
        ></el-input>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" native-type="submit" @click="onSubmit"
          >提交</el-button
        >
      </el-form-item>
      <el-form-item>
        <el-button @click="onReset">重置</el-button>
      </el-form-item>
    </el-form>

    <el-table :data="tableData">
      <el-table-column prop="title" label="名称"></el-table-column>
      <el-table-column prop="description" label="描述"></el-table-column>
      <el-table-column prop="remain" label="库存"></el-table-column>
      <el-table-column prop="sold" label="已出售"></el-table-column>
      <el-table-column label="操作">
        <template #default="scope">
          <router-link :to="`/table/detail?uuid=${scope.row.uuid}`">
            <el-button> 详情 </el-button>
          </router-link>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, computed } from "vue";
import { useStore } from "@/store/index";

export default defineComponent({
  setup() {
    const store = useStore();

    const tableData = computed(() => store.state.table.itemList);

    const queryForm = reactive({
      title: "",
    });

    const onSubmit = () => {
      // console.log(queryForm);
      getListData();
    };

    const onReset = () => {
      queryForm.title = "";
      getListData();
    };

    const getListData = () => {
      store.dispatch("table/getListData", queryForm);
    };

    onMounted(() => {
      if (!tableData.value.length) {
        getListData();
      }
    });

    return {
      queryForm,
      onSubmit,
      tableData,
      onReset,
    };
  },
});
</script>

<style lang="scss" scoped>
</style>
