import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty } from "class-validator";

export class CreateCartDto {

    @ApiProperty({example:'1',description:'id of ticket'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly ticket_id:number

    @ApiProperty({example:'1',description:'id of customer'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly customer_id:number

    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly createdAt:Date;

    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly fineshedAt:Date;

    @ApiProperty({example:'1',description:'id of status'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly status_id:number
}
