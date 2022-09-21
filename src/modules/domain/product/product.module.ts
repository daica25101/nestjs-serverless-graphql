import {Module} from "@nestjs/common";
import {ProductResolver} from "./product.resolver";
import {ProductService} from "./product.service";
import {ExceptionModule} from "@adapters/exception/exception.module";
import {ProductException} from "./product.exception";

@Module({
  imports: [
    ExceptionModule,
  ],
  providers: [ProductService, ProductResolver, ProductException],
})
export class ProductModule {}
