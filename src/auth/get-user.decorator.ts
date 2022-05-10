import { createParamDecorator, ExecutionContext } from '@nestjs/common';
import { User } from './user.entity';

export const GetUser = createParamDecorator(
  (_data, ctx: ExecutionContext): User => {
    // return the value of the parameter that is decorated
    // get the request body
    const req = ctx.switchToHttp().getRequest();

    return req.user;
  },
);
