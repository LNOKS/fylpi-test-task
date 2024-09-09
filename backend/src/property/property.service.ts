import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { Prisma, Property } from '@prisma/client';

@Injectable()
export class PropertyService {
  constructor(private prisma: PrismaService) {}

  async findAll(
    page: number = 1,
    limit: number = 10,
    location?: string,
    type?: string,
    minPrice?: number,
    maxPrice?: number,
    minRooms?: number,
    maxRooms?: number,
  ): Promise<{ properties: Property[]; total: number }> {
    const skip = (page - 1) * limit;

    const where: Prisma.PropertyWhereInput = {
      ...(location && { location: { contains: location } }),
      ...(type && { type }),
      ...(minPrice && { price: { gte: minPrice } }),
      ...(maxPrice && { price: { lte: maxPrice } }),
      ...(minRooms && { rooms: { gte: minRooms } }),
      ...(maxRooms && { rooms: { lte: maxRooms } }),
    };

    const [properties, total] = await Promise.all([
      this.prisma.property.findMany({
        where,
        skip,
        take: limit,
      }),
      this.prisma.property.count({ where }),
    ]);

    return { properties, total };
  }

  async create(data: Prisma.PropertyCreateInput): Promise<Property> {
    return this.prisma.property.create({ data });
  }
}
