
import {
    BelongsTo,
    ForeignKey,
    Column,
    DataType,
    Model,
    Table,
    HasMany,
  } from 'sequelize-typescript';
import { Seat_Type } from 'src/seat_type/seat_type.model';
import { Ticket } from 'src/ticket/ticket.model';
import { Venue } from 'src/venue/venue.model';
  
  interface SeatCreationAttrs {
    sector : number;
  }
  
  @Table({ tableName: 'seat' })
  export class Seat extends Model<Seat, SeatCreationAttrs> {
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.INTEGER,
    })
    sector: number;

    @Column({
        type: DataType.INTEGER,
  
    })
    row_number: number;

    @ForeignKey(()=>Venue)
    @Column({
        type: DataType.INTEGER,
    })
    venue_id: number;
    
    @BelongsTo(()=>Venue)
    venue:Venue

    @ForeignKey(()=>Seat_Type)
    @Column({
        type: DataType.INTEGER,

    })
    seat_type_id: number;

    @BelongsTo(()=>Seat_Type)
    seat_type: Seat_Type

    @Column({
        type: DataType.STRING,
    })
    location_in_schema: string;

    // @HasMany(()=> Ticket)
    // ticket:Ticket
  }
  