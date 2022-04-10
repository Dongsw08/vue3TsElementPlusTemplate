import { loginParams, userInfo } from './userTypes'
import { basicResponse } from './types'

export const login = async (params: loginParams): Promise<basicResponse<userInfo>> => {
    const { username, password } = params

    if (!username) {
        return {
            code: 400,
            msg: '请填写用户名'
        }
    }

    if(!password){
        return {
            code: 400,
            msg: '请填写密码'
        }
    }

    if(username !== 'admin'){
        return {
            code: 400,
            msg: '用户不存在'
        }
    }

    if(username !== 'admin' && password !== '123456'){
        return {
            code: 400,
            msg: '密码错误'
        }
    }

    return {
        code: 200,
        data: {
            name: '管理员',
            role: 2
        }
    }
}