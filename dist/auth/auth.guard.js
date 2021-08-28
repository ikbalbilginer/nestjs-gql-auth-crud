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
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthGuard = void 0;
const common_1 = require("@nestjs/common");
const graphql_1 = require("@nestjs/graphql");
const firebase_admin_1 = require("./firebase-admin");
let AuthGuard = class AuthGuard {
    constructor() {
        this.defaultApp = firebase_admin_1.default;
    }
    async canActivate(context) {
        const ctx = graphql_1.GqlExecutionContext.create(context).getContext();
        const request = ctx.request;
        const Authorization = request.get('Authorization');
        if (!Authorization) {
            console.log('No authorization header.');
            return false;
        }
        else {
            const validated = await this.validateToken(Authorization);
            ctx.email = validated;
            console.log('Auth header exists.');
            return true;
        }
    }
    async validateToken(auth) {
        if (auth.split(' ')[0] !== 'Bearer') {
            throw new common_1.HttpException('Invalid token', common_1.HttpStatus.UNAUTHORIZED);
        }
        const token = auth.split(' ')[1];
        this.defaultApp
            .auth()
            .verifyIdToken(token)
            .then((decodedToken) => {
            return decodedToken === null || decodedToken === void 0 ? void 0 : decodedToken.email;
        })
            .catch((err) => {
            const message = 'Token error: ' + (err.message || err.name);
            throw new common_1.HttpException(message, common_1.HttpStatus.UNAUTHORIZED);
        });
    }
};
AuthGuard = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [])
], AuthGuard);
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=auth.guard.js.map