
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
    HasOne,
  } from 'sequelize-typescript';
import { Booking } from 'src/booking/booking.model';
  
  interface DeliverMCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'deliver-method' })
  export class Deliver_Method extends Model<Deliver_Method, DeliverMCreationAttrs> {
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


  }
  