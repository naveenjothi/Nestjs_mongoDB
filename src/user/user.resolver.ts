import { Args, Context, Mutation, Query, Resolver } from "@nestjs/graphql";
import { UserCreateInput } from "./command/input/create.user.input";
import { UserSchema } from "./model/user.model";
import { GetUserQueryInput } from "./query/input/get.user.query.input";
import { UserService } from "./user.service";

@Resolver()
export class UserResolver {
   constructor(private userService: UserService) {}

   @Mutation(() => UserSchema, {
      name: "CreateUser",
      description: "Create Author Field",
   })
   async createUser(
      @Args("data") data: UserCreateInput,
      @Context() ctx: string | any
   ): Promise<UserSchema> {
      return await this.userService.createUser(data, ctx);
   }

   @Query(() => [UserSchema])
   async getUser(
      @Args("data")
      data: GetUserQueryInput,
      @Context() ctx: string | any
   ): Promise<UserSchema[]> {
      return await this.userService.getUser(data, ctx);
   }
}
