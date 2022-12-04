import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { AuthStrategy } from './auth.strategy';
import { SessionSerializer } from './session.serializer';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UserAdmin } from 'src/modules/user-admin/entities/user-admin.entity';
import { UserAdminService } from 'src/modules/user-admin/user-admin.service';

@Module({
  imports: [TypeOrmModule.forFeature([UserAdmin])],
  controllers: [AuthController],
  providers: [AuthService, AuthStrategy, SessionSerializer, UserAdminService],
})
export class AuthModule {}
