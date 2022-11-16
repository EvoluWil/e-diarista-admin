import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { join } from 'path';

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    return {
      database: 'e-diarista',
      username: 'docker',
      password: 'docker',
      host: 'localhost',
      port: 3306,
      synchronize: false,
      type: 'mysql',
      entities: [join(__dirname, '..', '..', '**/*entity.{ts,js}')],
      migrations: [join(__dirname, 'migrations/*{ts,js}')],
    };
  }
}
