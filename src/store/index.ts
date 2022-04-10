import { createStore, Store, createLogger, useStore as baseUseStore } from 'vuex'
import { TableState } from './modules/table/state'
import { InjectionKey } from 'vue'
import { table } from './modules/table'

// Plug in logger when in development environment
const debug = process.env.NODE_ENV !== 'production'
const plugins = debug ? [createLogger({})] : []


export interface RootState {
  table:TableState
}

export const key: InjectionKey<Store<RootState>> = Symbol('thekey')

export const store = createStore({
  modules:{
    table
  },
  plugins
})

export function useStore() {
  return store
}