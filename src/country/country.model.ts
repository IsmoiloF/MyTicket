
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
    HasMany,
  } from 'sequelize-typescript';
import { Customer_Adress } from 'src/customer_adress/customer_adress.model';
  
  interface CountryCreationAttrs {
    fineshedAt : Date;
  }
  
  @Table({ tableName: 'country' })
  export class Country extends Model<Country, CountryCreationAttrs> {
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
  