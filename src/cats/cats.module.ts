import { CatsService } from './cats.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsResolver } from './cats.resolver';
import { Module } from '@nestjs/common';
import { CatSchema } from './cats.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Cat', schema: CatSchema }])],
  providers: [CatsResolver, CatsService],
})
export class CatsModule {}
