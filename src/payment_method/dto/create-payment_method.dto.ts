import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreatePaymentMethodDto {
    @ApiProperty({example:'english',description:'name of language'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
    readonly name:string;

    @ApiProperty({example:'English language is the most common language in the world',description:'description of language'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
    readonly description:string;
}
