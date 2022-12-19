
import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCustomerAdressDto {

    @ApiProperty({example:'1',description:'id of customer_adress'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly customer_id:number

    @ApiProperty({example:'name1',description:'name of customer_adress'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly name:string

    @ApiProperty({example:'1',description:'id of country'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly country_id:number

    @ApiProperty({example:'1',description:'id of Region'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly region_id:number

    @ApiProperty({example:'1',description:'id of district'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly district_id:number

    @ApiProperty({example:'1',description:'id of street'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly street:string;  

    @ApiProperty({example:'Uy',description:'house of customer_adress'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly house:string;  

    @ApiProperty({example:'1',description:'id of flat'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly flat:number;  

    @ApiProperty({example:'location',description:'location of customer'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly location:string;

    @ApiProperty({example:'1',description:'post_index of customer_adress'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly post_index:string;

    @ApiProperty({example:'1',description:'info of customer_adress'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly info:string
}
