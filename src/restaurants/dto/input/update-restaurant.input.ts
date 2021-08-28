import { Field, InputType, Int } from '@nestjs/graphql';
import { IsNotEmpty, IsOptional } from 'class-validator';

@InputType()
export class UpdateRestaurantInput {
    @Field({ nullable: true })
    @IsNotEmpty()
    restaurantId: string;

    @Field({ nullable: true })
    @IsOptional()
    @IsNotEmpty()
    name: string;

    @Field({ nullable: true })
    @IsOptional()
    location: string;
}