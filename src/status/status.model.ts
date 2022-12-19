
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
    HasMany,
  } from 'sequelize-typescript';
import { Booking } from 'src/booking/booking.model';
import { Cart } from 'src/cart/cart.model';
import { Ticket } from 'src/ticket/ticket.model';
  
  interface StatusCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'status' })
  export class Status extends Model<Status, StatusCreationAttrs> {
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
      })
      name: string;

      @Column({
        type: DataType.STRING,
      })
      description: string;

      @HasMany(()=> Cart)
      cart:Cart
  
      @HasMany(()=> Booking)
      Booking:Cart
  
      @HasMany(()=> Ticket)
      ticket:Cart
  }
  