import { ApiProperty } from "@nestjs/swagger";
import { IsEmail, IsEnum, IsNotEmpty, IsOptional, IsString, MinLength } from "class-validator";

export class CreateUserDto {
    @ApiProperty({ description: 'Email del usuario', example: 'user@example.com' })
    @IsEmail()
    @IsNotEmpty()
    email: string;

    @ApiProperty({ description: 'Contraseña del usuario', example: '123456' })
    @IsString()
    @IsNotEmpty()
    @MinLength(6)
    password: string;

    @ApiProperty({ description: 'Rol del usuario', example: 'USER' })
    @IsString()
    @IsNotEmpty()
    @IsEnum(['USER', 'ADMIN', 'SUPER'])
    role: 'USER' | 'ADMIN' | 'SUPER';
}
