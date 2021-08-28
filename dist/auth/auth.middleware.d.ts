import { NestMiddleware } from '@nestjs/common';
import { Request, Response } from 'express';
export declare class AuthMiddleware implements NestMiddleware {
    private defaultApp;
    constructor();
    use(req: Request, res: Response, next: Function): void;
    private accessDenied;
}
