import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AdressesModule } from './adresses/adresses.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'senha',
      database: 'FingerTeste',
      entities: ["dist/**/*.entity{.ts,.js}"],
      migrationsTableName: 'migration',
      migrations: ['src/migration/*.ts'],
      cli: {
        'migrationsDir': 'src/migration'
      },
      synchronize: true
    }),
    UsersModule,
    AdressesModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
