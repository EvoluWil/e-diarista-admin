import {
  BadRequestException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Utils } from 'src/utils/utils';
import { Repository } from 'typeorm';
import { CreateUserAdminDto } from './dto/create-user-admin.dto';
import { UpdateUserAdminDto } from './dto/update-user-admin.dto';
import { UserAdmin } from './entities/user-admin.entity';

@Injectable()
export class UserAdminService {
  constructor(
    @InjectRepository(UserAdmin)
    private readonly userAdminRepository: Repository<UserAdmin>,
  ) {}

  async create(createUserAdminDto: CreateUserAdminDto) {
    const { email, password } = createUserAdminDto;
    const user = await this.userAdminRepository.findOneBy({ email });

    if (user) {
      throw new BadRequestException('User already exists');
    }

    const passwordHash = await Utils.setPasswordHash(password);

    return this.userAdminRepository.save({
      ...createUserAdminDto,
      password: passwordHash,
    });
  }

  findAll() {
    return this.userAdminRepository.find();
  }

  async findOne(id: string) {
    const user = await this.userAdminRepository.findOneBy({ id });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findOneByEmail(email: string) {
    const user = await this.userAdminRepository.findOneBy({ email });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async update(id: string, updateUserAdminDto: UpdateUserAdminDto) {
    const { email, password } = updateUserAdminDto;

    const user = await this.userAdminRepository.findOneBy({ id });

    if (!user) {
      throw new BadRequestException('User already exists');
    }

    const userByEmail = await this.userAdminRepository.findOneBy({ email });

    if (userByEmail && userByEmail.email !== user.email) {
      throw new BadRequestException('Email already in use');
    }

    const passwordHash = await Utils.setPasswordHash(password);

    return this.userAdminRepository.save({
      ...updateUserAdminDto,
      password: passwordHash,
      id,
    });
  }

  async remove(id: string) {
    const user = await this.userAdminRepository.delete({ id });

    if (user.affected === 0) {
      throw new NotFoundException('User not found');
    }
  }
}
