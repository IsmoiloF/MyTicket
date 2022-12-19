
import {
    BelongsToMany,
    Column,
    DataType,
    Model,
    Table,
  } from 'sequelize-typescript';
  
  interface DiscounCCreationAttrs {
    name : string;
  }
  
  @Table({ tableName: 'discoun-coupoc' })
  export class Discoun_Coupoc extends Model<Discoun_Coupoc, DiscounCCreationAttrs> {
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
  