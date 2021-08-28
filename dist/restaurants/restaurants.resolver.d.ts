import { GetRestaurantArgs } from './dto/args/get-restaurant.args';
import { CreateRestaurantInput } from './dto/input/create-restaurant.input';
import { DeleteRestaurantInput } from './dto/input/delete-restaurant.input';
import { UpdateRestaurantInput } from './dto/input/update-restaurant.input';
import { Restaurant } from './models/restaurant';
import { RestaurantsService } from './restaurants.service';
export declare class RestaurantsResolver {
    private readonly restaurantsService;
    constructor(restaurantsService: RestaurantsService);
    createRestaurant(createRestaurantData: CreateRestaurantInput): Promise<Restaurant>;
    getRestaurant(getrestaurantArgs: GetRestaurantArgs): Promise<Restaurant>;
    updateRestaurant(updateRestaurantData: UpdateRestaurantInput): Promise<Restaurant>;
    getRestaurants(): Promise<Restaurant[]>;
    deleteRestaurant(deleteRestaurantData: DeleteRestaurantInput): Promise<Restaurant>;
}
