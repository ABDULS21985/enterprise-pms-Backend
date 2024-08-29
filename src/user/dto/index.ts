import { ApiProperty, ApiPropertyOptional } from '@nestjs/swagger';
import { IsEmail, IsOptional, IsString, IsDateString } from 'class-validator';

export class CreateUserDto {
  @ApiProperty({ example: 'user@example.com', description: 'The email of the user' })
  @IsEmail()
  email: string;

  @ApiProperty({ example: 'John', description: 'The first name of the user' })
  @IsString()
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
  @IsString()
  lastName: string;

  @ApiPropertyOptional({ example: 'Michael', description: 'The middle name of the user' })
  @IsOptional()
  @IsString()
  middleName?: string;

  @ApiPropertyOptional({ example: '123-456-7890', description: 'The mobile number of the user' })
  @IsOptional()
  @IsString()
  mobileNumber?: string;

  @ApiProperty({ example: 'IT Department', description: 'The department of the user' })
  @IsString()
  department: string;

  @ApiProperty({ example: 'Development Division', description: 'The division of the user' })
  @IsString()
  division: string;

  @ApiProperty({ example: 'Lagos Office', description: 'The office of the user' })
  @IsString()
  office: string;

  @ApiProperty({ example: 'Senior Software Engineer', description: 'The job title of the user' })
  @IsString()
  jobTitle: string;

  @ApiProperty({ example: 'Victoria Island', description: 'The location of the user' })
  @IsString()
  location: string;

  @ApiProperty({ example: '2024-01-01', description: 'The date of hire of the user' })
  @IsDateString()
  dateOfHire: Date;

  @ApiProperty({ example: 'password123', description: 'The password of the user' })
  @IsString()
  password: string;

  @ApiPropertyOptional({ example: 'active', description: 'The status of the user' })
  @IsOptional()
  @IsString()
  status?: string;

  @ApiPropertyOptional({ example: '123456', description: 'The supervisor ID of the user' })
  @IsOptional()
  @IsString()
  supervisorId?: string;

  @ApiPropertyOptional({ example: '789012', description: 'The head of office ID of the user' })
  @IsOptional()
  @IsString()
  headOfOfficeId?: string;

  @ApiPropertyOptional({ example: 1, description: 'The organizational unit ID of the user' })
  @IsOptional()
  orgUnitId?: number;
}


export class UpdateUserDto {
  @ApiPropertyOptional({ example: 'user@example.com', description: 'The email of the user' })
  email?: string;

  @ApiPropertyOptional({ example: 'John', description: 'The first name of the user' })
  firstName?: string;

  @ApiPropertyOptional({ example: 'Doe', description: 'The last name of the user' })
  lastName?: string;

  @ApiPropertyOptional({ example: 'Michael', description: 'The middle name of the user' })
  middleName?: string;

  @ApiPropertyOptional({ example: '123-456-7890', description: 'The mobile number of the user' })
  mobileNumber?: string;

  @ApiPropertyOptional({ example: 'IT Department', description: 'The department of the user' })
  department?: string;

  @ApiPropertyOptional({ example: 'Development Division', description: 'The division of the user' })
  division?: string;

  @ApiPropertyOptional({ example: 'Lagos Office', description: 'The office of the user' })
  office?: string;

  @ApiPropertyOptional({ example: 'Senior Software Engineer', description: 'The job title of the user' })
  jobTitle?: string;

  @ApiPropertyOptional({ example: 'Victoria Island', description: 'The location of the user' })
  location?: string;

  @ApiPropertyOptional({ example: '2024-01-01', description: 'The date of hire of the user' })
  dateOfHire?: Date;

  @ApiPropertyOptional({ example: 'password123', description: 'The password of the user' })
  password?: string;

  @ApiPropertyOptional({ example: 'active', description: 'The status of the user' })
  status?: string;

  @ApiPropertyOptional({ example: '123456', description: 'The supervisor ID of the user' })
  supervisorId?: string;

  @ApiPropertyOptional({ example: '789012', description: 'The head of office ID of the user' })
  headOfOfficeId?: string;

  @ApiPropertyOptional({ example: 1, description: 'The organizational unit ID of the user' })
  orgUnitId?: number;
}

export class UserDto {
  @ApiProperty({ example: 'abc123', description: 'The ID of the user' })
  id: string;

  @ApiProperty({ example: 'user123', description: 'The user ID' })
  userId: string;

  @ApiProperty({ example: 'unique-id-123', description: 'The unique ID of the user' })
  uniqueId: string;

  @ApiProperty({ example: 'user@example.com', description: 'The email of the user' })
  email: string;

  @ApiProperty({ example: 'John', description: 'The first name of the user' })
  firstName: string;

  @ApiProperty({ example: 'Doe', description: 'The last name of the user' })
  lastName: string;

  @ApiPropertyOptional({ example: 'Michael', description: 'The middle name of the user' })
  middleName?: string;

  @ApiPropertyOptional({ example: '123-456-7890', description: 'The mobile number of the user' })
  mobileNumber?: string;

  @ApiProperty({ example: 'IT Department', description: 'The department of the user' })
  department: string;

  @ApiProperty({ example: 'Development Division', description: 'The division of the user' })
  division: string;

  @ApiProperty({ example: 'Lagos Office', description: 'The office of the user' })
  office: string;

  @ApiProperty({ example: 'Senior Software Engineer', description: 'The job title of the user' })
  jobTitle: string;

  @ApiProperty({ example: 'Victoria Island', description: 'The location of the user' })
  location: string;

  @ApiProperty({ example: '2024-01-01', description: 'The date of hire of the user' })
  dateOfHire: Date;

  @ApiProperty({ example: 'active', description: 'The status of the user' })
  status: string;

  @ApiProperty({ example: '123456', description: 'The supervisor ID of the user' })
  supervisorId: string;

  @ApiProperty({ example: '789012', description: 'The head of office ID of the user' })
  headOfOfficeId: string;

  @ApiProperty({ example: 'password123', description: 'The hashed password of the user' })
  password: string;

  @ApiPropertyOptional({ example: 1, description: 'The organizational unit ID of the user' })
  orgUnitId?: number;

  @ApiPropertyOptional({ example: '2024-12-31', description: 'The date of termination of the user' })
  dateOfTermination?: Date;

  @ApiPropertyOptional({ example: 'refreshToken123', description: 'The refresh token of the user' })
  refreshToken?: string;
}
