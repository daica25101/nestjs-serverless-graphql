import { Module } from '@nestjs/common';
import { RouterModule, Routes } from "nest-router";
import { ApiModule } from "@api/api.module";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import * as path from "path";
import { upperDirectiveTransformer } from "./modules/adapters/graphql/directives/upper-case.directive";
import { DirectiveLocation, GraphQLDirective } from "graphql";
import { ProductModule } from "./modules/product/product.module";
import { GraphQlModule } from "./modules/adapters/graphql/graphql.module";
import { ExceptionModule } from "./modules/adapters/exception/exception.module";
const routes: Routes = [
  {
    path: '',
    module: ApiModule
  }
]
@Module({
  imports: [
    RouterModule.forRoutes(routes),
    GraphQlModule,
    ProductModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
