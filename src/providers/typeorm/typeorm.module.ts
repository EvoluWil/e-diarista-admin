import { Module } from '@nestjs/common';
import { TypeOrmModule as TypeOrmModuleBase } from '@nestjs/typeorm';
import { ConfigModule } from 'nestjs-config';
import { TypeOrmService } from './typeorm.service';

@Module({
  imports: [
    ConfigModule,
    TypeOrmModuleBase.forRootAsync({
      useClass: TypeOrmService,
    }),
  ],
  providers: [],
  exports: [],
})
export class TypeOrmModule {}
