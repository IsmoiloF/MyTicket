import { IsNotEmpty, IsString } from "class-validator";

export class CreateEventTypeDto {
    @IsString({message:"String bo'lishi kerak"})
    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly name:string

    @IsNotEmpty({message:"bo'sh bo'lmasligi kerak"})
    readonly parent_event_type_id:number
}
