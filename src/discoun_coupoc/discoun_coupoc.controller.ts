import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { adminGuard } from 'src/common/guards/admin.guard';
import { DiscounCoupocService } from './discoun_coupoc.service';
import { CreateDiscounCoupocDto } from './dto/create-discoun_coupoc.dto';
import { UpdateDiscounCoupocDto } from './dto/update-discoun_coupoc.dto';

@Controller('discoun-coupoc')
export class DiscounCoupocController {
  constructor(private readonly discounCoupocService: DiscounCoupocService) {}

  @UseGuards(adminGuard)
  @Post()

  create(@Body() createDiscounCoupocDto: CreateDiscounCoupocDto) {
    return this.discounCoupocService.create(createDiscounCoupocDto);
  }

  @UseGuards(adminGuard)
  @Get()
  findAll() {
    return this.discounCoupocService.findAll();
  }

  @UseGuards(adminGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.discounCoupocService.findOne(+id);
  }

  @UseGuards(adminGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateDiscounCoupocDto: UpdateDiscounCoupocDto) {
    return this.discounCoupocService.update(+id, updateDiscounCoupocDto);
  }
  
  @UseGuards(adminGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.discounCoupocService.remove(+id);
  }
}
