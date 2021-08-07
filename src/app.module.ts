import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { LinkController } from './link/link.controller';
import { LinkService } from './link/link.service';
import { LinkModule } from './link/link.module';

@Module({
  imports: [UserModule, LinkModule],
  controllers: [AppController, LinkController],
  providers: [AppService, LinkService],
})
export class AppModule {}
