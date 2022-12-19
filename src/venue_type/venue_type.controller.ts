import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VenueTypeService } from './venue_type.service';
import { CreateVenueTypeDto } from './dto/create-venue_type.dto';
import { UpdateVenueTypeDto } from './dto/update-venue_type.dto';
import { Venue } from 'src/venue/venue.model';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { customerGuard } from 'src/common/guards/customer.guard';
import { adminGuard } from 'src/common/guards/admin.guard';

@Controller('venue-type')
export class VenueTypeController {
  constructor(private readonly venueTypeService: VenueTypeService) {}

  @ApiOperation({summary:"Venueni post qilish"})
  @ApiResponse({status:201,type:Venue})
  @UseGuards(adminGuard)
  @Post()
  create(@Body() createVenueTypeDto: CreateVenueTypeDto) {
    return this.venueTypeService.create(createVenueTypeDto);
  }

  @ApiOperation({summary:"Venuelarni get qilish"})
  @ApiResponse({status:200,type:Venue})
  @UseGuards(customerGuard)
  @Get()
  findAll() {
    return this.venueTypeService.findAll();
  }

  @ApiOperation({summary:"Venueni get qilish"})
  @ApiResponse({status:200,type:Venue})
  @UseGuards(customerGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueTypeService.findOne(+id);
  }

  @ApiOperation({summary:"Venueni patch qilish"})
  @ApiResponse({status:202,type:Venue})
  @UseGuards(adminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueTypeDto: UpdateVenueTypeDto) {
    return this.venueTypeService.update(+id, updateVenueTypeDto);
  }

  @ApiOperation({summary:"Venueni delete qilish"})
  @ApiResponse({status:203,type:Venue})
  @UseGuards(adminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueTypeService.remove(+id);
  }
}
