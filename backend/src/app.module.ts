import { Module } from '@nestjs/common';
import { PropertyModule } from './property/property.module';
import { PrismaModule } from './prisma/prisma.module';

@Module({
  imports: [PrismaModule, PropertyModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
