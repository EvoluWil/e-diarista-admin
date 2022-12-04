import {
  ArgumentsHost,
  BadRequestException,
  ExceptionFilter,
  ForbiddenException,
  HttpException,
  UnauthorizedException,
} from '@nestjs/common';
import { Response } from 'express';

export class AuthException implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest();

    if (
      exception instanceof ForbiddenException ||
      exception instanceof BadRequestException ||
      exception instanceof UnauthorizedException
    ) {
      request.flash('message', 'Usuário ou Senha inválidos');
      request.flash('class', 'is-invalid');
      response.redirect(`/admin/sign-in`);
    } else {
      response.redirect('/404');
    }
  }
}
