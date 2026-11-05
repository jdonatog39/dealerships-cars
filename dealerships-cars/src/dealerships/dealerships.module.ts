import { Module } from '@nestjs/common';
import { DealershipsService } from './dealerships.service.js';
import { DealershipsController } from './dealerships.controller.js';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Dealership } from './entities/dealership.entity.js';
import { CarsModule } from '../cars/cars.module.js';
@Module({
  imports: [TypeOrmModule.forFeature([Dealership]), CarsModule],
  controllers: [DealershipsController],
  providers: [DealershipsService],
  exports: [DealershipsService],
})
export class DealershipsModule {}
