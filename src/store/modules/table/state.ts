import { ItemList } from '@/mock/listTypes'

export interface TableState{
    itemList:ItemList
}

export const state:TableState = {
    itemList:[]
}