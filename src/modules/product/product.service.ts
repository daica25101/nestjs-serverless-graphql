import { Injectable } from "@nestjs/common";
import { LazyModuleLoader } from "@nestjs/core";
import { BaseService } from "@api/services/base.service";
import { Product } from "./product.entity";
import { ExceptionService } from "../adapters/exception/exception.service";

@Injectable()
export class ProductService extends BaseService<Product> {
  constructor(private exceptionService: ExceptionService) {
    super();
  }

  testLog() {
    this.exceptionService.badRequestException({code: 500, message: 'Hey'})
  }
}