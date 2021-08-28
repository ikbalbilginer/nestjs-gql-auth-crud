"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RestaurantsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const common_1 = require("@nestjs/common");
const get_restaurant_args_1 = require("./dto/args/get-restaurant.args");
const create_restaurant_input_1 = require("./dto/input/create-restaurant.input");
const delete_restaurant_input_1 = require("./dto/input/delete-restaurant.input");
const update_restaurant_input_1 = require("./dto/input/update-restaurant.input");
const restaurant_1 = require("./models/restaurant");
const restaurants_service_1 = require("./restaurants.service");
const auth_guard_1 = require("../auth/auth.guard");
let RestaurantsResolver = class RestaurantsResolver {
    constructor(restaurantsService) {
        this.restaurantsService = restaurantsService;
    }
    async createRestaurant(createRestaurantData) {
        return this.restaurantsService.createRestaurant(createRestaurantData);
    }
    getRestaurant(getrestaurantArgs) {
        return this.restaurantsService.getRestaurant(getrestaurantArgs);
    }
    updateRestaurant(updateRestaurantData) {
        return this.restaurantsService.updateRestaurant(updateRestaurantData);
    }
    getRestaurants() {
        return this.restaurantsService.getRestaurants();
    }
    deleteRestaurant(deleteRestaurantData) {
        return this.restaurantsService.deleteRestaurant(deleteRestaurantData);
    }
};
__decorate([
    graphql_1.Mutation(() => restaurant_1.Restaurant),
    __param(0, graphql_1.Args('createRestaurantData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_restaurant_input_1.CreateRestaurantInput]),
    __metadata("design:returntype", Promise)
], RestaurantsResolver.prototype, "createRestaurant", null);
__decorate([
    graphql_1.Query(() => restaurant_1.Restaurant, { name: 'restaurant', nullable: true }),
    __param(0, graphql_1.Args()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [get_restaurant_args_1.GetRestaurantArgs]),
    __metadata("design:returntype", Promise)
], RestaurantsResolver.prototype, "getRestaurant", null);
__decorate([
    graphql_1.Mutation(() => restaurant_1.Restaurant),
    __param(0, graphql_1.Args('updateRestaurantData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [update_restaurant_input_1.UpdateRestaurantInput]),
    __metadata("design:returntype", Promise)
], RestaurantsResolver.prototype, "updateRestaurant", null);
__decorate([
    graphql_1.Query(() => [restaurant_1.Restaurant], { name: 'restaurants', nullable: true }),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], RestaurantsResolver.prototype, "getRestaurants", null);
__decorate([
    graphql_1.Mutation(() => restaurant_1.Restaurant),
    __param(0, graphql_1.Args('deleteRestaurantData')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [delete_restaurant_input_1.DeleteRestaurantInput]),
    __metadata("design:returntype", Promise)
], RestaurantsResolver.prototype, "deleteRestaurant", null);
RestaurantsResolver = __decorate([
    graphql_1.Resolver(() => restaurant_1.Restaurant),
    common_1.UseGuards(new auth_guard_1.AuthGuard()),
    __metadata("design:paramtypes", [restaurants_service_1.RestaurantsService])
], RestaurantsResolver);
exports.RestaurantsResolver = RestaurantsResolver;
//# sourceMappingURL=restaurants.resolver.js.map