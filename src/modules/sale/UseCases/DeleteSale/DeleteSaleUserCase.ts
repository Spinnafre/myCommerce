import { IDeleteSaleUseCase } from '../../Protocols/IDeleteSale/IDeleteSaleUseCase';
import { ISalesRepository } from '../../Protocols/ISalesRepository';


export class DeleteSaleUserCase implements IDeleteSaleUseCase{
    constructor(private saleRepository:ISalesRepository){}
    async execute(id:string):Promise<void>{
        await this.saleRepository.delete(id)

    }
}