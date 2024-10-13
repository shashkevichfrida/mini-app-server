import { Column, Entity, PrimaryGeneratedColumn, OneToMany } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';
import { Event } from 'src/event/event.entity';
import { Product } from 'src/product/product.entity';

@Entity()
export class Student {
  @PrimaryGeneratedColumn()
  id: number;

  @Column('varchar', { length: 20 })
  faculty: string;

  @Column('varchar', { length: 20 })
  level: string;

  @Column('integer')
  course: number;

  @OneToMany(() => Event, (event) => event.student)
  @ApiProperty({ type: () => Event })
  completeEvents: Event[];

  @OneToMany(() => Product, (product) => product.student)
  @ApiProperty({ type: () => Product })
  products: Product[];

  @Column('integer')
  money: number;
}
