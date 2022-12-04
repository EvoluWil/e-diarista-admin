import { Injectable } from '@nestjs/common';
import { compare } from 'bcrypt';
import { UserAdminService } from 'src/modules/user-admin/user-admin.service';

@Injectable()
export class AuthService {
  constructor(private readonly userAdminService: UserAdminService) {}

  async validateUser(username: string, password: string) {
    const user = await this.userAdminService.findOneByEmail(username);

    if (!user) {
      return null;
    }

    const match = await compare(password, user.password);
    return match ? user : null;
  }
}
