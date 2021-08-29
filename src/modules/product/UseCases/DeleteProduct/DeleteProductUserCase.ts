import { IProductRepository } from '../../Protocols/IProductRepository';
import { IDeleteProductUseCase } from '../../Protocols/IDeleteProduct/IDeleteProductUseCase';


export class DeleteProductUserCase implements IDeleteProductUseCase{
    constructor(private productRepository:IProductRepository){}
    async execute(id:string):Promise<void>{
        await this.productRepository.delete(id)

    }
}