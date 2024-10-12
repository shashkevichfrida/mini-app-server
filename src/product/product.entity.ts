import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Product {
  @PrimaryGeneratedColumn()
  id_product: number;

  @Column('varchar', { length: 1000 })
  name: string;

  @Column('integer')
  money: number;

  @Column('varchar', { length: 1000 })
  imagePath: string;
}
