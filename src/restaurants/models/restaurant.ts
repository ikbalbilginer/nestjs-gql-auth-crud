import { Field, Int, ObjectType } from "@nestjs/graphql";

@ObjectType()
export class Restaurant {
    @Field({nullable: true})
    restaurantId: string;

    @Field({nullable: true})
    name: string;

    @Field({nullable: true})
    location: string;
}