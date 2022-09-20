import {Logger} from "@nestjs/common";
import { ILogger } from "@adapters/logger/logger.interface";

export class LoggerService extends Logger implements ILogger{
  debug(context: string, message: string): void {
  }

  verbose(context: string, message: string): void {
  }

  error(context: string, message: string, trace?: string): void {
  }

  log(context: string, message: string): void {
  }

  warn(context: string, message: string): void {
  }

}