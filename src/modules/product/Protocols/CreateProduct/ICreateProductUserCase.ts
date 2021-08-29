import { IProduct } from './../IProduct';


export interface ICreateProductUserCase{
    execute({id,name,price,qtd,category_id}:IProduct):Promise<void>
}