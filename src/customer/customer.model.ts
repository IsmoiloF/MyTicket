import { BelongsTo, Column, DataType, ForeignKey, HasMany, HasOne, Model, Table } from "sequelize-typescript";
import {ApiProperty} from '@nestjs/swagger'
import { Gender } from "src/gender/gender.model";
import { Cart } from "src/cart/cart.model";
import { Customer_Adress } from "src/customer_adress/customer_adress.model";
import { Customer_Cart } from "src/customer_cart/customer_cart.model";
import { Lang } from "src/lang/lang.model";


@Table({tableName:'customer'})

export class Customer extends Model<Customer>{

    @ApiProperty({example:'1',description:'Unique ID'})
    @Column({
        type:DataType.INTEGER,
        unique:true,
        autoIncrement:true,
        primaryKey:true
    })
    id:number;

    @ApiProperty({example:'Name1',description:'name of customer'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    first_name:string;

    @ApiProperty({example:'lastName1',description:'Lastname of customer'})
    @Column({
        type:DataType.STRING,
        allowNull:false
    })
    last_name:string;

    @ApiProperty({example:'+998 91 432 58 36',description:'phone number  of customer'})
    @Column({
        type:DataType.STRING
    })
    phone:string;

    @ApiProperty({example:'**********',description:'hashed password of customer'})
    @Column({
        type:DataType.STRING
    })
    hashed_password:string;

    @ApiProperty({example:'name@email.com',description:'email  of customer'})
    @Column({
        type:DataType.STRING
    })
    email:string;

    @ApiProperty({example:'14.10.2022',description:'birth_date of customer'})
    @Column({
        type:DataType.DATE
    })
    birth_date:Date;

    @ForeignKey(()=> Gender)
    @Column({
        type:DataType.INTEGER
    })
    gender:number;

    @ForeignKey(()=> Lang)
    @Column({
        type:DataType.INTEGER
    })
    lang_id:number;

    @ApiProperty({example:'**********',description:'hashed token of customer'})
    @Column({
        type:DataType.STRING
    })
    hashed_refresh_token:string;


}
