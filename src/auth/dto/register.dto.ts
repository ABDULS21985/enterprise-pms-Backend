import { ApiProperty } from '@nestjs/swagger';

export class RegisterDto {
  @ApiProperty({ example: 'drkatanga@gmail.com', description: 'The email of the user' })
  email: string;

  @ApiProperty({ example: 'password123', description: 'The password of the user' })
  password: string;

  @ApiProperty({ example: 'Shadrach', description: 'The first name of the user' })
  firstName: string;

  @ApiProperty({ example: 'Abdul', description: 'The last name of the user' })
  lastName: string;

  @ApiProperty({ example: 'IT Department', description: 'The department of the user' })
  department: string;

  @ApiProperty({ example: 'AMD', description: 'The division of the user' })
  division: string;

  @ApiProperty({ example: 'CSO', description: 'The office of the user' })
  office: string;

  @ApiProperty({ example: 'Senior Software Developer', description: 'The job title of the user' }) // Corrected typo: "Senior oftware Developer" to "Senior Software Developer"
  jobTitle: string;

  @ApiProperty({ example: 'HQ', description: 'The location of the user' })
  location: string;

  @ApiProperty({ example: '2024-01-01', description: 'The date of hire of the user' })
  dateOfHire: Date;
}
