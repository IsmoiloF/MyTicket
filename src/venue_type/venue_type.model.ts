
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
    ForeignKey,
    HasMany
  } from 'sequelize-typescript';
import { Venue } from 'src/venue/venue.model';
  
  interface Venue_TypeCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'venue_type' })
  export class Venue_Type extends Model<Venue_Type, Venue_TypeCreationAttrs> {
    @Column({
      type: DataType.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    })
    id: number;

    @Column({
        type: DataType.STRING,
    })
    name: string;

    @ForeignKey(()=>Venue)
    @Column({
        type:DataType.INTEGER
    })
    venue_id:number


    @HasMany(()=>Venue)
    venue:Venue
  }
  