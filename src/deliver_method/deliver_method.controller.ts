import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { adminGuard } from 'src/common/guards/admin.guard';
import { Deliver_Method } from './deliver.method.model';
import { DeliverMethodService } from './deliver_method.service';
import { CreateDeliverMethodDto } from './dto/create-deliver_method.dto';
import { UpdateDeliverMethodDto } from './dto/update-deliver_method.dto';

@Controller('deliver-method')
export class DeliverMethodController {
  constructor(private readonly deliverMethodService: DeliverMethodService) {}

  @ApiOperation({summary:"DeliveryMethod post qilish"})
  @ApiResponse({status:201,type:Deliver_Method})
  @UseGuards(adminGuard)
  @Post()
  create(@Body() createDeliverMethodDto: CreateDeliverMethodDto) {
    return this.deliverMethodService.create(createDeliverMethodDto);
  }

  @ApiOperation({summary:"DeliveryMethodlarni get qilish"})
  @ApiResponse({status:200,type:[Deliver_Method]})
  @UseGuards(adminGuard)
  @Get()
  findAll() {
    return this.deliverMethodService.findAll();
  }

  @ApiOperation({summary:"DeliveryMethodni get qilish"})
  @ApiResponse({status:200,type:Deliver_Method})
  @UseGuards(adminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.deliverMethodService.findOne(+id);
  }

  @ApiOperation({summary:"DeliveryMethodlarni patch qilish"})
  @ApiResponse({status:202,type:Deliver_Method})
  @UseGuards(adminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDeliverMethodDto: UpdateDeliverMethodDto) {
    return this.deliverMethodService.update(+id, updateDeliverMethodDto);
  }

  @ApiOperation({summary:"DeliveryMethodlarni delete qilish"})
  @ApiResponse({status:203,type:Deliver_Method})
  @UseGuards(adminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.deliverMethodService.remove(+id);
  }
}
