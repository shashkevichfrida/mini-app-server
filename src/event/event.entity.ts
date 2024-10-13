import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
  RelationId,
} from 'typeorm';
import { Student } from '../student/student.entity';

@Entity()
export class Event {
  @PrimaryGeneratedColumn()
  id_event: number;

  @Column('varchar', { length: 1000 })
  event: string;

  @Column('varchar', { length: 1000 })
  category: string;

  @ManyToOne(() => Student, (student) => student.completeEvents, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'studentId' })
  student: Student;
}
