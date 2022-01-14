import { Module } from '@nestjs/common';
import { AdressesService } from './adresses.service';
import { AdressesController } from './adresses.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Address } from './entities/adress.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Address])],
  controllers: [AdressesController],
  providers: [AdressesService]
})
export class AdressesModule {}
