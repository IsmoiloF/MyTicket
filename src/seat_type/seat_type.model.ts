
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
  } from 'sequelize-typescript';
  
  interface Seat_TypeCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'seat_type' })
  export class Seat_Type extends Model<Seat_Type, Seat_TypeCreationAttrs> {
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
  }
  