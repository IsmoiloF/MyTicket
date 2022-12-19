import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerAdressDto } from './create-customer_adress.dto';

export class UpdateCustomerAdressDto extends PartialType(CreateCustomerAdressDto) {}
