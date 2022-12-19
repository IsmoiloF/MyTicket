import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateVenueDto {
    @ApiProperty({example:'name1',description:'name of venue'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly name:string;

    @ApiProperty({example:'Adress1',description:'addres of venue'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly adress:string;

    @ApiProperty({example:'locatarsojsbakbfd',description:'location of venue'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly location:string;

    @ApiProperty({example:'site.com',description:'site of venue'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly site:string;

    @ApiProperty({example:'998 91 432 58 36',description:'phone of venue'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly phone:string;

    @ApiProperty({example:'1',description:'id of venue_type'})
    @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly venue_type_id:number;

    @ApiProperty({example:'x,u [1231],[x1322]',description:'shcema of venue'})
    @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly schema:string;

    @ApiProperty({example:'3',description:'id of region'})
    @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly region_id:number;

    @ApiProperty({example:'2',description:'id of district'})
    @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly district_id:number;  
}
