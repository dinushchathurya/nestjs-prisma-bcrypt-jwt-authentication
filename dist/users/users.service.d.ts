import { PrismaService } from 'src/prisma/prisma.service';
import { User } from '.prisma/client';
import { CreateUserDto } from './../auth/dto/register-user.dto';
export declare class UsersService {
    private readonly prismaService;
    constructor(prismaService: PrismaService);
    getUser(username: string): Promise<User>;
    createUser(data: CreateUserDto): Promise<User>;
}
