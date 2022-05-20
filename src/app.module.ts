import { MiddlewareConsumer, Module, RequestMethod } from '@nestjs/common';
import { Configuration } from './config/config.keys';
import { ConfigService } from './config/config.service';
import { DatabaseModule } from './database/database.module';

import { ConfigModule } from '@src/config/config.module';
import { ProductModule } from './modules/product/product.module';
import { CategoryModule } from './modules/category/category.module';

@Module({
  imports: [
    DatabaseModule,
    ConfigModule,
    ProductModule,
    CategoryModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {
  static port: number | string;
  constructor(private readonly _configService: ConfigService) {
    AppModule.port = this._configService.get(Configuration.PORT_SERVER);
  }
}
