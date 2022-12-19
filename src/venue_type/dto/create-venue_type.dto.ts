import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateVenueTypeDto {
    @ApiProperty({example:'name1',description:'name of venue-type'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly name:string
}
