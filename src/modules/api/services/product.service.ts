import { Injectable } from "@nestjs/common";
import { LazyModuleLoader } from "@nestjs/core";
import { BaseService } from "@api/services/base.service";
import { Product } from "@api/entities/product.entity";

@Injectable()
export class ProductService extends BaseService<Product> {
  constructor(private lazyModuleLoader: LazyModuleLoader) {
    super();
  }
}