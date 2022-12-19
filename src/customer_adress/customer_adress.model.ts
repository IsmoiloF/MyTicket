
import {
    BelongsTo,
    Column,
    ForeignKey,
    DataType,
    Model,
    Table,
  } from 'sequelize-typescript';
import { Country } from 'src/country/country.model';
import { Customer } from 'src/customer/customer.model';
import { District } from 'src/distict/distickt.model';
import { Region } from 'src/region/region.model';
  
  interface Customer_AdressCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'customer_adress' })
  export class Customer_Adress extends Model<Customer_Adress, Customer_AdressCreationAttrs> {
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    id: number;

    @ForeignKey(()=>Customer)
    @Column({
        type: DataType.INTEGER,
    
    })
    customer_id: number;
    @BelongsTo(()=>Customer)
    customer:Customer

    @Column({
        type: DataType.STRING,

    })
    name: string;

    @ForeignKey(()=>Country)
    @Column({
        type: DataType.INTEGER,
   
    })
    country_id: number;
    @BelongsTo(()=>Country)
    country:Country


    @ForeignKey(()=>Region)
    @Column({
        type: DataType.INTEGER,
   
    })
    region_id: number;
    @BelongsTo(()=>Region)
    region:Region

    @ForeignKey(()=>District)
    @Column({
        type: DataType.INTEGER,

    })
    district_id: number;
    @BelongsTo(()=>District)
    district:District

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    street: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    house: string;

    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    flat: number;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    location: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    post_index: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
      })
      info: string;
  }
  