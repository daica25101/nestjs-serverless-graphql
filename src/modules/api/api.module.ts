import { Module } from "@nestjs/common";
import * as services from "./services";
import * as _ from "lodash";
import { GraphQlModule } from "../adapters/graphql/graphql.module";
import * as resolvers from "../api/resolvers";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import path from "path";
import { upperDirectiveTransformer } from "../adapters/graphql/directives/upper-case.directive";
import { DirectiveLocation, GraphQLDirective } from "graphql";

@Module({
  imports: [

  ],
  providers: [],
})
export class ApiModule {}
