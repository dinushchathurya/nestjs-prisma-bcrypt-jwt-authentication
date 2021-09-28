import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '.prisma/client';

@Controller('users')
export class UsersController {

    constructor (private readonly usersService:UsersService) { }

    @Post()
    createUser(@Body() createUserDto:CreateUserDto): Promise<User> {
        return this.usersService.createUser(createUserDto);
    }
}
