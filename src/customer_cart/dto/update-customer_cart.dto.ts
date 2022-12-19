import { PartialType } from '@nestjs/mapped-types';
import { CreateCustomerCartDto } from './create-customer_cart.dto';

export class UpdateCustomerCartDto extends PartialType(CreateCustomerCartDto) {}
