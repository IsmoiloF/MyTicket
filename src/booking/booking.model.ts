
import { Stats } from 'fs';
import {
    BelongsTo,
    ForeignKey,
    Column,
    DataType,
    Model,
    Table,
  } from 'sequelize-typescript';
import { Cart } from 'src/cart/cart.model';
import { Deliver_Method } from 'src/deliver_method/deliver.method.model';
import { Discoun_Coupoc } from 'src/discoun_coupoc/discoun_coupon.model';
import { Payment_Method } from 'src/payment_method/payment_method.model';
import { Status } from 'src/status/status.model';
  
  interface BookingCreationAttrs {
    fineshed : Date;
  }
  
  @Table({ tableName: 'booking' })
  export class Booking extends Model<Booking, BookingCreationAttrs> {
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    id: number;

    @ForeignKey(()=>Cart)
    @Column({
        type: DataType.INTEGER,
      })
      cart_id: number;

      @BelongsTo(()=> Cart)
      cart:Cart
  
    @Column({
      type: DataType.DATE,
      allowNull: false,
    })
    createdAt: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
      })
      fineshed: Date;
  
    @ForeignKey(()=>Payment_Method)
    @Column({
      type: DataType.INTEGER,
      allowNull: false,
    })
    payment_method_id: number;

    @BelongsTo(()=>Payment_Method)
    payment_method:Payment_Method
  
    @ForeignKey(()=>Deliver_Method)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
      })
      delivery_method_id: number;

      @BelongsTo(()=>Deliver_Method)
      delivery_method:Deliver_Method
  
    @ForeignKey(()=>Discoun_Coupoc)
      @Column({
        type: DataType.INTEGER,
        allowNull: false,
      })
      discount_coupon_id: number;
      
      @BelongsTo(()=>Discoun_Coupoc)
      discoun_coupoc:Discoun_Coupoc

    @ForeignKey(()=>Status)
      @Column({
        type: DataType.INTEGER,
        allowNull: false,
      })
      status_id: number;
      @BelongsTo(()=>Status)
      status:Status
  }
  