import { User } from ".prisma/client";

export class AuthResponse {
    token: string;
    user: User
}