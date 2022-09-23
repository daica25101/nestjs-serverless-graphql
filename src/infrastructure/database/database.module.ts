import {databaseProviders} from "./providers/sequelize.provider";
import { Module } from "@nestjs/common";
import { productRepoProvider } from "./repositories/products/product.repository";

@Module({
  providers: [...databaseProviders, productRepoProvider],
  exports: [...databaseProviders, productRepoProvider],
})
export class DatabaseModule {}