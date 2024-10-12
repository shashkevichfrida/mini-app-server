import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
  } from 'typeorm';
import {ApiProperty} from "@nestjs/swagger";
  
@Entity()
export class Event {
    @PrimaryGeneratedColumn()
    id: number;

    @Column('varchar', { length: 1000 })
    event: string;

    @Column('varchar', { length: 1000 })
    category: string
}