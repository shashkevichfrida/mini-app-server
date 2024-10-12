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

        // IMPLEMENT ME
    }

    // no in front
    async getRandomStudents() {
        // IMPLEMENT ME
    }

    async getStudentEvents(id: string) {
        // IMPLEMENT ME
    }

    // no in front
    async getStudentRateByCourse(id: string, level: string) {
        // IMPLEMENT ME
    }

    async getStudentMoney(id: string) {
        // IMPLEMENT ME
    }
    
}
