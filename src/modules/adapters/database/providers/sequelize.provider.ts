import { Sequelize } from "sequelize-typescript";

export const databaseProviders = [
  {
    provide: 'SEQUELIZE',
    useFactory: async () => {
      const sequelize = new Sequelize({
        dialect: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'root',
        password: 'root123456',
        database: 'serverless-training',
        modelPaths: ['src/modules/**/*.entity.ts']
      });
      await sequelize.sync();
      return sequelize;
    },
  },
];