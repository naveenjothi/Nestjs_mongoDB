import { InternalServerErrorException } from "@nestjs/common";
import { IQueryHandler, QueryHandler } from "@nestjs/cqrs";
import { UserSchema as UserAlais } from "../../model/user.model";
import { PrismaService } from "src/user/prisma.service";
import { GetUserQuery } from "../impl/get.user.query";

@QueryHandler(GetUserQuery)
export class GetUserQueryHandler implements IQueryHandler<GetUserQuery> {
   constructor(private prisma: PrismaService) {}
   async execute(command: GetUserQuery): Promise<UserAlais[]> {
      try {
         const { searchstring } = command.data;
         const result = await this.prisma.user.findMany({
            where: {
               name: {
                  startsWith: searchstring,
               },
            },
         });
         return result;
      } catch (error) {
         throw new InternalServerErrorException(error);
      }
   }
}
