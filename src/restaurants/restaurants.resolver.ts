import { Resolver, Query, Args, Mutation } from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';

import { GetRestaurantArgs } from './dto/args/get-restaurant.args';
import { CreateRestaurantInput } from './dto/input/create-restaurant.input';
import { DeleteRestaurantInput } from './dto/input/delete-restaurant.input';
import { UpdateRestaurantInput } from './dto/input/update-restaurant.input';
import { Restaurant } from './models/restaurant';
import { RestaurantsService } from './restaurants.service';
import {AuthGuard} from '../auth/auth.guard';

@Resolver(() => Restaurant)
@UseGuards(new AuthGuard())
// I added guard here, for all route in this file
export class RestaurantsResolver {
    constructor(private readonly restaurantsService: RestaurantsService) {}

    @Mutation(() => Restaurant)
    async createRestaurant(@Args('createRestaurantData') createRestaurantData: CreateRestaurantInput): Promise<Restaurant> {
        return this.restaurantsService.createRestaurant(createRestaurantData);
    }

    @Query(() => Restaurant, { name: 'restaurant', nullable: true })
    getRestaurant(@Args() getrestaurantArgs: GetRestaurantArgs): Promise<Restaurant> {
        return this.restaurantsService.getRestaurant(getrestaurantArgs);
    }

    @Mutation(() => Restaurant)
    updateRestaurant(@Args('updateRestaurantData') updateRestaurantData: UpdateRestaurantInput): Promise<Restaurant> {
        return this.restaurantsService.updateRestaurant(updateRestaurantData);
    }

    @Query(() => [Restaurant], { name: 'restaurants', nullable: true })
    getRestaurants(): Promise<Restaurant[]> {
        return this.restaurantsService.getRestaurants();
    }

    @Mutation(() => Restaurant)
    deleteRestaurant(@Args('deleteRestaurantData') deleteRestaurantData: DeleteRestaurantInput): Promise<Restaurant> {
        return this.restaurantsService.deleteRestaurant(deleteRestaurantData);
    }

}