import { Module } from '@nestjs/common';
import { EventTypeService } from './event_type.service';
import { EventTypeController } from './event_type.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event_Type } from './event_type.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[(SequelizeModule.forFeature([Event_Type])), JwtModule.register({})],
  controllers: [EventTypeController],
  providers: [EventTypeService]
})
export class EventTypeModule {}
