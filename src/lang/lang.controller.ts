import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { LangService } from './lang.service';
import { CreateLangDto } from './dto/create-lang.dto';
import { UpdateLangDto } from './dto/update-lang.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Lang } from './lang.model';
import { adminGuard } from 'src/common/guards/admin.guard';
import { customerGuard } from 'src/common/guards/customer.guard';

@Controller('lang')
export class LangController {
  constructor(private readonly langService: LangService) {}

  @ApiOperation({summary:"Languageni post qilish"})
  @ApiResponse({status:201,type:Lang})
  @UseGuards(customerGuard)
  @Post()
  create(@Body() createLangDto: CreateLangDto) {
    return this.langService.create(createLangDto);
  }

  @ApiOperation({summary:"Languagelarni get qilish"})
  @ApiResponse({status:200,type:[Lang]})
  @UseGuards(customerGuard)
  @Get()
  findAll() {
    return this.langService.findAll();
  }

  @ApiOperation({summary:"Languageni get qilish"})
  @ApiResponse({status:200,type:Lang})
  @UseGuards(customerGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.langService.findOne(+id);
  }

  @ApiOperation({summary:"Languageni put qilish"})
  @ApiResponse({status:202,type:Lang})
  @UseGuards(customerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateLangDto: UpdateLangDto) {
    return this.langService.update(+id, updateLangDto);
  }


  @ApiOperation({summary:"Languageni delete qilish"})
  @ApiResponse({status:203,type:Lang})
  @UseGuards(customerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.langService.remove(+id);
  }
}
