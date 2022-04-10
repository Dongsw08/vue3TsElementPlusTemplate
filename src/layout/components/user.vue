<template>
  <div class="user_out_wrap">
    <el-dropdown @command="onSelect">
      <div class="user_wrap">
        <el-avatar :size="40" :icon="UserFilled" />
        <span class="name"> {{ name }} </span>
      </div>
      <template #dropdown>
        <el-dropdown-menu>
          <el-dropdown-item command="logout">退出登录</el-dropdown-item>
        </el-dropdown-menu>
      </template>
    </el-dropdown>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs } from "vue";
import { UserFilled } from "@element-plus/icons-vue";
import { userInfo } from "@/mock/userTypes";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "User",
  setup() {
    const user = reactive<userInfo>(
      //@ts-ignore
      JSON.parse(localStorage.getItem("userInfo"))
    );

    const router = useRouter();

    const onSelect = (value: string) => {
      if (value === "logout") {
        localStorage.removeItem("userInfo");

        router.push("/login");
      }
    };

    return {
      UserFilled,
      ...toRefs(user),
      onSelect,
    };
  },
});
</script>

<style lang="scss" scoped>

.user_out_wrap{
    display: flex;
    align-items: center;
}
.user_wrap {
  display: flex;
  align-items: center;

  .name {
    font-size: 18px;
    margin-left: 20px;
  }
}
</style>