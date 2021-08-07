import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LinkController } from './link/link.controller';
import { LinkService } from './link/link.service';
import { LinkModule } from './link/link.module';

@Module({
  imports: [ConfigModule.forRoot(), UserModule, LinkModule],
  controllers: [AppController, LinkController],
  providers: [AppService, LinkService],
})
export class AppModule {}
