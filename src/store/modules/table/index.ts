import { state, TableState } from './state'
import { actions } from './actions'
import { Module } from 'vuex'
import { RootState } from '../../index'
import { mutations } from './mutations'

export const table : Module<TableState,RootState> = {
    namespaced:true,
    state,
    actions,
    mutations
}