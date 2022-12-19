
import {
    BelongsTo,
    HasMany,
    Column,
    DataType,
    Model,
    Table,
  } from 'sequelize-typescript';
import { Customer } from 'src/customer/customer.model';
import { Human_Category } from 'src/human_category/human_category.model';
  
  interface GenderCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'gender' })
  export class Gender extends Model<Gender, GenderCreationAttrs> {
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
  