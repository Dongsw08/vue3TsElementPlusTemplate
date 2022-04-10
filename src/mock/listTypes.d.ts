export type Item = {
    uuid:string,
    title:string,
    remain:number,
    description:string,
    status:number,
    sold:number,
}

export type ItemList = Array<Item>

export interface queryTypes {
    title?:string
}

export interface detailQueryTypes {
    uuid:string
}