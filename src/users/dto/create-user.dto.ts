import {IsNotEmpty} from "class-validator";
import { ApiProperty } from "@nestjs/swagger";

export class CreateUserDto {
  @ApiProperty({example: 'username'})
  @IsNotEmpty()
  readonly username: string;

  @IsNotEmpty()
  @ApiProperty({example: 'password'})
  readonly password: string;

  @IsNotEmpty()
  @ApiProperty({example: 'email'})
  readonly email: string;
}
