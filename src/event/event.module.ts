import { Module } from '@nestjs/common';
import { EventService } from './event.service';
import { EventController } from './event.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Event } from './event.model';
import { Ticket } from 'src/ticket/ticket.model';
import { JwtModule } from '@nestjs/jwt';

@Module({
  imports:[SequelizeModule.forFeature([Event, Ticket]), JwtModule.register({})],
  controllers: [EventController],
  providers: [EventService]
})
export class EventModule {}
