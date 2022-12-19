import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator"

export class CreateEventDto {

    @ApiProperty({example:'name1',description:'name of event'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly name:string

    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly photo:string

    @ApiProperty({example:"200-01-30",description:'start_date of event'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly start_date:Date

    @ApiProperty({example:'14:00',description:'start_time of event'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly start_time:Date;


    @ApiProperty({example:'2022-01-31',description:'finish_date of event'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly finish_date:Date;  

    @ApiProperty({example:'19:00',description:'finish_time of event'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly finish_time:Date;  

    @ApiProperty({example:'Info1',description:'info of event'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly info:string;  

    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly event_type_id:number;  

    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly human_category_id:number; 

    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly venue_id:number; 

    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly lang_id:number;    

    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly release_date:Date;  
}
