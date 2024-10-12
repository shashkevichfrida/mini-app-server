import { InjectRepository } from '@nestjs/typeorm';
import { Injectable } from '@nestjs/common';
import { Student } from './student.entity';
import { Repository } from 'typeorm';

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
    course: string,
    level: string,
    countOfFriends: number,
  ) {
    return await this.studentRepository
      .createQueryBuilder('student')
      .where('student.course = :course', { course })
      .limit(countOfFriends)
      .getMany();
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
        user.money = user.money - money;
        await this.studentRepository.update({ id }, user);
        return true;
      }
    }
    return false;
  }

  async replenishmentBalance(id: number, money: number) {
    if (money > 0) {
      const user = await this.studentRepository.findOne({ where: { id: id } });
      user.money = user.money + money;
      await this.studentRepository.update({ id }, user);
      return true;
    }
    return false;
  }
}
