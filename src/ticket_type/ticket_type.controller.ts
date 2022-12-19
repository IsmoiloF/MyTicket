import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { TicketTypeService } from './ticket_type.service';
import { CreateTicketTypeDto } from './dto/create-ticket_type.dto';
import { UpdateTicketTypeDto } from './dto/update-ticket_type.dto';
import { adminGuard } from 'src/common/guards/admin.guard';
import { customerGuard } from 'src/common/guards/customer.guard';

@Controller('ticket-type')
export class TicketTypeController {
  constructor(private readonly ticketTypeService: TicketTypeService) {}

  @UseGuards(customerGuard)
  @Post()
  create(@Body() createTicketTypeDto: CreateTicketTypeDto) {
    return this.ticketTypeService.create(createTicketTypeDto);
  }

  @UseGuards(customerGuard)
  @Get()
  findAll() {
    return this.ticketTypeService.findAll();
  }

  @UseGuards(customerGuard)

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.ticketTypeService.findOne(+id);
  }

  @UseGuards(customerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateTicketTypeDto: UpdateTicketTypeDto) {
    return this.ticketTypeService.update(+id, updateTicketTypeDto);
  }

  @UseGuards(customerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.ticketTypeService.remove(+id);
  }
}
