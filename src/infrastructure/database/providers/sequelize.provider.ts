import { Sequelize } from "sequelize-typescript";
import { Product } from "../../../core/domain/product/product.entity";

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
        modelPaths: ['src/core/domain/**/*.entity.ts']
      });
      await sequelize.sync();
      return sequelize;
    },
  },
];