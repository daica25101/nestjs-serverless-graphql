import { Controller, Get } from "@nestjs/common";

@Controller()
export class UserController {
  @Get()
  getList() {
    return [];
  }
}