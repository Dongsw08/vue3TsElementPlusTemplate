<template>
    <el-page-header class="page_header" content="详情"  @back="goBack" />

    <el-descriptions border title="商品详情">
    <el-descriptions-item label="名称">
        {{ detailData.title }}
    </el-descriptions-item>
    <el-descriptions-item label="已售">
        {{ detailData.sold }}
    </el-descriptions-item>
    <el-descriptions-item label="库存">
        {{ detailData.remain }}
    </el-descriptions-item>
    <el-descriptions-item label="描述">
      {{ detailData.description }}
    </el-descriptions-item>
    >
  </el-descriptions>

  <el-button @click="goBack" class="back_button" >返回</el-button>
</template>

<script lang="ts">
import { defineComponent, ref, reactive, onMounted, watch, toRefs } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Item } from '@/mock/listTypes'
import { api_getDetail } from '@/api/index'

interface state{
    detailData:Partial<Item>
}

export default defineComponent({
    setup() {
        const route = useRoute()
        const router = useRouter()
        
        const uuid = ref(route.query.uuid)

        // const detailData = reactive<Partial<Item>>({})

        const state = reactive<state>({
            detailData:{}
        })

        const goBack = () => {
            router.back()
        }

        onMounted(() => {
            if(uuid.value && typeof uuid.value === 'string'){
                api_getDetail({uuid:uuid.value}).then(res => {
                    state.detailData = res.data
                })
            }
        })

        return {
            goBack,
            uuid,
            ...toRefs(state)
        }
    },
})
</script>

<style lang="scss" scoped>
.page_header{
    margin-bottom: 40px;
}

.back_button{
    margin-top: 40px;
}
</style>
