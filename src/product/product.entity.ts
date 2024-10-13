import { ApiProperty } from '@nestjs/swagger';
import {
  Column,
  Entity, JoinColumn, ManyToOne,
  PrimaryGeneratedColumn
} from "typeorm";
import {Student} from "../student/student.entity";

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

  @ManyToOne(() => Student, (student) => student.products, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'studentId' })
  student: Student;
}
