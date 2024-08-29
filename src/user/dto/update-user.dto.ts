import { ApiProperty } from '@nestjs/swagger';

export class UpdateUserDto {
    @ApiProperty({ example: 'johndoe@gmail.com', required: false })
    email?: string;
  
    @ApiProperty({ example: 'John', required: false })
    firstName?: string;
  
    @ApiProperty({ example: 'Doe', required: false })
    lastName?: string;
  
    @ApiProperty({ example: 'IT Department', required: false })
    department?: string;
  
    @ApiProperty({ example: 'Software Development', required: false })
    division?: string;
  
    @ApiProperty({ example: 'Lagos Office', required: false })
    office?: string;
  
    @ApiProperty({ example: 'Software Engineer', required: false })
    jobTitle?: string;
  
    @ApiProperty({ example: 'Victoria Island, Lagos', required: false })
    location?: string;
  
    @ApiProperty({ example: '2024-01-15T08:00:00Z', required: false })
    dateOfHire?: Date;
  
    @ApiProperty({ example: 'active', required: false })
    status?: string;
  
    @ApiProperty({ example: 'supervisorId123', required: false })
    supervisorId?: string;
  
    @ApiProperty({ example: 'headOfOfficeId123', required: false })
    headOfOfficeId?: string;
  }