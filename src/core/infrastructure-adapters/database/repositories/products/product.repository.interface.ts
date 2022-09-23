import { Product } from "../../../../domain/product/product.entity";
import { IBaseRepository } from "../base.repository.interface";

export interface IProductRepository extends IBaseRepository<Product> {

}