import { Field, ID, Int, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class CatType {
  @Field(() => ID)
  id: string;
  @Field()
  readonly name: string;
  @Field(() => Int)
  readonly age: string;
  @Field()
  readonly breed: string;
}
