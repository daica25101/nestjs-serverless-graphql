import { Column, Table } from "sequelize-typescript";
import { Field, ObjectType } from "@nestjs/graphql";

@Table({modelName: 'products'})
@ObjectType({description: 'products'})
export class Product {

  @Field({nullable: true})
  name: string


  @Field()
  description: string;
}