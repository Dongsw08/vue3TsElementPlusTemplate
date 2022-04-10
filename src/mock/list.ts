import { ItemList, queryTypes, detailQueryTypes } from './listTypes'
import { basicResponse } from './types'
import listData from './list.json'

const allListData: ItemList = listData

export const getAllList = async ({ title }:queryTypes) => {

    if(title){
        const data = allListData.filter(el => {
            return Boolean(el.title.match(new RegExp(title, 'ig')))
        })

        const res: basicResponse<ItemList> = {
            code: 200,
            data: data
        }
    
        return res
    }else{
        return {
            code: 200,
            data: allListData
        }
    }
}

export const getListItemDetail = async ({ uuid }:detailQueryTypes ) => {
    if(!uuid){
        return {
            code:400,
            msg:'请求错误'
        }
    }

    const data = allListData.find(el => el.uuid === uuid)

    if(!data){
        return {
            code:400,
            msg:'数据不存在'
        }
    }

    return {
        code:200,
        data:data
    }

}