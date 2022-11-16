import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Utils } from 'src/utils/utils';
import { Repository } from 'typeorm';
import { CreateServiceDto } from './dto/create-service.dto';
import { UpdateServiceDto } from './dto/update-service.dto';
import { Service } from './entities/service.entity';

@Injectable()
export class ServicesService {
  constructor(
    @InjectRepository(Service)
    private readonly serviceRepository: Repository<Service>,
  ) {}

  create(createServiceDto: CreateServiceDto) {
    Object.keys(createServiceDto).forEach((item) => {
      if (item.includes('Value')) {
        createServiceDto[item] = Utils.formatDecimal(createServiceDto[item]);
      }
    });

    return this.serviceRepository.save(createServiceDto);
  }

  async findAll() {
    const services = await this.serviceRepository.find();
    return { services };
  }

  async findOne(id: string) {
    return this.serviceRepository.findOneBy({ id });
  }

  update(id: string, updateServiceDto: UpdateServiceDto) {
    Object.keys(updateServiceDto).forEach((item) => {
      if (item.includes('Value')) {
        updateServiceDto[item] = Utils.formatDecimal(updateServiceDto[item]);
      }
    });

    return this.serviceRepository.update(id, updateServiceDto);
  }
}
