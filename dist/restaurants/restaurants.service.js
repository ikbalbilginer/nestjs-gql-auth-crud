"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsService = void 0;
const common_1 = require("@nestjs/common");
const uuid_1 = require("uuid");
const firebase_admin_1 = require("../auth/firebase-admin");
const db = firebase_admin_1.default.firestore();
let RestaurantsService = class RestaurantsService {
    constructor() {
        this.restaurants = [];
    }
    async createRestaurant(createRestaurantData) {
        const restaurant = Object.assign({ restaurantId: uuid_1.v4() }, createRestaurantData);
        try {
            await db.collection('restaurants').doc().set(restaurant);
            return restaurant;
        }
        catch (err) {
            console.log('Create restaurant error : ', err);
        }
    }
    async getRestaurant(getRestaurantArgs) {
        const rest = await db
            .collection('restaurants')
            .where('restaurantId', '==', getRestaurantArgs.restaurantId)
            .get();
        if (rest.docs[0]) {
            return rest.docs[0].data();
        }
    }
    async updateRestaurant(updateRestaurantData) {
        const rest = await db
            .collection('restaurants')
            .where('restaurantId', '==', updateRestaurantData.restaurantId)
            .get();
        if (rest.docs[0]) {
            const res2 = await db.collection('restaurants').doc(rest.docs[0].id).set(Object.assign(Object.assign({}, rest.docs[0].data()), { name: updateRestaurantData.name, location: updateRestaurantData.location }));
            return res2;
        }
    }
    async getRestaurants() {
        const querySnapshot = await db.collection('restaurants').get();
        const documents = querySnapshot.docs.map((doc) => {
            return doc.data();
        });
        return documents;
    }
    async deleteRestaurant(deleteRestaurantData) {
        const rest = await db
            .collection('restaurants')
            .where('restaurantId', '==', deleteRestaurantData.restaurantId)
            .get();
        if (rest.docs[0]) {
            await db.collection('restaurants').doc(rest.docs[0].id).delete();
            return deleteRestaurantData;
        }
    }
};
RestaurantsService = __decorate([
    common_1.Injectable()
], RestaurantsService);
exports.RestaurantsService = RestaurantsService;
//# sourceMappingURL=restaurants.service.js.map