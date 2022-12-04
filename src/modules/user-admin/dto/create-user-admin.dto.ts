import { IsNotEmpty, IsString, IsEmail, Length } from 'class-validator';
import { IsMatch } from 'src/decorators/match.decorator';

export class CreateUserAdminDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @Length(6, 20)
  password: string;

  @IsNotEmpty()
  @IsMatch('password')
  passwordConfirmation: string;
}
