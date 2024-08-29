import { ApiProperty } from '@nestjs/swagger';


export class RefreshTokenDto {
  @ApiProperty({ example: 'refresh_token_here', description: 'The refresh token' })
  refreshToken: string;
}