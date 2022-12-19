import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VenuePhotoService } from './venue_photo.service';
import { CreateVenuePhotoDto } from './dto/create-venue_photo.dto';
import { UpdateVenuePhotoDto } from './dto/update-venue_photo.dto';
import { Venue_Type } from 'src/venue_type/venue_type.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { adminGuard } from 'src/common/guards/admin.guard';
import { customerGuard } from 'src/common/guards/customer.guard';

@Controller('venue-photo')
export class VenuePhotoController {
  constructor(private readonly venuePhotoService: VenuePhotoService) {}

  @ApiOperation({summary:"VenuePhotoni post qilish"})
  @ApiResponse({status:201,type:Venue_Type})
  @UseGuards(adminGuard)
  @Post()
  create(@Body() createVenuePhotoDto: CreateVenuePhotoDto) {
    return this.venuePhotoService.create(createVenuePhotoDto);
  }

  @ApiOperation({summary:"VenuePhotlatni get qilish"})
  @ApiResponse({status:200,type:[Venue_Type]})
  @UseGuards(customerGuard)
  @Get()
  findAll() {
    return this.venuePhotoService.findAll();
  }

  @ApiOperation({summary:"VenuePhotoni get qilish"})
  @ApiResponse({status:200,type:Venue_Type})
  @UseGuards(customerGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venuePhotoService.findOne(+id);
  }

  @ApiOperation({summary:"VenuePhotoni patch qilish"})
  @ApiResponse({status:202,type:Venue_Type})
  @UseGuards(adminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenuePhotoDto: UpdateVenuePhotoDto) {
    return this.venuePhotoService.update(+id, updateVenuePhotoDto);
  }

  @ApiOperation({summary:"VenuePhotoni delete qilish"})
  @ApiResponse({status:203,type:Venue_Type})
  @UseGuards(adminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venuePhotoService.remove(+id);
  }
}
