import { Inject } from "@nestjs/common";
import { IProductRepository } from "../infrastructure-adapters/database/repositories/products/product.repository.interface";
import { Product } from "../domain/product/product.entity";

export class ProductGetById {
  constructor(
    @Inject('PRODUCT_REPOSITORY')
    private productRepository: IProductRepository
  ) {
  }
  async execute(id: string | number): Promise<Product> {
    return this.productRepository.getById(id);
  }
}