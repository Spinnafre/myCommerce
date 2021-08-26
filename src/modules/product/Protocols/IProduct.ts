export interface IProduct{
    id?: string,
    name: string,
    price: number,
    created_at?:Date,
    updated_at?:Date,
    category_id?:string
}   