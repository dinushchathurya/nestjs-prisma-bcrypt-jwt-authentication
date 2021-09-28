import { User } from ".prisma/client";
export declare class AuthResponse {
    token: string;
    user: User;
}
