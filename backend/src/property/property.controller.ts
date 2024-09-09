import { Controller, Get, Post, Body, Query } from '@nestjs/common';
import { PropertyService } from './property.service';
import { Prisma, Property } from '@prisma/client';

@Controller('properties')
export class PropertyController {
  constructor(private readonly propertyService: PropertyService) {}

  @Get()
  async findAll(
    @Query('page') page?: number,
    @Query('limit') limit?: number,
    @Query('location') location?: string,
    @Query('type') type?: string,
    @Query('minPrice') minPrice?: number,
    @Query('maxPrice') maxPrice?: number,
    @Query('minRooms') minRooms?: number,
    @Query('maxRooms') maxRooms?: number,
  ) {
    return this.propertyService.findAll(
      page,
      limit,
      location,
      type,
      minPrice,
      maxPrice,
      minRooms,
      maxRooms,
    );
  }

  @Post()
  async create(@Body() data: Prisma.PropertyCreateInput): Promise<Property> {
    return this.propertyService.create(data);
  }
}