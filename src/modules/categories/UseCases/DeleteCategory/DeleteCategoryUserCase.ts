import { ICategoryRepository } from '../../Protocols/ICategoryRepository';
import { ICategory } from '../../Protocols/ICategories';
import { IDeleteCategoryUserCase } from '../../Protocols/IDeleteCategory/IDeleteCategoryUserCase';


export class DeleteCategoryUserCase implements IDeleteCategoryUserCase{
    constructor(private categoryRepository: ICategoryRepository){}
    async execute(id:string): Promise<void>{
        await this.categoryRepository.delete(id)
    }
}