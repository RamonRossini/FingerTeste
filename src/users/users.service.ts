import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/adresses/entities/adress.entity';
import { Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    @InjectRepository(Address)
    private addressRepository: Repository<Address>
  ) { }

  async create(createUserDto: CreateUserDto) {
    const createAddress = this.addressRepository.create(createUserDto.address);

    const createUser = this.usersRepository.create(createUserDto);

    return this.usersRepository.save(createUser);
  }

  findAll() {
    return this.usersRepository.find({relations: ['address']});
  }

  findOne(id: number) {
    return this.usersRepository.findOne({relations: ['address']});
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
