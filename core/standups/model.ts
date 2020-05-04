import { Model, DataTypes } from "sequelize";
import sequelize from '../../loaders/sequelize';

class StandupModel extends Model {
  public id!: number;
  public content!: string;
  public readonly createdAt!: Date;
  public readonly updatedAt!: Date;
}

StandupModel.init({
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
  tableName: 'standups',
});

export default StandupModel