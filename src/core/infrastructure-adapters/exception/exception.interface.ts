export interface IExceptionMessage {
  code: number;
  message: string;
  stackTrace?: string
}


export interface IException {
  badRequestException(data: IExceptionMessage): void;
  internalServerErrorException(data?: IExceptionMessage): void;
  forbiddenException(data?: IExceptionMessage): void;
  UnauthorizedException(data?: IExceptionMessage): void;
}