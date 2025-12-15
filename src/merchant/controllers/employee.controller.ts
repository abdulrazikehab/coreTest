import {
  Controller,
  Get,
  Post,
  Patch,
  Delete,
  Body,
  Param,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { EmployeeService } from '../services/employee.service';
import { MerchantService } from '../services/merchant.service';
import { MerchantAuditService } from '../services/merchant-audit.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { TenantRequiredGuard } from '../../guard/tenant-required.guard';
import { CreateEmployeeDto, UpdateEmployeeDto, EmployeeListQuery } from '../dto';

@Controller('merchant/employees')
@UseGuards(JwtAuthGuard, TenantRequiredGuard)
export class EmployeeController {
  constructor(
    private readonly employeeService: EmployeeService,
    private readonly merchantService: MerchantService,
    private readonly auditService: MerchantAuditService,
  ) {}

  @Get()
  async findAll(
    @Request() req: any,
    @Query() query: EmployeeListQuery,
  ) {
    const userId = req.user.id || req.user.userId;
    const context = await this.merchantService.validateMerchantAccess(userId, 'employeesManage');

    return this.employeeService.findAll(context.merchantId, query);
  }

  @Post()
  async create(
    @Request() req: any,
    @Body() dto: CreateEmployeeDto,
  ) {
    const userId = req.user.id || req.user.userId;
    const context = await this.merchantService.validateMerchantAccess(userId, 'employeesManage');

    const employee = await this.employeeService.create(context.merchantId, dto);

    await this.auditService.log(
      context.merchantId,
      userId,
      context.employeeId,
      context.isOwner ? 'MERCHANT' : 'EMPLOYEE',
      MerchantAuditService.Actions.EMPLOYEE_CREATED,
      'Employee',
      employee.id,
      { name: dto.name, username: dto.username },
    );

    return employee;
  }

  @Get(':id')
  async findOne(
    @Request() req: any,
    @Param('id') id: string,
  ) {
    const userId = req.user.id || req.user.userId;
    const context = await this.merchantService.validateMerchantAccess(userId, 'employeesManage');

    return this.employeeService.findOne(context.merchantId, id);
  }

  @Patch(':id')
  async update(
    @Request() req: any,
    @Param('id') id: string,
    @Body() dto: UpdateEmployeeDto,
  ) {
    const userId = req.user.id || req.user.userId;
    const context = await this.merchantService.validateMerchantAccess(userId, 'employeesManage');

    const employee = await this.employeeService.update(context.merchantId, id, dto);

    await this.auditService.log(
      context.merchantId,
      userId,
      context.employeeId,
      context.isOwner ? 'MERCHANT' : 'EMPLOYEE',
      MerchantAuditService.Actions.EMPLOYEE_UPDATED,
      'Employee',
      id,
      { changes: dto },
    );

    return employee;
  }

  @Delete(':id')
  async delete(
    @Request() req: any,
    @Param('id') id: string,
  ) {
    const userId = req.user.id || req.user.userId;
    const context = await this.merchantService.validateMerchantAccess(userId, 'employeesManage');

    await this.auditService.log(
      context.merchantId,
      userId,
      context.employeeId,
      context.isOwner ? 'MERCHANT' : 'EMPLOYEE',
      MerchantAuditService.Actions.EMPLOYEE_DISABLED,
      'Employee',
      id,
    );

    return this.employeeService.delete(context.merchantId, id);
  }
}

