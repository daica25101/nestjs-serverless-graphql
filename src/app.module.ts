import { Module } from "@nestjs/common";
import { RouterModule, Routes } from "nest-router";
import { GraphQlModule } from "./infrastructure/graphql/graphql.module";

@Module({
  imports: [
    // RouterModule.forRoutes(routes),
    GraphQlModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
