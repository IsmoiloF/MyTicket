import { IsNotEmpty, IsString } from "class-validator";

export class CreateTicketTypeDto {
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly name:string;

    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly description:string;
}
