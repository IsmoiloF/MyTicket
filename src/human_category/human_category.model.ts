
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
  } from 'sequelize-typescript';
  
  interface Human_CategoryCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'human_category' })
  export class Human_Category extends Model<Human_Category, Human_CategoryCreationAttrs> {
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
        type: DataType.INTEGER,
    })
    start_age: number;

    @Column({
        type: DataType.INTEGER,

    })
    finish_age: number;

    @Column({
        type: DataType.INTEGER,
    })
    gender: number;
  }
  