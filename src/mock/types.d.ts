
declare interface resonseWithData<T> {
    code:number,
    msg?:never,
    data?:T
}

declare interface responseWithMsg {
    code:number,
    msg?:string,
    data?:never
}

// export interface basicResponse<T> {
//     code:number,
//     msg?:string,
//     data?:T
// }

export declare type basicResponse<T> = resonseWithData<T> | responseWithMsg

