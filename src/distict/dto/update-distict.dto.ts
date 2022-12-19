import { PartialType } from '@nestjs/swagger';
import { CreateDistictDto } from './create-distict.dto';

export class UpdateDistictDto extends PartialType(CreateDistictDto) {}
