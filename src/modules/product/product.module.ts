import { Module } from "@nestjs/common";
import { ProductResolver } from "./product.resolver";
import { ProductService } from "./product.service";
import { ExceptionModule } from "@adapters/exception/exception.module";
import { DatabaseModule } from "@adapters/database/database.module";

@Module({
  imports: [
    ExceptionModule,
    DatabaseModule
  ],
  providers: [ProductService, ProductResolver],
})
export class ProductModule {}
