import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { HttpModule } from './connectivity/http/http.module';

@Module({
  imports: [HttpModule],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
