import {
  Controller,
  Get,
  Put,
  Post,
  Body,
  Param,
  Delete,
  Render,
  Request,
  Redirect,
  UseFilters,
  UseGuards,
} from '@nestjs/common';
import { UserAdminService } from './user-admin.service';
import { CreateUserAdminDto } from './dto/create-user-admin.dto';
import { UpdateUserAdminDto } from './dto/update-user-admin.dto';
import { CreateException } from 'src/commons/filters/create-exception.filter';
import { UpdateException } from 'src/commons/filters/update-exception.filter';
import { AuthGuard } from 'src/commons/guards/auth.guard';

@UseGuards(AuthGuard)
@Controller('admin/users')
export class UserAdminController {
  constructor(private readonly adminService: UserAdminService) {}

  //? Views
  @Get()
  @Render('users/list')
  async listUsers() {
    return { users: await this.adminService.findAll() };
  }

  @Get('create')
  @Render('users/create')
  newUser(@Request() req: any) {
    return {
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
    };
  }

  @Get(':id/update')
  @Render('users/update')
  async updateUser(@Param('id') id: string, @Request() req: any) {
    const user = await this.adminService.findOne(id);
    return {
      user,
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
    };
  }

  //? Functions
  @Post()
  @UseFilters(CreateException)
  @Redirect('/admin/users')
  create(@Body() createUserAdminDto: CreateUserAdminDto) {
    return this.adminService.create(createUserAdminDto);
  }

  @Put(':id')
  @UseFilters(UpdateException)
  @Redirect('/admin/users')
  update(
    @Param('id') id: string,
    @Body() updateUserAdminDto: UpdateUserAdminDto,
  ) {
    return this.adminService.update(id, updateUserAdminDto);
  }

  @Delete(':id')
  @Redirect('/admin/users')
  remove(@Param('id') id: string) {
    return this.adminService.remove(id);
  }
}
