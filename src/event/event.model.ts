
import {
    BelongsTo,
    Column,
    DataType,
    Model,
    Table,
    ForeignKey,
    HasMany,
  } from 'sequelize-typescript';
import { Event_Type } from 'src/event_type/event_type.model';
import { Human_Category } from 'src/human_category/human_category.model';
import { Lang } from 'src/lang/lang.model';
import { Ticket } from 'src/ticket/ticket.model';
import { Venue } from 'src/venue/venue.model';
  
  interface EventCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'event' })
  export class Event extends Model<Event, EventCreationAttrs> {
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
    photo: string;

    @Column({
        type: DataType.DATE,
    })
    start_date: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    start_time: Date;

    @Column({
        type: DataType.DATE,
 
    })
    finish_date: Date;

    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    finish_time: Date;

    @Column({
        type: DataType.STRING,
        allowNull: false,
    })
    info: string;

    @ForeignKey(()=>Event_Type)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    event_type_id: number;
    @BelongsTo(()=>Event_Type)
    event_type:Event_Type

    @ForeignKey(()=>Human_Category)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    human_category_id: number;
    @BelongsTo(()=>Human_Category)
    human_category:Human_Category

    @ForeignKey(()=>Venue)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    venue_id: number;
    @BelongsTo(()=>Venue)
    venue:Venue

    @ForeignKey(()=>Lang)
    @Column({
        type: DataType.INTEGER,
        allowNull: false,
    })
    lang_id: number;
    @BelongsTo(()=>Lang)
    lang:Lang


    @Column({
        type: DataType.DATE,
        allowNull: false,
    })
    release_date: Date;

  }
  