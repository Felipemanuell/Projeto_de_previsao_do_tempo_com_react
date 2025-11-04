import { TypeOrmModule } from '@nestjs/typeorm';
import { Colaborador } from './entities/colaborador.entity';
import { Module } from '@nestjs/common';
import { ColaboradorService } from './services/colaborador.service';
import { ColaboradorController } from './controllers/colaborador.controller';

@Module({
  imports: [TypeOrmModule.forFeature([Colaborador])],
  providers: [ColaboradorService],
  controllers: [ColaboradorController],
  exports: [],
})
export class ColaboradorModule {}
