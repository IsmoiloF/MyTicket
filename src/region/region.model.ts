
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
    HasMany,
  } from 'sequelize-typescript';
import { Ticket } from 'src/ticket/ticket.model';
  
  interface RegionCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'region' })
  export class Region extends Model<Region, RegionCreationAttrs> {
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

      // @HasMany(()=> Ticket)
      // ticket:Ticket
  }
  