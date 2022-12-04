import {
  ArgumentsHost,
  BadRequestException,
  ExceptionFilter,
  HttpException,
} from '@nestjs/common';
import { Response } from 'express';
import { Utils } from '../../utils/utils';

export class UpdateException implements ExceptionFilter {
  catch(exception: HttpException, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest();
    const url = `${request.originalUrl}`.split('?')[0];
    const oldData = request.body;

    if (exception instanceof BadRequestException) {
      request.flash(
        'message',
        Utils.formatException(exception['response']['message']),
      );
      request.flash('alert', 'alert alert-danger');
      request.flash('oldData', oldData);
      response.redirect(`${url}/update`);
    } else {
      response.redirect(`${url}`);
    }
  }
}
