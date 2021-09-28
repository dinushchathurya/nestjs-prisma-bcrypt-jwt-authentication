import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '.prisma/client';
export declare class UsersController {
    private readonly usersService;
    constructor(usersService: UsersService);
    createUser(createUserDto: CreateUserDto): Promise<User>;
}
