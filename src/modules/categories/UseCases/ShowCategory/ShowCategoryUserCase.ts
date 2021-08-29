import { ICategoryRepository } from '../../Protocols/ICategoryRepository';
import { IShowCategoryUserCase } from '../../Protocols/ShowCategory/IShowCategoryUserCase';
import { ICategory } from '../../Protocols/ICategories';


export class ShowCategoryUserCase implements IShowCategoryUserCase{
    constructor(private categoryRepository: ICategoryRepository){}
    async execute(id:string): Promise<ICategory>{
        const category=this.categoryRepository.findById(id)
        return category
    }
}