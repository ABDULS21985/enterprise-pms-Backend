import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, User } from '@prisma/client';
import { CreateUserDto, UpdateUserDto, UserDto } from './dto';
import { v4 as uuidv4 } from 'uuid';

@Injectable()
export class UserService {
  constructor(private prisma: PrismaService) {}

  async findAll(): Promise<UserDto[]> {
    const users = await this.prisma.user.findMany();
    return users.map(user => this.toUserDto(user));
  }

  async findUserById(
    id?: string,
    userId?: string,
    uniqueId?: string,
    email?: string
  ): Promise<UserDto | null> {
    if (!id && !userId && !uniqueId && !email) {
      throw new Error('At least one unique identifier is required to find a user');
    }
  
    const user = await this.prisma.user.findUnique({
      where: {
        id,
        userId,
        uniqueId,
        email,

      },
      select: {
        id: true,
        email: true,
        firstName: true,
        lastName: true,
        middleName: true,
        department: true,
        division: true,
        office: true,
        jobTitle: true,
        location: true,
        status: true,
        supervisorId: true,
        headOfOfficeId: true,
        dateOfHire: true,
        userId: true,
        uniqueId: true,
        password: true,
        orgUnitId: true,
        dateOfTermination: true,
        mobileNumber: true,
        refreshToken: true,
        createdAt: true,
        updatedAt: true,
      },
    });
  
    if (!user) {
      throw new Error('User not found');
    }
  
    return this.toUserDto(user);
  }
  

  async createUser(data: CreateUserDto): Promise<User> {
    return this.prisma.user.create({
      data: {
        id: uuidv4(),
        userId: uuidv4(),
        uniqueId: uuidv4(),
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        jobTitle: data.jobTitle,
        department: data.department,
        division: data.division,
        office: data.office || '',
        location: data.location,
        password: data.password,
        dateOfHire: data.dateOfHire,
        status: data.status || 'active',
        supervisorId: data.supervisorId || null,
        headOfOfficeId: data.headOfOfficeId || null,
        orgUnitId: data.orgUnitId || null,
        dateOfTermination: null, 
        refreshToken: null, 
        createdAt: new Date(),
        updatedAt: new Date(), 
      },
    });
  }

  async updateUser(id: string, data: UpdateUserDto): Promise<User> {
    return this.prisma.user.update({
      where: { id },
      data: {
        email: data.email,
        firstName: data.firstName,
        lastName: data.lastName,
        jobTitle: data.jobTitle,
        department: data.department,
        division: data.division,
        office: data.office || '',
        location: data.location,
        password: data.password,
        dateOfHire: data.dateOfHire,
        status: data.status || 'active',
        supervisorId: data.supervisorId || null,
        headOfOfficeId: data.headOfOfficeId || null,
        orgUnitId: data.orgUnitId || null,

        updatedAt: new Date(), 
      },
    });
  }

  async deleteUser(id: string): Promise<UserDto> {
    const deletedUser = await this.prisma.user.delete({
      where: { id },
    });
    return this.toUserDto(deletedUser);
  }

  public toUserDto(user: User): UserDto {
    return {
      id: user.id,
      userId: user.userId,
      uniqueId: user.uniqueId,
      email: user.email,
      firstName: user.firstName,
      lastName: user.lastName,
      jobTitle: user.jobTitle,
      department: user.department,
      division: user.division,
      office: user.office,
      location: user.location,
      password: user.password,
      dateOfHire: user.dateOfHire,
      status: user.status,
      supervisorId: user.supervisorId,
      headOfOfficeId: user.headOfOfficeId,
      orgUnitId: user.orgUnitId,
      dateOfTermination: user.dateOfTermination,
      refreshToken: user.refreshToken,
    };
  }

  async findOneByEmail(email: string): Promise<User | null> {
    return this.prisma.user.findUnique({
      where: {
        email: email,  // Ensure this is being correctly passed
      },
    });
  }
  
}
