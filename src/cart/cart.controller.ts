import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { adminGuard } from 'src/common/guards/admin.guard';
import { customerGuard } from 'src/common/guards/customer.guard';
import { Cart } from './cart.model';
import { CartService } from './cart.service';
import { CreateCartDto } from './dto/create-cart.dto';
import { UpdateCartDto } from './dto/update-cart.dto';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @ApiOperation({summary:"Cart qo'shish"})
  @ApiResponse({status:201,type:Cart})
  @UseGuards(customerGuard)
  @Post()
  create(@Body() createCartDto: CreateCartDto) {
    return this.cartService.create(createCartDto);
  }

  @ApiOperation({summary:"Cartlarni olish"})
  @ApiResponse({status:200,type:[Cart]})
  @UseGuards(customerGuard)
  @Get()
  findAll() {
    return this.cartService.findAll();
  }

  @ApiOperation({summary:"Cartni olish"})
  @ApiResponse({status:201,type:Cart})
  @UseGuards(customerGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.cartService.findOne(+id);
  }


  @ApiOperation({summary:"Cart update qilish"})
  @ApiResponse({status:201,type:Cart})
  @UseGuards(customerGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateCartDto: UpdateCartDto) {
    return this.cartService.update(+id, updateCartDto);
  }

  @ApiOperation({summary:"Cart delete qilish"})
  @ApiResponse({status:201,type:Cart})
  @UseGuards(customerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.cartService.remove(+id);
  }
}
