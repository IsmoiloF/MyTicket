
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerCartDto {
    @ApiProperty({example:'1',description:'id of customer'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly customer_id:number

    @ApiProperty({example:'uzcard',description:'name of customer_card'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly name:string

    @ApiProperty({example:'998907768899',description:'phone of customer'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly phone:string

    @ApiProperty({example:'5624309091293101',description:'number of card'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly number:string

    @ApiProperty({example:'2024',description:'year of card'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly year:string

    @ApiProperty({example:'12',description:'month of card'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly month:string;  

    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly is_active:boolean;  

    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly is_main:boolean;  
}
