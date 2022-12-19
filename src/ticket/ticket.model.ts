
import { ApiProperty } from '@nestjs/swagger';
import {
    BelongsTo,
    Column,
    DataType,
    Model,
    Table,
    ForeignKey,
    HasMany,
    
  } from 'sequelize-typescript';
import { Cart } from 'src/cart/cart.model';
import { Event } from 'src/event/event.model';
import { Seat } from 'src/seat/seat.model';
import { Status } from 'src/status/status.model';
import { Ticket_Type } from 'src/ticket_type/ticket_type.model';
  
  interface TicketCreationAttrs {
    status : number;
  }
  
  @Table({ tableName: 'ticket' })
  export class Ticket extends Model<Ticket, TicketCreationAttrs> {
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    id: number;

    @ForeignKey(()=> Event)
    @Column({
        type: DataType.INTEGER,
    })
    event_id: number;

    @BelongsTo(()=>Event)
    event:Event

    @ForeignKey(()=> Seat)
    @Column({
        type:DataType.INTEGER
    })
    seat_id:number;
    
    @ApiProperty({example:'20',description:'price of ticket'})
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    price:number;

    @ApiProperty({example:'30',description:'price of ticket'})
    @Column({
        type:DataType.INTEGER,
        allowNull:false
    })
    service_fee:number;

   @ForeignKey(()=> Status)
   @Column({
    type:DataType.INTEGER
   })
   status_id:number
    
    @ForeignKey(()=> Ticket_Type)
    @Column({
        type:DataType.INTEGER
    })
    ticket_type:number;

    @BelongsTo(()=>Ticket_Type)
    tickettype:Ticket_Type;  

    @BelongsTo(()=> Seat)
    seat:Seat

    @HasMany(()=> Cart)
    cart:Cart
  }
  