import { Module } from '@nestjs/common';
import { DatabaseModule } from '@infra/database/database.module';
import { HttpModule } from '@infra/http/http.module';
import { MessagingModule } from '@infra/messaging/messaging.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: ['.env.production.local', '.env.production'],
    }),
    HttpModule,
    DatabaseModule,
    MessagingModule,
  ],
})
export class AppModule {}
