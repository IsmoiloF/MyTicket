
import {
    BelongsTo,
    Column,
    DataType,
    Model,
    Table,
    ForeignKey,
  } from 'sequelize-typescript';
import { Customer } from 'src/customer/customer.model';
  
  interface Customer_CartCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'customer_cart' })
  export class Customer_Cart extends Model<Customer_Cart, Customer_CartCreationAttrs> {
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

    @Column({
        type: DataType.STRING,
    })
    phone: string;

    @Column({
        type: DataType.STRING,

    })
    number: string;

    @Column({
        type: DataType.STRING,
    })
    year: string;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    month: string;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    is_active: boolean;

    @Column({
        type: DataType.BOOLEAN,
        allowNull: false,
    })
    is_main: boolean;
  }
  