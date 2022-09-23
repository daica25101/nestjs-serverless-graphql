import { Args, Mutation, Query, Resolver } from "@nestjs/graphql";
import { Product } from "../../../core/domain/product/product.entity";
import { NotFoundException } from "@nestjs/common";
import { GetProductRequestDTO } from "../../../presentation/dto/product.dto";
import { ProductGetById } from "../../../core/use-cases/product.get-by-id";
import { ProductGet } from "../../../core/use-cases/product.get";
@Resolver(of => Product)
export class ProductResolver {

  constructor(
    private readonly productGetById: ProductGetById,
    private readonly productGet: ProductGet
  ) {}

  @Query(returns => Product)
  async getById(@Args('id') id: string): Promise<Partial<Product>> {
    const product = await this.productGetById.execute(id);
    if (!product) {
      throw new NotFoundException(id);
    }
    return product;
  }

  @Query(returns => [Product])
  getAll(filter: GetProductRequestDTO): Promise<Product[]> {
    return this.productGet.execute();
  }

  // @Mutation(returns => Product)
  // async create(
  //   @Args() product: Product,
  // ): Promise<Partial<Product>> {
  //   return await this.productService.create(product);
  // }
  //
  // @Mutation(returns => Product)
  // async removeProduct(@Args('id') id: string) {
  //   return this.productService.deleteById(id);
  // }
}