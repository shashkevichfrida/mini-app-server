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
        return this.studentRepository.findOne({ where : {id: (Math.floor(Math.random() * 1000 )) } })
    }

    // no in front
   async getRandomStudents() {
        // IMPLEMENT ME
    }

    async getStudentEvents(id: number) {
        
        const user = await this.studentRepository.findOne({ where: { id: id } });
        return user.mer;
    }

    // no in front
    async getStudentRateByCourse(id: string, level: string) {
        // IMPLEMENT ME
    }

    async getStudentMoney(id: number) {
        const user = await this.studentRepository.findOne({ where: { id: id } });
        return user.money;
    }
    
}
