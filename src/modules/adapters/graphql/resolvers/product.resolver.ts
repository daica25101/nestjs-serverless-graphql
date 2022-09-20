import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Product } from "@api/entities/product.entity";
import { NotFoundException } from "@nestjs/common";
import { ProductService } from "@api/services";
import { GetProductRequestDTO } from "@api/dtos";

@Resolver(of => Product)
export class ProductResolver {

  constructor(private readonly productService: ProductService) {}

  @Query(returns => Product)
  async getById(@Args('id') id: string): Promise<Partial<Product>> {
    const product = await this.productService.getById(id);
    if (!product) {
      throw new NotFoundException(id);
    }
    return product;
  }

  @Query(returns => [Product])
  getAll(filter: GetProductRequestDTO): Promise<Product[]> {
    return this.productService.getAll(filter);
  }

  @Mutation(returns => Product)
  async create(
    @Args() product: Product,
  ): Promise<Partial<Product>> {
    return await this.productService.create(product);
  }

  @Mutation(returns => Product)
  async removeProduct(@Args('id') id: string) {
    return this.productService.deleteById(id);
  }
}