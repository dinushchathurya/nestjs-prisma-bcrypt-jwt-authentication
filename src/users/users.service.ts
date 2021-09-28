import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '.prisma/client';

@Injectable()
export class UsersService {

    constructor(private readonly prismaService:PrismaService) {}

    async getUser(username: string): Promise<User> {

        const user = await this.prismaService.user.findUnique({
            where: { username }
        });

        if(!user) {
            throw new NotFoundException();
        }

        delete user.password;
        return user;
        
    }
}
