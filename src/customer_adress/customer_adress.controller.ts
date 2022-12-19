import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { adminGuard } from 'src/common/guards/admin.guard';
import { customerGuard } from 'src/common/guards/customer.guard';
import { Customer_Adress } from './customer_adress.model';
import { CustomerAdressService } from './customer_adress.service';
import { CreateCustomerAdressDto } from './dto/create-customer_adress.dto';
import { UpdateCustomerAdressDto } from './dto/update-customer_adress.dto';

@Controller('customer-adress')
export class CustomerAdressController {
  constructor(private readonly customerAdressService: CustomerAdressService) {}

  @ApiOperation({summary:"Customer_adress post qilish"})
  @ApiResponse({status:201,type:Customer_Adress})
  @UseGuards(customerGuard)
  @Post()
  create(@Body() createCustomerAdressDto: CreateCustomerAdressDto) {
    return this.customerAdressService.create(createCustomerAdressDto);
  }

  @ApiOperation({summary:"Customer_adresslarni get qilish"})
  @ApiResponse({status:200,type:[Customer_Adress]})
  @UseGuards(customerGuard)
  @Get()
  findAll() {
    return this.customerAdressService.findAll();
  }

  @ApiOperation({summary:"Customer_adress get qilish"})
  @ApiResponse({status:200,type:Customer_Adress})
  @UseGuards(customerGuard)

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerAdressService.findOne(+id);
  }

  @ApiOperation({summary:"Customer_adress patch qilish"})
  @ApiResponse({status:202,type:Customer_Adress})
  @UseGuards(customerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerAdressDto: UpdateCustomerAdressDto) {
    return this.customerAdressService.update(+id, updateCustomerAdressDto);
  }

  @ApiOperation({summary:"Customer_adress delete qilish"})
  @ApiResponse({status:203,type:Customer_Adress})
  @UseGuards(customerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerAdressService.remove(+id);
  }
}
