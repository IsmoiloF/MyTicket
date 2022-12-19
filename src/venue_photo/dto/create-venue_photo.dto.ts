import { ApiProperty } from "@nestjs/swagger"
import { IsNotEmpty, IsString } from "class-validator"

export class CreateVenuePhotoDto {
    @ApiProperty({example:'name1',description:'name of venue-photo'})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly object_id:number

    @ApiProperty({example:'2',description:'id of venue'})
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly url:string
}
