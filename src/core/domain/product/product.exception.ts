import {
    IException,
    IExceptionMessage
} from "@core/infrastructure-adapters/exception/exception.interface";



export class ProductException implements IException{

    UnauthorizedException(data?: IExceptionMessage): void {
    }

    badRequestException(data: IExceptionMessage): void {
    }

    forbiddenException(data?: IExceptionMessage): void {
    }

    internalServerErrorException(data?: IExceptionMessage): void {
    }

}


