import {DomainException, IExceptionData} from "../shared/exception/exception.interface";
// import {Product} from "./product.entity";
import {HttpException, Injectable} from "@nestjs/common";
import * as Http from "http";

export interface Product {
    name: string
}
export class ProductError extends Error{
    constructor(error: IExceptionData<any>, message) {
        super(`User id: ${error.currentUserId} interact product ${error.payload.name} ${message}`);
    }
}
export class ProductException implements DomainException<Product>{
    static exist<Product>(error: IExceptionData<Product>): void {
        throw new ProductError(error, 'already exist')
    }

    static noPermission<Product>(error: IExceptionData<Product>): void {
        throw new ProductError(error, 'no permission')
    }

    static notFound<Product>(error: IExceptionData<Product>): void {
        throw new ProductError(error, 'not found')
    }

}


