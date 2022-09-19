import { Module } from '@nestjs/common';
import { RouterModule, Routes } from "nest-router";
import { ApiModule } from "@api/api.module";
import { ProductModule } from "./modules/product/product.module";
const routes: Routes = [
  {
    path: '/products',
    module: ProductModule
  }
]
@Module({
  imports: [
    RouterModule.forRoutes(routes),
    ApiModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
