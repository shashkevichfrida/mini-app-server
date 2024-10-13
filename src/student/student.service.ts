import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { Repository } from 'typeorm';
import { Event } from '../event/event.entity';
import { Product } from "../product/product.entity";

@Injectable()
export class StudentService {
  constructor(
    @InjectRepository(Student)
    private studentRepository: Repository<Student>,
  ) {}

  async getOne() {
    return this.studentRepository.findOne({
      where: { id: Math.round(Math.random() * 1000) },
    });
  }

  async getStudentsForRate(
    course: number,
    level: string,
    countOfFriends: number,
  ) {
    const students = await this.studentRepository.find({
      where: { course: course, level: level },
    });
    if (students.length > countOfFriends) {
      return students.slice(0, countOfFriends);
    }
    //return await this.studentRepository.find({where: {course: course}}).then({where: {level: level}});
    // .createQueryBuilder('student')
    // .where('student.course = :course', { course })
    // .limit(countOfFriends)
    // .getMany();
  }

  async getStudentMoney(id: number) {
    const user = await this.studentRepository.findOne({
      where: { id: Number(id) },
    });
    return user.money;
  }

  async withdrawBalance(id: number, money: number) {
    if (money > 0) {
      const user = await this.studentRepository.findOne({ where: { id: id } });
      if (user.money >= money) {
        user.money = Number(user.money) - Number(money);
        await this.studentRepository.update({ id }, user);
        return true;
      }
    }
    return false;
  }

  async replenishmentBalance(id: number, money: number) {
    console.log(money);
    if (money > 0) {
      const user = await this.studentRepository.findOne({ where: { id: id } });
      user.money = Number(user.money) + Number(money);
      await this.studentRepository.update({ id }, user);
      return true;
    }
    console.log('negative value');
    return false;
  }

  async addEvent(event: Event, id: number) {
    const student = await this.studentRepository.findOne({ where: { id: id } });
    student.completeEvents.push(event);
    await this.studentRepository.update({ id }, student);
  }

  async addProduct(product: Product, id: number) {
    const student = await this.studentRepository.findOne({ where: { id: id } });
    student.products.push(product);
    await this.studentRepository.update({ id }, student);
  }
}
