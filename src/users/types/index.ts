import { ApiProperty } from "@nestjs/swagger";

export class LoginUserRequest {
  @ApiProperty({example: 'UserName'})
  username: string

  @ApiProperty({example: 'Password'})
  password: string
}

export class LoginUserResponse {
  @ApiProperty({example: {user: {
    userId: 1,
    username: 'Username',
    password: 'Password'
      }}})
  user: {
    userId: number,
    username: string,
    password: string
  };

  @ApiProperty({example: 'Logged In'})
  msg: string
}

export class LogOutUserResponse {
  @ApiProperty({example: 'Session has ended.'})
  msg: string
}

export class LoginCheckResponse {
  @ApiProperty({example: 1})
  userId: number

  @ApiProperty({example: 'Username'})
  username: string

  @ApiProperty({example: 'email'})
  email: string
}

export class SignupResponse {
  @ApiProperty({example: 1})
  userId: number

  @ApiProperty({example: 'Username'})
  username: string

  @ApiProperty({example: 'HASH'})
  password: string

  @ApiProperty({example: 'email'})
  email: string

  @ApiProperty({example: 'Date'})
  updatedAt: string

  @ApiProperty({example: 'Date'})
  createdAt: string
}
