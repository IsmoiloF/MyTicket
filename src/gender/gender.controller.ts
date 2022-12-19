import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { GenderService } from './gender.service';
import { CreateGenderDto } from './dto/create-gender.dto';
import { UpdateGenderDto } from './dto/update-gender.dto';
import { ApiOperation, ApiResponse } from '@nestjs/swagger';
import { Gender } from './gender.model';
import { adminGuard } from 'src/common/guards/admin.guard';
import { customerGuard } from 'src/common/guards/customer.guard';

@Controller('gender')
export class GenderController {
  constructor(private readonly genderService: GenderService) {}

  @ApiOperation({summary:"Genderni post qilish"})
  @ApiResponse({status:201,type:Gender})
  @UseGuards(customerGuard)
  @Post()
  create(@Body() createGenderDto: CreateGenderDto) {
    return this.genderService.create(createGenderDto);
  }


  @ApiOperation({summary:"Genderlarni get qilish"})
  @ApiResponse({status:200,type:[Gender]})
  @UseGuards(customerGuard)
  @Get()
  findAll() {
    return this.genderService.findAll();
  }

  @ApiOperation({summary:"Genderni get qilish"})
  @ApiResponse({status:200,type:Gender})
  @UseGuards(customerGuard)
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.genderService.findOne(+id);
  }

  @ApiOperation({summary:"Genderni put qilish"})
  @ApiResponse({status:202,type:Gender})
  @UseGuards(customerGuard)
  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGenderDto: UpdateGenderDto) {
    return this.genderService.update(+id, updateGenderDto);
  }

  @ApiOperation({summary:"Genderni delete qilish"})
  @ApiResponse({status:203,type:Gender})
  @UseGuards(customerGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.genderService.remove(+id);
  }
}
