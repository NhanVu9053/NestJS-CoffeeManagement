import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, getConnectionOptions } from 'typeorm';
import { CoffeeRatingModule } from './coffee-rating/coffee-rating.module';
import { CommonModule } from './common/common.module';



@Module({
  imports: [CoffeesModule,TypeOrmModule.forRootAsync({
    useFactory: async () =>
    Object.assign(await getConnectionOptions(), {
    autoLoadEntities: true,
    }),
  }), CoffeeRatingModule, CommonModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
