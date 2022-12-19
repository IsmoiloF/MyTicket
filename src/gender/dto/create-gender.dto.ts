import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateGenderDto {
    @ApiProperty({example:'male',description:'gender of people'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
    readonly name:string;

    @ApiProperty({example:'female',description:'gender of people'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
    readonly description:string
}
