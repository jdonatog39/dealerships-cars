import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn, ManyToOne, JoinColumn } from 'typeorm';
import { Dealership } from '../../dealerships/entities/dealership.entity.js';

export enum carStatus {
    AVAILABLE = "AVAILABLE",
    RESERVED = "RESERVED",
    SOLD = "SOLD"
}

@Entity("cars")
export class car {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ length: 100 })
    plate: string;

    @Column({ length: 100 })
    brand: string;

    @Column({ length: 4 })
    model: string;

    @Column({ length: 4 })
    year: number;
    @Column({length: 100})
    price:number;
    @Column({ default: carStatus.AVAILABLE })
    status: carStatus;

    @Column({ name: 'dealership_id', type: 'int', nullable: true })
    dealershipId: number | null;

    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;

    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @ManyToOne(() => Dealership, (dealership) => dealership.cars, {nullable: true})
    @JoinColumn({ name: 'dealership_id' })
    dealership: Dealership | null;
}
export class Car {}
