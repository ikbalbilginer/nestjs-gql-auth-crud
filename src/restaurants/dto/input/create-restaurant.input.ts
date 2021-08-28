import { Field, InputType } from '@nestjs/graphql';
import { IsEmail, IsNotEmpty } from 'class-validator';

@InputType()
export class CreateRestaurantInput {
    @Field()
    @IsNotEmpty()
    location: string;

    @Field()
    @IsNotEmpty()
    name: string;
}