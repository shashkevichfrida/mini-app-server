
import { ApiProperty } from '@nestjs/swagger';
import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
  } from 'typeorm';


@Entity()
export class Product {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 1000 })
    name: string;

    @Column('integer')
    money: number

    @Column('varchar', { length: 1000 })
    imagePath: string

}