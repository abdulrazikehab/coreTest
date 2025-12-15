import {
  Controller,
  Get,
  Post,
  Delete,
  Body,
  Query,
  Request,
  UseGuards,
} from '@nestjs/common';
import { MerchantFavoritesService } from '../services/merchant-favorites.service';
import { MerchantService } from '../services/merchant.service';
import { JwtAuthGuard } from '../../auth/jwt-auth.guard';
import { TenantRequiredGuard } from '../../guard/tenant-required.guard';
import { AddFavoriteDto, FavoritesListQuery } from '../dto';

@Controller('merchant/favorites')
@UseGuards(JwtAuthGuard, TenantRequiredGuard)
export class MerchantFavoritesController {
  constructor(
    private readonly favoritesService: MerchantFavoritesService,
    private readonly merchantService: MerchantService,
  ) {}

  @Get()
  async findAll(
    @Request() req: any,
    @Query() query: FavoritesListQuery,
  ) {
    const userId = req.user.id || req.user.userId;
    const context = await this.merchantService.validateMerchantAccess(userId);

    return this.favoritesService.findAll(context.merchantId, query);
  }

  @Post()
  async add(
    @Request() req: any,
    @Body() dto: AddFavoriteDto,
  ) {
    const userId = req.user.id || req.user.userId;
    const context = await this.merchantService.validateMerchantAccess(userId);

    return this.favoritesService.add(context.merchantId, dto);
  }

  @Delete()
  async remove(
    @Request() req: any,
    @Body() dto: AddFavoriteDto,
  ) {
    const userId = req.user.id || req.user.userId;
    const context = await this.merchantService.validateMerchantAccess(userId);

    return this.favoritesService.remove(context.merchantId, dto);
  }
}

