import { Product } from "../../../../domain/product/product.entity";
import { IBaseRepository } from "../base.repository.interface";

export const PRODUCT_REPOSITORY_PROVIDER_NAME = 'PRODUCT_REPOSITORY'
export interface IProductRepository extends IBaseRepository<Product> {

}