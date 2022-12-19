import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { PaymentMethodService } from './payment_method.service';
import { CreatePaymentMethodDto } from './dto/create-payment_method.dto';
import { UpdatePaymentMethodDto } from './dto/update-payment_method.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Payment_Method } from './payment_method.model';
import { adminGuard } from 'src/common/guards/admin.guard';

@Controller('payment-method')
export class PaymentMethodController {
  constructor(private readonly paymentMethodService: PaymentMethodService) {}

  @ApiOperation({summary:"PaymentMethodni post qilish"})
  @ApiResponse({status:201,type:Payment_Method})
  @UseGuards(adminGuard)
  @Post()
  create(@Body() createPaymentMethodDto: CreatePaymentMethodDto) {
    return this.paymentMethodService.create(createPaymentMethodDto);
  }

  @ApiOperation({summary:"PaymentMethodlarnini get qilish"})
  @ApiResponse({status:200,type:[Payment_Method]})
  @UseGuards(adminGuard)
  @Get()
  findAll() {
    return this.paymentMethodService.findAll();
  }

  @ApiOperation({summary:"PaymentMethodni get qilish"})
  @ApiResponse({status:200,type:Payment_Method})
  @UseGuards(adminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.paymentMethodService.findOne(+id);
  }


  @ApiOperation({summary:"PaymentMethodni put qilish"})
  @ApiResponse({status:202,type:Payment_Method})
  @UseGuards(adminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updatePaymentMethodDto: UpdatePaymentMethodDto) {
    return this.paymentMethodService.update(+id, updatePaymentMethodDto);
  }

  @ApiOperation({summary:"PaymentMethodni delete qilish"})
  @ApiResponse({status:203,type:Payment_Method})
  @UseGuards(adminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.paymentMethodService.remove(+id);
  }
}
