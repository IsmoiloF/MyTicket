import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { adminGuard } from 'src/common/guards/admin.guard';
import { customerGuard } from 'src/common/guards/customer.guard';
import { Customer_Cart } from './customer_cart.model';
import { CustomerCartService } from './customer_cart.service';
import { CreateCustomerCartDto } from './dto/create-customer_cart.dto';
import { UpdateCustomerCartDto } from './dto/update-customer_cart.dto';

@Controller('customer-cart')
export class CustomerCartController {
  constructor(private readonly customerCartService: CustomerCartService) {}

  @ApiOperation({summary:"Customer_card post qilish"})
  @ApiResponse({status:201,type:Customer_Cart})
  @UseGuards(customerGuard)
  @Post()
  create(@Body() createCustomerCartDto: CreateCustomerCartDto) {
    return this.customerCartService.create(createCustomerCartDto);
  }

  @ApiOperation({summary:"Customer_card get qilish"})
  @ApiResponse({status:200,type:[Customer_Cart]})
  @UseGuards(customerGuard)
  @Get()
  findAll() {
    return this.customerCartService.findAll();
  }

  @ApiOperation({summary:"Customer_card get qilish"})
  @ApiResponse({status:200,type:Customer_Cart})
  @UseGuards(customerGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.customerCartService.findOne(+id);
  }

  @ApiOperation({summary:"Customer_card patch qilish"})
  @ApiResponse({status:202,type:Customer_Cart})
  @UseGuards(customerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateCustomerCartDto: UpdateCustomerCartDto) {
    return this.customerCartService.update(+id, updateCustomerCartDto);
  }

  @ApiOperation({summary:"Customer_card delete qilish"})
  @ApiResponse({status:203,type:Customer_Cart})
  @UseGuards(customerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.customerCartService.remove(+id);
  }
}
