import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class LoginUserDto {
    @ApiProperty({ description: 'Email del usuario', example: 'user@example.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: 'Contraseña del usuario', example: '123456' })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

}
