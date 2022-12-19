
import {
    BelongsTo,
    ForeignKey,
    Column,
    DataType,
    Model,
    Table,
    HasOne,
  } from 'sequelize-typescript';
import { Booking } from 'src/booking/booking.model';
import { Customer } from 'src/customer/customer.model';
import { Status } from 'src/status/status.model';
import { Ticket } from 'src/ticket/ticket.model';
  
  interface CartCreationAttrs {
    fineshedAt : Date;
  }
  
  @Table({ tableName: 'cart' })
  export class Cart extends Model<Cart, CartCreationAttrs> {
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    id: number;

    @ForeignKey(()=>Ticket)
    @Column({
        type: DataType.INTEGER,
      })
      ticket_id: number;
      @BelongsTo(()=>Ticket)
      ticket:Ticket

  
    @ForeignKey(()=>Customer)
      @Column({
        type: DataType.INTEGER,
      })
      customer_id: number;
      @BelongsTo(()=>Customer)
      customer:Customer
  
    @Column({
      type: DataType.DATE,
      allowNull: false,
    })
    createdAt: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
      })
      fineshedAt: Date;

    @ForeignKey(()=>Status)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    status_id: number;
    @BelongsTo(()=>Status)
    status:Status

    // @HasOne(()=>Booking)
    // booking:Booking
  }
  