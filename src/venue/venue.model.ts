
import {
    BelongsTo,
    ForeignKey,
    Column,
    DataType,
    Model,
    Table,
    HasMany,
  } from 'sequelize-typescript';
import { District } from 'src/distict/distickt.model';
import { Region } from 'src/region/region.model';
import { Seat } from 'src/seat/seat.model';
import { Venue_Type } from 'src/venue_type/venue_type.model';
  
  interface VenueCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'venue' })
  export class Venue extends Model<Venue, VenueCreationAttrs> {
        @Column({
            type: DataType.INTEGER,
            unique: true,
            autoIncrement: true,
            primaryKey: true,
        })
        id: number;
      
        @Column({
              type: DataType.STRING,
              unique: true,
        })
          name: string;

        @Column({
            type: DataType.STRING,
            unique: true,
        })
        adress: string;

        @Column({
            type: DataType.STRING,
            unique: true,
        })
        location: string;

        @Column({
            type: DataType.STRING,
            unique: true,
        })
        site: string;

        @Column({
            type: DataType.STRING,
            unique: true,
        })
        phone: string;

        @ForeignKey(()=>Venue_Type)
        @Column({
            type:DataType.INTEGER
        })
        venue_type_id:number
    
        @BelongsTo(()=>Venue_Type)
        venuetype:Venue_Type;

        @Column({
            type: DataType.STRING,
        })
        schema: string;

        @ForeignKey(()=>Region)
        @Column({
            type:DataType.INTEGER
        })
        region_id:number
    
        @BelongsTo(()=>Region)
        region:Region;

        @ForeignKey(()=>District)
        @Column({
            type:DataType.INTEGER
        })
        district_id:number
       
        @BelongsTo(()=>District)
        user:District;
    
        @HasMany(()=> Seat)
        seat:Seat
  }
  