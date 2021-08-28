import { GetRestaurantArgs } from './dto/args/get-restaurant.args';
import { CreateRestaurantInput } from './dto/input/create-restaurant.input';
import { DeleteRestaurantInput } from './dto/input/delete-restaurant.input';
import { UpdateRestaurantInput } from './dto/input/update-restaurant.input';
export declare class RestaurantsService {
    private restaurants;
    createRestaurant(createRestaurantData: CreateRestaurantInput): Promise<any>;
    getRestaurant(getRestaurantArgs: GetRestaurantArgs): Promise<any>;
    updateRestaurant(updateRestaurantData: UpdateRestaurantInput): Promise<any>;
    getRestaurants(): Promise<any>;
    deleteRestaurant(deleteRestaurantData: DeleteRestaurantInput): Promise<any>;
}
