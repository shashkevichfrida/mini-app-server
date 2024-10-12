import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
  } from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";
  
  @Entity()
export class Event {
    @PrimaryGeneratedColumn('uuid')
    id: number;

    @Column('varchar', { length: 20 })
    event: string;

    @Column('varchar', { length: 20 })
    category: string
}