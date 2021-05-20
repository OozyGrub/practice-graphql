import { CatType } from './dto/create-cat.dto';
import { CatsService } from './cats.service';
import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CatInput } from './input/cat.input';

@Resolver()
export class CatsResolver {
  constructor(private catsService: CatsService) {}

  @Query(() => String)
  async hello() {
    return 'hello';
  }

  @Query(() => [CatType])
  async cats() {
    return this.catsService.findAll();
  }

  @Mutation(() => CatType)
  async createCat(@Args('input') input: CatInput) {
    return this.catsService.create(input);
  }
}
