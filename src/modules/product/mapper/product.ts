import { Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from "typeorm";
import {v4 as uuid4} from 'uuid'
import { Category } from "../../categories/mapper/categories";
import { IProduct } from "../Protocols/IProduct";
@Entity('products')
export class Product implements IProduct{
    @PrimaryColumn()
    id:string
    @Column()
    name:string
    @Column()
    price:number
    @ManyToOne(type=>Category,products=>Product)
    category:Category
    @CreateDateColumn()
    created_at:Date
    constructor(){
        if(!this.id){
            this.id=uuid4()
        }
    }

}