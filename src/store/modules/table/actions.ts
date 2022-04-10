import { api_getListData } from '@/api'
import { ActionContext } from 'vuex'
import { TableState } from './state'
import { RootState } from '../../index'

export const actions = {
    getListData({ commit, state } : ActionContext<TableState,RootState>, params:any){
        api_getListData(params).then(res => {
                const { data } = res

                commit('setListData', data)
        })
    }
}