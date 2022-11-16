import { Module } from '@nestjs/common';
import { TypeOrmModule } from './typeorm/typeorm.module';

@Module({
  imports: [TypeOrmModule],
  exports: [TypeOrmModule],
})
export class ProvidersModule {}
