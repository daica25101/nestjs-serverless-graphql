import { Inject } from "@nestjs/common";
import {
  IProductRepository,
  PRODUCT_REPOSITORY_PROVIDER_NAME
} from "../infrastructure-adapters/database/repositories/products/product.repository.interface";
import { Product } from "../domain/product/product.entity";

export class ProductGetById {
  constructor(
    @Inject(PRODUCT_REPOSITORY_PROVIDER_NAME)
    private productRepository: IProductRepository
  ) {
  }
  async execute(id: string | number): Promise<Product> {
    return this.productRepository.getById(id);
  }
}