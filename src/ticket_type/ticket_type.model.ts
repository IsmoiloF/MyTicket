
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
  } from 'sequelize-typescript';
  
  interface TicketTCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'ticket_type' })
  export class Ticket_Type extends Model<Ticket_Type, TicketTCreationAttrs> {
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
  