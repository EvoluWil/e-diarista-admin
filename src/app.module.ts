import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProvidersModule } from './providers/providers.module';
import { ServicesModule } from './modules/services/services.module';
import { UserAdminModule } from './modules/user-admin/user-admin.module';

@Module({
  imports: [ProvidersModule, ServicesModule, UserAdminModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
