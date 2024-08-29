import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import * as bcrypt from 'bcrypt';
import { UserService } from '../user/user.service';
import { User } from '@prisma/client';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { RefreshTokenDto } from './dto/refresh-token.dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class AuthService {
  constructor(
    private readonly jwtService: JwtService,
    private readonly userService: UserService,
  ) {}

  // Validate user credentials
  async validateUser(loginDto: LoginDto): Promise<User | null> {
    const { email, password } = loginDto;
    const user = await this.findUserByEmail(email);
    if (user && await bcrypt.compare(password, user.password)) {
      return user;
    }
    throw new UnauthorizedException('Invalid credentials');
  }

  // Login method
  async login(user: User): Promise<{ access_token: string; refresh_token: string }> {
    const payload = { username: user.email, sub: user.id };
    const accessToken = this.jwtService.sign(payload, { expiresIn: '15m' });
    const refreshToken = this.jwtService.sign(payload, { expiresIn: '7d' });

    return {
      access_token: accessToken,
      refresh_token: refreshToken,
    };
  }

  // Register method
  async register(registerDto: RegisterDto): Promise<User> {
    const { email, password } = registerDto;
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await this.userService.createUser({
      ...registerDto,
      password: hashedPassword,
      
    });
    return user;
  }

  // Refresh token method
  async refreshToken(refreshTokenDto: RefreshTokenDto): Promise<{ access_token: string }> {
    try {
      const { refreshToken } = refreshTokenDto;
      const payload = this.jwtService.verify(refreshToken);
      const newAccessToken = this.jwtService.sign(
        { username: payload.username, sub: payload.sub },
        { expiresIn: '15m' },
      );

      return {
        access_token: newAccessToken,
      };
    } catch (e) {
      throw new UnauthorizedException('Invalid refresh token');
    }
  }

  // Helper method to find a user by email
  private async findUserByEmail(email: string): Promise<User | null> {
    return this.userService.findOneByEmail(email);
  }
}
