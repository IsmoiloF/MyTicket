import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateHumanCategoryDto {
    @ApiProperty({example:'1',description:'name of human-category'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly name:string

    @ApiProperty({example:'7',description:'The youngest age for event'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly start_age:number

    @ApiProperty({example:'70',description:'The oldest age for event'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly finish_age:number

    @ApiProperty({example:'1',description:'foreign key of genderTable'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly gender:number
}
