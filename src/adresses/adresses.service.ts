import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateAdressDto } from './dto/create-adress.dto';
import { UpdateAdressDto } from './dto/update-adress.dto';
import { Address } from './entities/adress.entity';

@Injectable()
export class AdressesService {
  constructor(
    @InjectRepository(Address)
    private addressRepository: Repository<Address>
  ) { }

  create(createAdressDto: CreateAdressDto) {
    return 'This action adds a new adress';
  }

  findAll() {
    return this.addressRepository.find();
  }

  findOne(id: number) {
    return this.addressRepository.findOne(id, {relations: ['user']});
  }

  update(id: number, updateAdressDto: UpdateAdressDto) {
    return `This action updates a #${id} adress`;
  }

  remove(id: number) {
    return `This action removes a #${id} adress`;
  }
}
