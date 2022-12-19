import { PartialType } from '@nestjs/swagger';
import { CreateDeliverMethodDto } from './create-deliver_method.dto';

export class UpdateDeliverMethodDto extends PartialType(CreateDeliverMethodDto) {}
