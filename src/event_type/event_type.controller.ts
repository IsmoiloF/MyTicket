import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { CreateEventTypeDto } from './dto/create-event_type.dto';
import { UpdateEventTypeDto } from './dto/update-event_type.dto';
import { adminGuard } from 'src/common/guards/admin.guard';

@Controller('event-type')
export class EventTypeController {
  constructor(private readonly eventTypeService: EventTypeService) {}

  @UseGuards(adminGuard)
  @Post()
  create(@Body() createEventTypeDto: CreateEventTypeDto) {
    return this.eventTypeService.create(createEventTypeDto);
  }

  @UseGuards(adminGuard)
  @Get()
  findAll() {
    return this.eventTypeService.findAll();
  }

  @UseGuards(adminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.eventTypeService.findOne(+id);
  }

  @UseGuards(adminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateEventTypeDto: UpdateEventTypeDto) {
    return this.eventTypeService.update(+id, updateEventTypeDto);
  }

  @UseGuards(adminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.eventTypeService.remove(+id);
  }
}
