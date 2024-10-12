import {
    Column,
    Entity,
    PrimaryGeneratedColumn,
    CreateDateColumn,
  } from 'typeorm';
  
  @Entity()
export class Student {
    @PrimaryGeneratedColumn('uuid')
    id: string;

    @Column('varchar', { length: 20 })
    faculty: string;

    @Column('varchar', { length: 20 })
    level: string

    @Column('integer')
    course: number

    @Column('varchar', { length: 10000 })
    sport: string

    @Column('varchar', { length: 10000 })
    club: string

    @Column('varchar', { length: 10000 })
    event: string

    @Column('integer')
    money: number
}