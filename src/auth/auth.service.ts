import { Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { LoginDto } from './dto/login-user.dto';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { AuthResponse } from './dto/auth-response.dto';
import { CreateUserDto } from './dto/register-user.dto';
import { UsersService } from 'src/users/users.service';


@Injectable()
export class AuthService {

    constructor(private readonly prismaService: PrismaService, private jwtService: JwtService, private readonly usersService: UsersService) { }

    async login(loginDto:LoginDto): Promise<AuthResponse> {
        const { username, password } = loginDto;

        const user = await this.prismaService.user.findUnique({
            where: { username }
        });

        if(!user) {
            throw new NotFoundException('user not found');
        }

        const validatePassword = await bcrypt.compare(password, user.password);

        if (!validatePassword) {
            throw new UnauthorizedException('invalid password');
        }

        return {
            token: this.jwtService.sign({
                username
            }),
            user
        }
    }

    async register(createUserDto: CreateUserDto): Promise<AuthResponse> {
        const user = await this.usersService.createUser(createUserDto);
        return {
            token: this.jwtService.sign({ username: user.username }),
            user
        }
    }
}
