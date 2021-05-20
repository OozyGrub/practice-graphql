import { CatsModule } from './cats/cats.module';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { GraphQLModule } from '@nestjs/graphql';
import { join } from 'path';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: join('schema.gql'),
      sortSchema: true,
      debug: false,
      playground: true,
    }),
    CatsModule,
    MongooseModule.forRoot('mongodb://localhost:27017'),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
