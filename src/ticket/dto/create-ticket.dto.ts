import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateTicketDto {
    @ApiProperty({example:'1',description:'id of event'})
    @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly event_id:number;

    @ApiProperty({example:'1',description:'id of seat'})
    @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly seat_id:number;

    @ApiProperty({example:'10.000',description:'price'})
    @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly price:number;

    @ApiProperty({example:'25.000',description:'service_fee'})
    @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly service_fee:number;

    @ApiProperty({example:'1',description:'id of status'})
    @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly status:number;

    @ApiProperty({example:'1',description:'id of tickettype'})
    @IsNotEmpty({message:"Bo'sh bo'lmasligi kerak"})
    readonly ticket_type:number;
}
