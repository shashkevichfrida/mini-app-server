import sqlite3 from 'sqlite3';
import { open } from 'sqlite';

export class StudentService {
    private dbPath: any;
    constructor(dbPath) {
        this.dbPath = dbPath;
    }

    async getDb() {
        return open({
            filename: this.dbPath,
            driver: sqlite3.Database
        });
    }

    async getOne(id) {
        const db = await this.getDb();
        return db.get('SELECT * FROM Users WHERE id = ?', id);
    }

    async getRandomStudents(limit = 5) {
        const db = await this.getDb();
        return db.all('SELECT * FROM Users ORDER BY RANDOM() LIMIT ?', limit);
    }

    async getStudentEvents(id) {
        const db = await this.getDb();
        const student = await this.getOne(id);
        if (!student) return null;

        return {
            sport: student.sport,
            club: student.club,
            mer: student.mer,
            merCategories: student.merCategories
        };
    }

    async getStudentRateByCourse(course) {
        const db = await this.getDb();
        return db.all('SELECT * FROM Users WHERE course = ? ORDER BY money DESC', course);
    }

    async getStudentMoney(id) {
        const db = await this.getDb();
        const result = await db.get('SELECT money FROM Users WHERE id = ?', id);
        return result ? result.money : null;
    }
}