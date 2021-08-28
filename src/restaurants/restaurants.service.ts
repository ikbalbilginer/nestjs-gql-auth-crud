import { Injectable } from '@nestjs/common';
import { v4 as uuidv4 } from 'uuid';
import { GetRestaurantArgs } from './dto/args/get-restaurant.args';
import { CreateRestaurantInput } from './dto/input/create-restaurant.input';
import { DeleteRestaurantInput } from './dto/input/delete-restaurant.input';
import { UpdateRestaurantInput } from './dto/input/update-restaurant.input';
import { Restaurant } from './models/restaurant';
///
import admin from '../auth/firebase-admin';

const db = admin.firestore();

@Injectable()
export class RestaurantsService {

  public async createRestaurant(
    createRestaurantData: CreateRestaurantInput,
  ): Promise<any> {
    const restaurant: Restaurant = {
      restaurantId: uuidv4(),
      ...createRestaurantData,
    };

    try {
      await db.collection('restaurants').doc().set(restaurant);
      return restaurant;
    } catch (err) {
      console.log('Create restaurant error : ', err);
    }
  }

  public async getRestaurant(
    getRestaurantArgs: GetRestaurantArgs,
  ): Promise<any> {
    const rest = await db
      .collection('restaurants')
      .where('restaurantId', '==', getRestaurantArgs.restaurantId)
      .get();

    if (rest.docs[0]) {
      return rest.docs[0].data();
    }
  }

  public async updateRestaurant(
    updateRestaurantData: UpdateRestaurantInput,
  ): Promise<any> {
    const rest = await db
      .collection('restaurants')
      .where('restaurantId', '==', updateRestaurantData.restaurantId)
      .get();

    if (rest.docs[0]) {
      const res2 = await db.collection('restaurants').doc(rest.docs[0].id).set({
        ...rest.docs[0].data(),
        name: updateRestaurantData.name,
        location: updateRestaurantData.location,
      }); 

      return res2;
    }
  }


  public async getRestaurants(): Promise<any> {
    const querySnapshot = await db.collection('restaurants').get();
    const documents: Restaurant[] = querySnapshot.docs.map((doc) => {
      return doc.data() as Restaurant;
    });

    return documents;
  }

  public async deleteRestaurant(
    deleteRestaurantData: DeleteRestaurantInput,
  ): Promise<any> {

    const rest = await db
      .collection('restaurants')
      .where('restaurantId', '==', deleteRestaurantData.restaurantId)
      .get();

    if (rest.docs[0]) {
      await db.collection('restaurants').doc(rest.docs[0].id).delete();
      return deleteRestaurantData;
    }
  }
}
