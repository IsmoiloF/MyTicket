import { IsNotEmpty, IsString } from "class-validator";

export class CreateDiscounCoupocDto {
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
    readonly name:string;
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
    readonly description:string;
}
