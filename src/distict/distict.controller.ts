import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { adminGuard } from 'src/common/guards/admin.guard';
import { District } from './distickt.model';
import { DistictService } from './distict.service';
import { CreateDistictDto } from './dto/create-distict.dto';
import { UpdateDistictDto } from './dto/update-distict.dto';

@Controller('distict')
export class DistictController {
  constructor(private readonly distictService: DistictService) {}

  @ApiOperation({summary:"District post qilish"})
  @ApiResponse({status:200,type:District})
  @UseGuards(adminGuard)
  @Post()
  create(@Body() createDistictDto: CreateDistictDto) {
    return this.distictService.create(createDistictDto);
  }

  @ApiOperation({summary:"District get qilish"})
  @ApiResponse({status:200,type:[District]})
  @UseGuards(adminGuard)
  @Get()
  findAll() {
    return this.distictService.findAll();
  }

  @ApiOperation({summary:"District get qilish"})
  @ApiResponse({status:202,type:District})
  @UseGuards(adminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.distictService.findOne(+id);
  }

  @ApiOperation({summary:"District put qilish"})
  @ApiResponse({status:202,type:District})
  @UseGuards(adminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDistictDto: UpdateDistictDto) {
    return this.distictService.update(+id, updateDistictDto);
  }

  @ApiOperation({summary:"District delete qilish"})
  @ApiResponse({status:203,type:District})
  @UseGuards(adminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.distictService.remove(+id);
  }
}
