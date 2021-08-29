import { IDeleteUserUserCase } from "../../Protocols/DeleteUser/IDeleteUserUserCase";
import { IUserRepository } from "../../Protocols/IUserRepository";


export class DeleteUserUserCase implements IDeleteUserUserCase{
    constructor(private userRepository: IUserRepository){}
    async execute(id:string): Promise<void>{
        await this.userRepository.delete(id)
    }
}