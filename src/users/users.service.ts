import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Address } from 'src/adresses/entities/adress.entity';
import { Connection, Repository } from 'typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { User } from './entities/user.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,

    @InjectRepository(Address)
    private addressRepository: Repository<Address>,

    private connection: Connection
  ) { }

  async create(createUserDto: CreateUserDto) {
    const createAddress = this.addressRepository.create(createUserDto.address);

    const createUser = this.usersRepository.create(createUserDto);

    return this.usersRepository.save(createUser);
  }

  async createMany(users: User[]) {
    const queryRunner = this.connection.createQueryRunner();

    await queryRunner.connect();
    await queryRunner.startTransaction();
    try {
      await users.forEach(user => {
        queryRunner.manager.save(user);
      })

      await queryRunner.commitTransaction();
    } catch (err) {
      // se houver erro, faz rollback do que foi feito
      await queryRunner.rollbackTransaction();
    } finally {
      // lança a queryRunner
      await queryRunner.release();
    }
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
    return this.usersRepository.delete(id);
  }
}
