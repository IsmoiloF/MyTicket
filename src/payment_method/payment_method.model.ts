
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
    HasOne,
  } from 'sequelize-typescript';
import { Booking } from 'src/booking/booking.model';
  
  interface PaymentMCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'payment-method' })
  export class Payment_Method extends Model<Payment_Method, PaymentMCreationAttrs> {
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

      @HasOne(() => Booking)
      booking:Booking
  }
  