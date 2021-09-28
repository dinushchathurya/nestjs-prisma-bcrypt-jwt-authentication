import { IsString, Length } from 'class-validator';

export class CreateUserDto {
    @IsString()
    @Length(5, 10)
    username: string;

    @IsString()
    @Length(6, 12)
    password: string;

    @IsString()
    @Length(5, 10)
    firstName:string;
    
    @IsString()
    @Length(5, 10)
    lastName: string;
}