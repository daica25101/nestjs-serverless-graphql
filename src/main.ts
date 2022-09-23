import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { appConfig } from "@config/configuration";
import { Handler } from "aws-lambda";

let server: Handler;
async function bootstrap() {
  const {baseUrl, port} = appConfig;
  const app = await NestFactory.create(AppModule);
  await app.init();
  await app.listen(3000);
  const url = `${baseUrl}:${port}`;
  console.log(`Server is running on: ${url}`);
  // return serverlessExpress({ app: app.getHttpAdapter().getInstance() });
}

bootstrap();
// export const handler: Handler = async (
//   event: any,
//   context: Context,
//   callback: Callback,
// ) => {
//   server = server ?? (await bootstrap());
//   return server(event, context, callback);
// };
