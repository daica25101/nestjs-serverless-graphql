import {Module} from "@nestjs/common";
import {ProductResolver} from "./product.resolver";
import {ProductService} from "../../use-cases/product.service";
import {ExceptionModule} from "../../../infrastructure/exception/exception.module";
import {ProductException} from "./product.exception";

@Module({
  imports: [
    ExceptionModule,
  ],
  providers: [ProductService, ProductResolver, ProductException],
})
export class ProductModule {}
