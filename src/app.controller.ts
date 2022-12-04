import {
  Controller,
  Get,
  Post,
  Redirect,
  Render,
  UseFilters,
  UseGuards,
  Request,
} from '@nestjs/common';
import { AppService } from './app.service';
import { AuthException } from './commons/filters/auth-exception.filter';
import { SignInGuard } from './commons/guards/sign-in.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('admin/sign-in')
  @Render('sign-in')
  renderSignIn(@Request() req: any) {
    return {
      layout: false,
      class: req.flash('class'),
      message: req.flash('message'),
    };
  }

  @UseGuards(SignInGuard)
  @UseFilters(AuthException)
  @Post('admin/sign-in')
  @Redirect('/admin/users')
  signIn() {
    //
  }
}
