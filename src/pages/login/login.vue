<template>
  <div class="main">
    <el-card class="box-card">
      <template v-slot:header>
        <div class="card-header">登录</div>
      </template>
      <el-form class="login_form" label-width="80px" :model="loginForm" @submit.prevent >
        <el-form-item label="用户名">
          <el-input v-model="loginForm.username" placeholder="admin" />
        </el-form-item>
        <el-form-item label="密码">
          <el-input v-model="loginForm.password" type="password" show-password placeholder="admin" />
        </el-form-item>
            <el-button class="login_button" type="primary" @click="onSubmit" native-type="submit"  >登录</el-button>
      </el-form>
    </el-card>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, } from "vue";
import { useRouter } from 'vue-router'
import { loginParams } from '@/mock/userTypes'
import { api_login } from '@/api/index'

export default defineComponent({
  setup() {
    const loginForm = reactive<loginParams>({
      username: "",
      password: "",
    });

    const router = useRouter()

    const onSubmit = () => {
        api_login(loginForm).then(res => {
            console.log(res)
            const { data } = res

            localStorage.setItem('userInfo', JSON.stringify(data) )

            router.push('/table')
        })
    }



    return {
      loginForm,
      onSubmit
    };
  },
});
</script>

<style lang="scss" scoped>
.main {
  height: 100%;
  width: 100%;
  background: #eeeeee;
  display: flex;
  justify-content: center;
  align-items: center;
}

.box-card {
  width: 500px;
}

.card-header {
  text-align: center;
}

.login_form {
  width: 100%;
}

.login_button{
    width: 100%;
}
</style>
