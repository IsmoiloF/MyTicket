import { Module } from '@nestjs/common';
import { DiscounCoupocService } from './discoun_coupoc.service';
import { DiscounCoupocController } from './discoun_coupoc.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Discoun_Coupoc } from './discoun_coupon.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Discoun_Coupoc]), JwtModule.register({})],
  controllers: [DiscounCoupocController],
  providers: [DiscounCoupocService]
})
export class DiscounCoupocModule {}
