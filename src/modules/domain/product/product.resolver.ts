import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Product } from "./product.entity";
import { Injectable, NotFoundException } from "@nestjs/common";
import { ProductService } from "./product.service";
import { GetProductRequestDTO, PostProductRequestDTO } from "./product.dto";
import {ProductException} from "./product.exception";

@Resolver(of => Product)
export class ProductResolver {

  constructor(
    private readonly productService: ProductService,
    private readonly productException: ProductException
  ) {}

  @Query(returns => Product, {name: 'product'})
  async getById(@Args('id') id: string): Promise<Partial<Product>> {
    const product = await this.productService.getById(id);
    if (!product) {
      throw new NotFoundException(id);
    }
    return product;
  }

  @Query(returns => [Product], {name: 'products'})
  async getAll(filter: GetProductRequestDTO): Promise<Product[]> {
    return this.productService.getAll(filter);
  }

  @Mutation(returns => Product)
  async create(
    @Args('product') product: PostProductRequestDTO,
  ): Promise<Partial<Product>> {
    return await this.productService.create(product);
  }

  @Mutation(returns => Product)
  async removeProduct(@Args('id') id: string) {
    return this.productService.deleteById(id);
  }
}