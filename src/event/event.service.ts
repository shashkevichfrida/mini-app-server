import { EventDto } from './event.dto';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Event } from './event.entity';

@Injectable()
export class EventService {
  constructor(
    @InjectRepository(Event)
    private eventRepository: Repository<Event>,
  ) {}

  // async create(data: EventDto) {
  //   console.log(data);
  //
  //   const event = this.eventRepository.create(data);
  //   await this.eventRepository.save(event);
  //   return event;
  // }

  async delete(id: number) {
    // await this.eventRepository.delete({ id });
    // return { deleted: true };
  }

  async getByCategory(category: string) {
    return await this.eventRepository.find({ where: { category: category } });
  }

  async getAll() {
    return await this.eventRepository.find();
  }

  async update(id: number, data: Partial<EventDto>) {
    //await this.eventRepository.update({ id }, data);
  }

  async getById(id: number) {
    return await this.eventRepository.findOne({ where: { id_event: id } });
  }
}
