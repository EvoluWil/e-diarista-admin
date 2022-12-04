import { Module } from '@nestjs/common';
import { TypeOrmModule } from './typeorm/typeorm.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [TypeOrmModule, AuthModule],
  exports: [TypeOrmModule, AuthModule],
})
export class ProvidersModule {}
