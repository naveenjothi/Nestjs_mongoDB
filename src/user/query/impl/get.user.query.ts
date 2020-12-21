import { Prisma } from "@prisma/client";
import { GetUserQueryInput } from "../input/get.user.query.input";

export class GetUserQuery {
   constructor(
      public readonly data: GetUserQueryInput,
      public readonly ctx: string | any
   ) {}
}
