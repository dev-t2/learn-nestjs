import { Injectable, Logger, NestMiddleware } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';

@Injectable()
export class LoggerMiddleware implements NestMiddleware {
  private readonly logger = new Logger(LoggerMiddleware.name);

  use(req: Request, res: Response, next: NextFunction) {
    const { ip, method, originalUrl } = req;
    const { statusCode } = res;

    res.on('finish', () => {
      this.logger.log(`${ip} ${method} ${originalUrl} ${statusCode}`);
    });

    next();
  }
}
