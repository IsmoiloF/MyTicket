import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SeatService } from './seat.service';
import { CreateSeatDto } from './dto/create-seat.dto';
import { UpdateSeatDto } from './dto/update-seat.dto';
import { Seat } from './seat.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { adminGuard } from 'src/common/guards/admin.guard';
import { customerGuard } from 'src/common/guards/customer.guard';

@Controller('seat')
export class SeatController {
  constructor(private readonly seatService: SeatService) {}

  @ApiOperation({summary:"Seatni post qilish"})
  @ApiResponse({status:201,type:Seat})
  @UseGuards(customerGuard)
  @Post()
  create(@Body() createSeatDto: CreateSeatDto) {
    console.log(13)
    return this.seatService.create(createSeatDto);
  }

  @ApiOperation({summary:"Seatlarni get qilish"})
  @ApiResponse({status:200,type:[Seat]})
  @UseGuards(customerGuard)
  @Get()
  findAll() {
    return this.seatService.findAll();
  }

  @ApiOperation({summary:"Seatni get qilish"})
  @ApiResponse({status:200,type:Seat})
  @UseGuards(customerGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seatService.findOne(+id);
  }

  @ApiOperation({summary:"Seatni patch qilish"})
  @ApiResponse({status:202,type:Seat})
  @UseGuards(customerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateSeatDto: UpdateSeatDto) {
    return this.seatService.update(+id, updateSeatDto);
  }

  @ApiOperation({summary:"Seatni delete qilish"})
  @ApiResponse({status:203,type:Seat})
  @UseGuards(customerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.seatService.remove(+id);
  }
}
