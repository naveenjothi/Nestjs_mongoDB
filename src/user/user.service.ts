import { Injectable } from "@nestjs/common";
import { CommandBus, QueryBus } from "@nestjs/cqrs";
import { CreateUserCommand } from "./command/impl/create.user.command";
import { UserCreateInput } from "./command/input/create.user.input";
import { UserSchema } from "./model/user.model";
import { GetUserQuery } from "./query/impl/get.user.query";
import { GetUserQueryInput } from "./query/input/get.user.query.input";

@Injectable()
export class UserService {
   constructor(
      private readonly commandBus: CommandBus,
      private readonly queryBus: QueryBus
   ) {}

   async createUser(
      data: UserCreateInput,
      ctx: string | any
   ): Promise<UserSchema> {
      return this.commandBus.execute(new CreateUserCommand(data, ctx));
   }

   async getUser(
      data: GetUserQueryInput,
      ctx: string | any
   ): Promise<UserSchema[]> {
      return this.queryBus.execute(new GetUserQuery(data, ctx));
   }
}
