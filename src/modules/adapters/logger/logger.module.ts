import { Module } from "@nestjs/common";
import { LoggerService } from "@adapters/logger/logger.service";

@Module({
  imports: [

  ],
  providers: [LoggerService],
  exports: [LoggerService]
})
export class LoggerModule {

}