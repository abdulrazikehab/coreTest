import { IsString, IsOptional, IsBoolean, IsObject, MinLength, IsEnum } from 'class-validator';

// Define EmployeePermissions first since it's used by other classes
export class EmployeePermissions {
  @IsOptional()
  @IsBoolean()
  ordersCreate?: boolean;

  @IsOptional()
  @IsBoolean()
  ordersRead?: boolean;

  @IsOptional()
  @IsBoolean()
  reportsRead?: boolean;

  @IsOptional()
  @IsBoolean()
  walletRead?: boolean;

  @IsOptional()
  @IsBoolean()
  playersWrite?: boolean;

  @IsOptional()
  @IsBoolean()
  employeesManage?: boolean;

  @IsOptional()
  @IsBoolean()
  settingsWrite?: boolean;

  @IsOptional()
  @IsBoolean()
  invoicesRead?: boolean;
}

export class CreateEmployeeDto {
  @IsString()
  name!: string;

  @IsString()
  @MinLength(3)
  username!: string;

  @IsString()
  @MinLength(6)
  password!: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsObject()
  permissions!: EmployeePermissions;
}

export class UpdateEmployeeDto {
  @IsOptional()
  @IsString()
  name?: string;

  @IsOptional()
  @IsString()
  @MinLength(6)
  password?: string;

  @IsOptional()
  @IsString()
  phone?: string;

  @IsOptional()
  @IsEnum(['ACTIVE', 'DISABLED'])
  status?: 'ACTIVE' | 'DISABLED';

  @IsOptional()
  @IsObject()
  permissions?: EmployeePermissions;
}

export class EmployeeListQuery {
  @IsOptional()
  @IsString()
  status?: string;

  @IsOptional()
  @IsString()
  q?: string;
}

export class EmployeeResponse {
  id!: string;
  name!: string;
  username!: string;
  phone?: string;
  status!: string;
  permissions!: EmployeePermissions;
  createdAt!: Date;
  updatedAt!: Date;
}
