import { IsString, IsEnum, IsOptional } from 'class-validator';

export class AddFavoriteDto {
  @IsEnum(['product', 'player'])
  type: 'product' | 'player';

  @IsString()
  refId: string;
}

export class RemoveFavoriteDto {
  @IsEnum(['product', 'player'])
  type: 'product' | 'player';

  @IsString()
  refId: string;
}

export class FavoritesListQuery {
  @IsOptional()
  @IsEnum(['product', 'player'])
  type?: 'product' | 'player';
}

export class FavoriteResponse {
  id: string;
  type: 'product' | 'player';
  refId: string;
  snapshot: ProductSnapshotResponse | PlayerSnapshotResponse;
  createdAt: Date;
}

export class ProductSnapshotResponse {
  id: string;
  name: string;
  nameAr?: string;
  image?: string;
  wholesalePrice: number;
  currency: string;
  brandName?: string;
}

export class PlayerSnapshotResponse {
  id: string;
  name: string;
  phone?: string;
  accountsCount: number;
}

