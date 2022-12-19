import { PartialType } from '@nestjs/swagger';
import { CreateDiscounCoupocDto } from './create-discoun_coupoc.dto';

export class UpdateDiscounCoupocDto extends PartialType(CreateDiscounCoupocDto) {}
