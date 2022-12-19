
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
  } from 'sequelize-typescript';
  
  interface LangCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'lang' })
  export class Lang extends Model<Lang, LangCreationAttrs> {
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
  