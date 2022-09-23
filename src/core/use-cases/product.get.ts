import { Inject } from "@nestjs/common";
import { IProductRepository } from "../infrastructure-adapters/database/repositories/products/product.repository.interface";
import { Product } from "../domain/product/product.entity";

export class ProductGet {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: IProductRepository
  ) {
  }
  async execute(): Promise<Product[]> {
    return this.productRepository.get();
  }
}