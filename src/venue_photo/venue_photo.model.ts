
import {
    BelongsTo,
    Column,
    DataType,
    Model,
    Table,
    ForeignKey,
  } from 'sequelize-typescript';
import { Venue } from 'src/venue/venue.model';
  
  interface Venue_PhotoCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'venue_photo' })
  export class Venue_Photo extends Model<Venue_Photo, Venue_PhotoCreationAttrs> {
    @Column({
      type: DataType.INTEGER,
      unique: true,
      autoIncrement: true,
      primaryKey: true,
    })
    id: number;

    @ForeignKey(()=>Venue)
    @Column({
        type: DataType.INTEGER,
    })
    object_id: number;

    @BelongsTo(()=>Venue)
    venue:Venue

    @Column({
        type: DataType.STRING,
    })
    url: string;
  }
  