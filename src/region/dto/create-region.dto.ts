import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateRegionDto {
    @ApiProperty({example:'name1',description:'name of region'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
    readonly name:string;

    
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
    readonly description:string
}
