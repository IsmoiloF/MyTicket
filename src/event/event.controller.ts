import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EventService } from './event.service';
import { CreateEventDto } from './dto/create-event.dto';
import { UpdateEventDto } from './dto/update-event.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { adminGuard } from 'src/common/guards/admin.guard';

@Controller('event')
export class EventController {
  constructor(private readonly eventService: EventService) {}

  @ApiOperation({summary:"Event post qilish"})
  @ApiResponse({status:201,type:Event})
  @UseGuards(adminGuard)
  @Post()
  create(@Body() createEventDto: CreateEventDto) {
    return this.eventService.create(createEventDto);
  }

  @ApiOperation({summary:"Eventlarni get qilish"})
  @ApiResponse({status:200,type:[Event]})
  @UseGuards(adminGuard)
  @Get()
  findAll() {
    return this.eventService.findAll();
  }

  @ApiOperation({summary:"Eventni get qilish"})
  @ApiResponse({status:200,type:Event})
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventService.findOne(+id);
  }

  @ApiOperation({summary:"Event patch qilish"})
  @ApiResponse({status:202,type:Event})
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventDto: UpdateEventDto) {
    return this.eventService.update(+id, updateEventDto);
  }

  @ApiOperation({summary:"Event delete qilish"})
  @ApiResponse({status:203,type:Event})
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventService.remove(+id);
  }
}
