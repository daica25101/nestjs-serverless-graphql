import {Module} from "@nestjs/common";
import {ProductResolver} from "@infrastructure/graphql/resolvers";
import {ProductGet} from "../../use-cases/product.get";
import {ExceptionModule} from "@infrastructure/exception/exception.module";
import {ProductException} from "./product.exception";

@Module({
  imports: [
    ExceptionModule,
  ],
  providers: [ProductGet, ProductResolver, ProductException],
})
export class ProductModule {}
