import { DataSource, DataSourceOptions } from 'typeorm';
import { TypeOrmService } from './typeorm.service';

const db = new TypeOrmService();
export const dataConfigMigrations = new DataSource(
  db.createTypeOrmOptions() as DataSourceOptions,
);
