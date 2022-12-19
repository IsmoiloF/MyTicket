
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
    HasOne,
  } from 'sequelize-typescript';
import { Booking } from 'src/booking/booking.model';
  
  interface DistrictCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'district' })
  export class District extends Model<District, DistrictCreationAttrs> {
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
  