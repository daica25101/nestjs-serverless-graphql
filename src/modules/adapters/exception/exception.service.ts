import { IException, IExceptionMessage } from "./exception.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export class ExceptionService implements IException{
  UnauthorizedException(data?: IExceptionMessage): void {
  }

  badRequestException(data: IExceptionMessage): void {
  }

  forbiddenException(data?: IExceptionMessage): void {
  }

  internalServerErrorException(data?: IExceptionMessage): void {
  }

}