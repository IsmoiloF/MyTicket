import { Module } from '@nestjs/common';
import { LangService } from './lang.service';
import { LangController } from './lang.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Lang } from './lang.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Lang]), JwtModule.register({})],
  controllers: [LangController],
  providers: [LangService]
})
export class LangModule {}
