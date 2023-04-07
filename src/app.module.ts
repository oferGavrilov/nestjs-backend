import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TodoModule } from './todo/todo.module';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';


const ormOptions: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: '123456',
  database: 'nestjs',
  autoLoadEntities: true,
  synchronize: false
}
@Module({
  imports: [
    TodoModule,
    TypeOrmModule.forRoot(ormOptions)
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
