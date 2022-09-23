import { Module } from "@nestjs/common";
import * as _ from "lodash";
import { GraphQLModule } from "@nestjs/graphql";
import { ApolloDriver, ApolloDriverConfig } from "@nestjs/apollo";
import { DirectiveLocation, GraphQLDirective } from "graphql";
import { upperDirectiveTransformer } from "./directives/upper-case.directive";
import * as path from "path";
import * as resolvers from './resolvers'

@Module({
  imports: [
    GraphQLModule.forRoot<ApolloDriverConfig>({
      driver: ApolloDriver,
      playground: true,
      autoSchemaFile: (path.join(process.cwd(),'src/schema.gql')),
      // transformSchema: schema => upperDirectiveTransformer(schema, "upper"),
      // installSubscriptionHandlers: true,
      // buildSchemaOptions: {
      //   directives: [
      //     new GraphQLDirective({
      //       name: "upper",
      //       locations: [DirectiveLocation.FIELD_DEFINITION]
      //     })
      //   ]
      // }
      // typePaths: ['./src/modules/api/graphqls/*.graphql'],
      // definitions: {
      //   path: path.join(process.cwd(), 'entities/*.ts')
      // }
    }),
  ],
  controllers: [],
  providers: []
})
export class GraphQlModule {
}
