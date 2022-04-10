<template>
    <template v-for="(route, index) in routes" :key="route.path">
        <el-sub-menu v-if="route && route.meta && route.meta.showName && route.children && route.children.length"  :index="preIndex + String(index)" :title="route.meta.showName" >
                      <el-menu-item-group>
                          <MenuItem :routes="route.children" >
                          </MenuItem>
                      </el-menu-item-group>
        </el-sub-menu>
        <el-menu-item v-else-if="route && route.meta && route.meta.showName" :index="preIndex + String(index)" >
            <span> {{route.meta.showName}} </span>
        </el-menu-item>
    </template>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue'
import { RouteRecordRaw } from 'vue-router'

export default defineComponent({
    name:'MenuItem',
    props:{
        routes:{
            type: Object as PropType<Array<RouteRecordRaw>>,
            required: true
        },
        preIndex:{
            type: String || undefined,
            required: false
        }
    },
    setup(props) {
        console.log(props)
        return {
            ...props,
            preIndex: props.preIndex ? props.preIndex + '-' : ''
        }
    },
})
</script>


