import { IProductRepository } from "../../../../core/infrastructure-adapters/database/repositories/products/product.repository.interface";
import { Product } from "../../../../core/domain/product/product.entity";

export abstract class ProductRepository implements IProductRepository{
  get(): Promise<Product[]> {
    return Promise.resolve([]);
  }

  getById(): Promise<Product> {
    return Promise.resolve(undefined);
  }
}