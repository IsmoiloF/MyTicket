import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateSeatDto {
    @ApiProperty({example:'1',description:'id of sector'})
    @IsNumber()
    @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly sector:number;

    @ApiProperty({example:'2',description:'number of row'})
    @IsNumber()
    // @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly row_number:number;

    @IsNumber()
    // @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    // readonly number:number;

    @ApiProperty({example:'1',description:'id of venue'})
    @IsNumber()
    // @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly venue_id:number;

    @ApiProperty({example:'1',description:'id of seat_type'})
    @IsNumber()
    // @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly seat_type_id:number;

    @ApiProperty({example:'[x,y][100,1231]',description:'location_in_schema of location_in_schema'})
    // @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly location_in_schema:string;

}
