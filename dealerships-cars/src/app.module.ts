import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { createObserveModule } from '@nestjs/observe';
import { AppController } from './app.controller.js';
import { AppService } from './app.service.js';
import { DealershipsModule } from './dealerships/dealerships.module.js';
import { CarsModule } from './cars/cars.module.js';
import { TypeOrmModule } from '@nestjs/typeorm';

export const { ObserveModule, ObserveInstrument } = createObserveModule();

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: (configService: ConfigService) => ({
        type: 'postgres',
        host: configService.get<string>('DB_HOST', '127.0.0.1'),
        port: configService.get<number>('DB_PORT', 5434),
        username: configService.get<string>('DB_USER', 'dealer'),
        password: configService.get<string>('DB_PASSWORD', 'dealer123'),
        database: configService.get<string>('DB_NAME', 'dealerships_db'),
        autoLoadEntities: true,
        synchronize: false,
      }),
    }),
    CarsModule,
    DealershipsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
