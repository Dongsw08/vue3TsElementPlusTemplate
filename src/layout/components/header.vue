<template>
    <div class="main" >
        <img class="logo" src="@/assets/logo.png" alt="">
        <div class="mid" >
            
        </div>
        <User />
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import User from './user.vue'

export default defineComponent({
    components:{
        User
    },
    setup() {
        
    },
})
</script>

<style lang="scss" scoped>
    .main{
        display: flex;
        width: 100%;
        justify-content: space-between;
        align-items: center;
        height: 100%;

        .logo{
            width: 40px;
            height: 40px;
        }

        .mid{
            flex: 1;
        }
    }
</style>
