import { IProduct } from './../IProduct';
export interface IUpdateProductUseCase{
    execute({id,name,price,qtd,category_id}:IProduct):Promise<void>
}