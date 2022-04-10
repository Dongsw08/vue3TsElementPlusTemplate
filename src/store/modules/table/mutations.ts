import { MutationTree } from 'vuex'
import { TableState } from './state'

export const mutations : MutationTree<TableState> = {
    setListData(state, payload){
        state.itemList = payload
    },
    clearListData(state, payload){
        state.itemList = []
    }
}