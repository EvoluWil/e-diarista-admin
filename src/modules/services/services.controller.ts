import {
  Controller,
  Get,
  Post,
  Body,
  Put,
  Render,
  Redirect,
  Param,
  Request,
  UseFilters,
} from '@nestjs/common';
import { ServicesService } from './services.service';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { CreateException } from 'src/commons/filters/create-service.exception';
import { UpdateException } from 'src/commons/filters/update-service.exception';

@Controller('admin/services')
export class ServicesController {
  constructor(private readonly servicesService: ServicesService) {}

  //? Views
  @Get()
  @Render('services/list')
  listService() {
    return this.servicesService.findAll();
  }

  @Get('create')
  @Render('services/create')
  newService(@Request() req: any) {
    return {
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
    };
  }

  @Get(':id/update')
  @Render('services/update')
  async updateService(@Param('id') id: string, @Request() req: any) {
    const service = await this.servicesService.findOne(id);
    return {
      service,
      message: req.flash('message'),
      oldData: req.flash('oldData'),
      alert: req.flash('alert'),
    };
  }

  //? Functions
  @Post()
  @UseFilters(CreateException)
  @Redirect('/admin/services')
  create(@Body() createServiceDto: CreateServiceDto) {
    return this.servicesService.create(createServiceDto);
  }

  @Put(':id')
  @UseFilters(UpdateException)
  @Redirect('/admin/services')
  update(@Param('id') id: string, @Body() updateServiceDto: UpdateServiceDto) {
    return this.servicesService.update(id, updateServiceDto);
  }
}
