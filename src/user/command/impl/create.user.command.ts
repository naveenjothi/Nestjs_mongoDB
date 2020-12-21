import { UserCreateInput } from "../input/create.user.input";

export class CreateUserCommand {
   constructor(
      public readonly data: UserCreateInput,
      public readonly ctx: string | any
   ) {}
}
