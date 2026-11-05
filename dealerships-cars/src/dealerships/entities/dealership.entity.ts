import { Entity, PrimaryGeneratedColumn, Column,CreateDateColumn,UpdateDateColumn,OneToMany} from 'typeorm';
import { car } from '../../cars/entities/car.entity.js';
@Entity("dealerships")
export class Dealership{

    @PrimaryGeneratedColumn()
    id: number;
    @Column({length:100})
    name:string;
    @Column({length:100})
    city:string;
    @Column({default: true})
    active:boolean;
    @CreateDateColumn({ name: 'created_at' })
    createdAt: Date;
    @UpdateDateColumn({ name: 'updated_at' })
    updatedAt: Date;

    @OneToMany(() => car, (car) => car.dealership)
    cars: car[];
}
