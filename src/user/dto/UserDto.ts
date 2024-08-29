import { ApiProperty } from '@nestjs/swagger';
export class UserDto {
    @ApiProperty({ example: 'userId123' })
    id: string;
  
    @ApiProperty({ example: 'johndoe@gmail.com' })
    email: string;
  
    @ApiProperty({ example: 'John' })
    firstName: string;
  
    @ApiProperty({ example: 'Doe' })
    lastName: string;
  
    @ApiProperty({ example: 'IT Department' })
    department: string;
  
    @ApiProperty({ example: 'Software Development' })
    division: string;
  
    @ApiProperty({ example: 'Lagos Office' })
    office: string;
  
    @ApiProperty({ example: 'Software Engineer' })
    jobTitle: string;
  
    @ApiProperty({ example: 'Victoria Island, Lagos' })
    location: string;
  
    @ApiProperty({ example: '2024-01-15T08:00:00Z' })
    dateOfHire: Date;
  
    @ApiProperty({ example: 'active' })
    status: string;
  
    @ApiProperty({ example: 'supervisorId123' })
    supervisorId: string;
  
    @ApiProperty({ example: 'headOfOfficeId123' })
    headOfOfficeId: string;
  }