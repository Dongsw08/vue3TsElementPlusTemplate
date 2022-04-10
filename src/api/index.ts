import { login } from '../mock/user'
import { loginParams } from '../mock/userTypes'
import { basicResponse } from '../mock/types'
import { getAllList, getListItemDetail } from '../mock/list'
import { queryTypes, detailQueryTypes } from '../mock/listTypes'
import { ElMessage } from 'element-plus'

const dealRes = (res:basicResponse<any>) => {
    if(res.code !== 200){
        ElMessage.warning({
            message:res.msg
        })

        return Promise.reject()
    }else{
        return Promise.resolve(res)
    }
}

export const api_login = async (params:loginParams) => {
    return  login(params).then(res => {
        return dealRes(res)
    })
}

export const api_getListData = async (params:queryTypes) => {
   return getAllList(params).then(res => {
        return dealRes(res)
    })
}

export const api_getDetail = async (params:detailQueryTypes) => {
    return getListItemDetail(params).then(res => {
        return dealRes(res)
    })
}
