import { Module } from '@nestjs/common';
import { TypeOrmModule as TypeOrmModuleBase } from '@nestjs/typeorm';
import { TypeOrmService } from './typeorm.service';

@Module({
  imports: [
    TypeOrmModuleBase.forRootAsync({
      useClass: TypeOrmService,
    }),
  ],
  providers: [],
  exports: [],
})
export class TypeOrmModule {}
