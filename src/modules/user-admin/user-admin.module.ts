import { Module } from '@nestjs/common';
import { UserAdminService } from './user-admin.service';
import { UserAdminController } from './user-admin.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAdmin } from './entities/user-admin.entity';

@Module({
  imports: [TypeOrmModule.forFeature([UserAdmin])],
  controllers: [UserAdminController],
  providers: [UserAdminService],
})
export class UserAdminModule {}
