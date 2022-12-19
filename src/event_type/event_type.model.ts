
import {
    BelongsTo,
    ForeignKey,
    Column,
    DataType,
    Model,
    Table,
  } from 'sequelize-typescript';
  
  interface Event_TypeCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'event_type' })
  export class Event_Type extends Model<Event_Type, Event_TypeCreationAttrs> {
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

    @ForeignKey(()=>Event_Type)
    @Column({
        type: DataType.INTEGER,
    })
    parent_event_type_id: number;
    @BelongsTo(()=>Event_Type)
    event_type:Event_Type

  }
  