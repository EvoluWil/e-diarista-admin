import { Injectable } from '@nestjs/common';
import { TypeOrmModuleOptions, TypeOrmOptionsFactory } from '@nestjs/typeorm';
import { join } from 'path';

@Injectable()
export class TypeOrmService implements TypeOrmOptionsFactory {
  createTypeOrmOptions(): TypeOrmModuleOptions {
    console.log(process.env.DB_URL);
    return {
      url:
        process.env.DB_URL ||
        'mysql://pc4p305c0xiro6no:jpcn5c47e9vl7otr@m7az7525jg6ygibs.cbetxkdyhwsb.us-east-1.rds.amazonaws.com:3306/xife2eac64lfpfkv',
      synchronize: false,
      type: 'mysql',
      entities: [join(__dirname, '..', '..', '**/*entity.{ts,js}')],
      migrations: [join(__dirname, 'migrations/*{ts,js}')],
    };
  }
}
