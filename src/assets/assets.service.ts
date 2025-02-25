import { Injectable } from '@nestjs/common';
import { CreateAssetDto } from './dto/create-asset.dto';
import { InjectModel } from '@nestjs/mongoose';
import { Asset } from './entities/asset.entity';
import { Model } from 'mongoose';

@Injectable()
export class AssetsService {
  constructor(@InjectModel(Asset.name) private assetSchema: Model<Asset>) {}

  create(CreateAssetDto: CreateAssetDto) {
    return this.assetSchema.create(CreateAssetDto);
  }

  findAll() {
    return this.assetSchema.find();
  }

  findOne(symbol: string) {
    return this.assetSchema.findOne({ symbol });
  }
}
