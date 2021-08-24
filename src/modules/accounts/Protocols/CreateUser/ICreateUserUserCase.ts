import { IUser } from "../IUser";

export interface ICreateUserUserCase{
    execute({id,name,username,address,email,password,isAdmin}:IUser):Promise<void>
}