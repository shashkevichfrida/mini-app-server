import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id_event: number;

  @Column('varchar', { length: 1000 })
  event: string;

  @Column('varchar', { length: 1000 })
  category: string;
}
