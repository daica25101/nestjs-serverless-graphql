import {
  IProductRepository,
  PRODUCT_REPOSITORY_PROVIDER_NAME
} from "../../../../core/infrastructure-adapters/database/repositories/products/product.repository.interface";
import { Product } from "../../../../core/domain/product/product.entity";

export class ProductRepository implements IProductRepository{
  constructor() {
  }
  get(): Promise<Product[]> {
    return Promise.resolve([]);
  }

  getById(): Promise<Product> {
    return Promise.resolve(undefined);
  }
}

export const productRepoProvider = {
  provide: PRODUCT_REPOSITORY_PROVIDER_NAME,
  useFactory: async () => {
    return new ProductRepository();
  },
  inject: [],
};
