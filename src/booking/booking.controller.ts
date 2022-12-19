import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse, ApiTags } from '@nestjs/swagger';
import { adminGuard } from 'src/common/guards/admin.guard';
import { customerGuard } from 'src/common/guards/customer.guard';
import { isCreatorGuard } from 'src/common/guards/is_creator.guard';
import { Booking } from './booking.model';
import { BookingService } from './booking.service';
import { CreateBookingDto } from './dto/create-booking.dto';
import { UpdateBookingDto } from './dto/update-booking.dto';

@ApiTags()
@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @ApiOperation({ summary: "Bookingni qo'shish" })
  @ApiResponse({ status: 201, type: Booking })
  @UseGuards(adminGuard)
  @Post()
  create(@Body() createBookingDto: CreateBookingDto) {
    return this.bookingService.create(createBookingDto);
  }


  @ApiOperation({ summary: "Bookinglarni olish" })
  @ApiResponse({ status: 200, type: [Booking] })
  @UseGuards(customerGuard)
  @Get()
  findAll() {
    return this.bookingService.findAll();
  }

  @ApiOperation({ summary: "Booking olish" })
  @ApiResponse({ status: 200, type: [Booking] })
  @UseGuards(customerGuard)

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.bookingService.findOne(+id);
  }

  @ApiOperation({ summary: "Bookingni o'zgartirish" })
  @ApiResponse({ status: 203, type: Booking })
  @UseGuards(adminGuard)
  @Patch(':id')
  update(@Param('id') id: number, @Body() updateBookingDto: UpdateBookingDto) {
    return this.bookingService.update(+id, updateBookingDto);
  }

  @ApiOperation({ summary: "Bookingni o'chirish" })
  @ApiResponse({ status: 203, type: Booking })
  @UseGuards(adminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.bookingService.remove(+id);
  }
}
