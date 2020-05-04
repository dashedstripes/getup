import { Model, DataTypes } from "sequelize";
import sequelize from '../sequelize/sequelize';

class WorklogModel extends Model {
  public id!: number;
  public content!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

WorklogModel.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  content: {
    type: new DataTypes.TEXT,
    allowNull: false,
  },
}, {
  sequelize,
  tableName: 'worklogs',
});

export default WorklogModel