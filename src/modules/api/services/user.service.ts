import { Injectable } from "@nestjs/common";
import { LazyModuleLoader } from "@nestjs/core";

@Injectable()
export class UserService {
  constructor(private lazyModuleLoader: LazyModuleLoader) {
  }
}