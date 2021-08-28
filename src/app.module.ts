import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';
import { RestaurantsModule } from './restaurants/restaurants.module';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      context: (({ req }) => {
        return { request: req }
     }),
    }),
    RestaurantsModule,
  ],
  controllers: [],
  providers: [],
})

export class AppModule {
}
