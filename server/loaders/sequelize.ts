import {Sequelize} from 'sequelize';

const sequelize = new Sequelize({
  dialect: 'sqlite',
  storage: '/Users/adamgray/Code/getup/data/dev.sqlite',
  logging: true
});

sequelize.sync();

export default sequelize;