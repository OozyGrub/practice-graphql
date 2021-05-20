import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CatInput } from './input/cat.input';
import { Cat } from './interface/cats.interface';

export class CatsService {
  constructor(@InjectModel('Cat') private catModel: Model<Cat>) {}

  async create(createCatDto: CatInput) {
    const createdCat = new this.catModel(createCatDto);
    return await createdCat.save();
  }

  async findAll() {
    return await this.catModel.find().exec();
  }
}
