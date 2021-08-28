import { Field, InputType } from '@nestjs/graphql';
import { IsNotEmpty } from 'class-validator';

@InputType()
export class CreateRestaurantInput {
    @Field()
    @IsNotEmpty()
    location: string;

    @Field()
    @IsNotEmpty()
    name: string;
}