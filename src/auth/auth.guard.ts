import {
  Injectable,
  CanActivate,
  ExecutionContext,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { GqlExecutionContext } from '@nestjs/graphql';

import admin from './firebase-admin'


@Injectable()
export class AuthGuard implements CanActivate {
  private defaultApp: any;

  constructor() {
    this.defaultApp = admin;
  }

  async canActivate(context: ExecutionContext): Promise<boolean> {
    const ctx = GqlExecutionContext.create(context).getContext();
    const request = ctx.request;
    const Authorization = request.get('Authorization');

    if (!Authorization) {
      console.log('No authorization header.')
      return false;
    } else {
      const validated = await this.validateToken(Authorization);
      ctx.email = validated;
      console.log('Auth header exists.');
      return true;
    }

  }

  async validateToken(auth: string) {
    if (auth.split(' ')[0] !== 'Bearer') {
      throw new HttpException('Invalid token', HttpStatus.UNAUTHORIZED);
    }
    const token = auth.split(' ')[1];

    // firebase decode
    this.defaultApp
      .auth()
      .verifyIdToken(token)
      .then((decodedToken) => {
        return decodedToken?.email;
      })
      .catch((err) => {
        const message = 'Token error: ' + (err.message || err.name);
        throw new HttpException(message, HttpStatus.UNAUTHORIZED);
      });
  }
}
