import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CoffeesModule } from './coffees/coffees.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection, getConnectionOptions } from 'typeorm';


@Module({
  imports: [CoffeesModule,TypeOrmModule.forRootAsync({
    useFactory: async () =>
    Object.assign(await getConnectionOptions(), {
    autoLoadEntities: true,
    }),
  }),],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
  constructor(private connection: Connection) {}
}
