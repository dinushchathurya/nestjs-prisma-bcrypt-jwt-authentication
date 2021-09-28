import { AuthService } from './auth.service';
import { LoginDto } from './dto/login-user.dto';
import { AuthResponse } from './dto/auth-response.dto';
import { User } from '.prisma/client';
import { CreateUserDto } from './dto/register-user.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    login(loginDto: LoginDto): Promise<AuthResponse>;
    register(createUserDto: CreateUserDto): Promise<AuthResponse>;
    getLoggedUser(user: User): User;
}
