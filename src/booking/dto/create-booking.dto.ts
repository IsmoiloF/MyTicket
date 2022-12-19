import { ApiProperty } from "@nestjs/swagger";
import { IsNotEmpty, IsString } from "class-validator";

export class CreateBookingDto {

    @ApiProperty({example:'1',description:'id of cart'})
    // @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
    readonly cart_id: number;

    @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
    readonly createdAt: Date;   

    @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
    readonly fineshed: Date;

    @ApiProperty({example:'1',description:'id of payment'})
    // @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
    readonly payment_method_id:number;

    @ApiProperty({example:'1',description:'id of delivery'})
    // @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
    readonly delivery_method_id:number

    @ApiProperty({example:'1',description:'id of discount'})
    // @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
    readonly discount_coupon_id:number;
    
    @ApiProperty({example:'1',description:'id of status'})
    // @IsNotEmpty({ message: "Bo'sh bo'lmasligi kerak" })
    readonly status_is:number;
}

