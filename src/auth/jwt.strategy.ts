import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Strategy, ExtractJwt } from "passport-jwt";
import { PrismaService } from "src/prisma/prisma.service";
import { userInfo } from "os";

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy) {

    constructor (private readonly prismaService:PrismaService) { 
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            ignoreExpiration: false,
            secretOrKey: process.env.JWT_SECRET
        });
    } 

    async validate(payload: { username:string }) {
        const user = await this.prismaService.user.findUnique({
            where: {
                username: payload.username
            }
        })

        return user;
    }

}