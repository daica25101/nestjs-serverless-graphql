import { Product } from "@api/entities/product.entity";

export abstract class BaseService<T> {
  async getAll(filter: any): Promise<T[]> {
    return []
  }

  async getList(): Promise<T[]> {
    return [];
  }

  async getById(id: string): Promise<Partial<T>> {
    return {};
  }

  async getOne(): Promise<Partial<T>> {
    return {};
  }

  async create(product: Product): Promise<Partial<T>> {
    return {}
  }

  async deleteById(id: string | number): Promise<Partial<T>> {
    return {};
  }

  async update() : Promise<T[]> {
    return [];
  }

  async updateById() : Promise<Partial<T>> {
    return {};
  }
}