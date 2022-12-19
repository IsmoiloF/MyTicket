import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { VenueService } from './venue.service';
import { CreateVenueDto } from './dto/create-venue.dto';
import { UpdateVenueDto } from './dto/update-venue.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Venue } from './venue.model';
import { customerGuard } from 'src/common/guards/customer.guard';
import { adminGuard } from 'src/common/guards/admin.guard';

@Controller('venue')
export class VenueController {
  constructor(private readonly venueService: VenueService) {}

  @ApiOperation({summary:"Venueni post qilish"})
  @ApiResponse({status:201,type:Venue})
  @UseGuards(adminGuard)
  @Post()
  create(@Body() createVenueDto: CreateVenueDto) {
    return this.venueService.create(createVenueDto);
  }

  @ApiOperation({summary:"Venuelarni get qilish"})
  @ApiResponse({status:200,type:Venue})
  // @UseGuards(customerGuard)
  @Get()
  findAll() {
    return this.venueService.findAll();
  }

  @ApiOperation({summary:"Venueni get qilish"})
  @ApiResponse({status:200,type:Venue})
  // @UseGuards(customerGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.venueService.findOne(+id);
  }

  @ApiOperation({summary:"Venueni patch qilish"})
  @ApiResponse({status:202,type:Venue})
  @UseGuards(adminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateVenueDto: UpdateVenueDto) {
    return this.venueService.update(+id, updateVenueDto);
  }


  @ApiOperation({summary:"Venueni delete qilish"})
  @ApiResponse({status:203,type:Venue})
  @UseGuards(adminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.venueService.remove(+id);
  }
}
