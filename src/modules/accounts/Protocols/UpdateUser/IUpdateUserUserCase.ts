import { IUser } from "../IUser";

export interface IUpdateUsersUserCase{
    execute({id,name,username,address,email,password,confirmPassword,isAdmin}:IUser): Promise<void>
}