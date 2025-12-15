import {
  Controller,
  Get,
  Post,
  Delete,
  Param,
  Request,
  UseGuards,
} from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';
import { TenantRequiredGuard } from '../guard/tenant-required.guard';

@Controller('favorites')
@UseGuards(JwtAuthGuard, TenantRequiredGuard)
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get()
  async getFavorites(@Request() req: any) {
    return this.favoritesService.getUserFavorites(req.user.userId);
  }

  @Post(':productId')
  async addFavorite(@Request() req: any, @Param('productId') productId: string) {
    return this.favoritesService.addFavorite(req.user.userId, productId);
  }

  @Delete(':productId')
  async removeFavorite(@Request() req: any, @Param('productId') productId: string) {
    return this.favoritesService.removeFavorite(req.user.userId, productId);
  }

  @Post(':productId/toggle')
  async toggleFavorite(@Request() req: any, @Param('productId') productId: string) {
    return this.favoritesService.toggleFavorite(req.user.userId, productId);
  }

  @Get(':productId/check')
  async checkFavorite(@Request() req: any, @Param('productId') productId: string) {
    const isFavorite = await this.favoritesService.isFavorite(req.user.userId, productId);
    return { isFavorite };
  }
}

