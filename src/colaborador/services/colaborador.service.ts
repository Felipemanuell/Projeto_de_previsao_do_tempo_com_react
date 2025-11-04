import { Colaborador } from './../entities/colaborador.entity';
import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, ILike, Repository } from 'typeorm';



@Injectable()
export class ColaboradorService {
  constructor(
    @InjectRepository(Colaborador)
    private colaboradorRepository: Repository<Colaborador>,
  ) {}

  async findAll(): Promise<Colaborador[]> {
    return await this.colaboradorRepository.find();
  }
   async findById(id: number): Promise<Colaborador> {
    
    const colaborador = await this.colaboradorRepository.findOne({
      where: {
        id
      }
    });

    if (!colaborador)
      throw new HttpException ('Colaborador não encontrado', HttpStatus.NOT_FOUND);
     
    return colaborador;
}

 async findAllByNome(nome: string): Promise<Colaborador[]> {
    return await this.colaboradorRepository.find({
      where:{
        nome: ILike(`%${nome}%`)
      }
    })
}

 async create(Colaborador:Colaborador): Promise<Colaborador> {
  return await this.colaboradorRepository.save(Colaborador);
 }
  async update(Colaborador:Colaborador): Promise<Colaborador> {
    await this.findById(Colaborador.id)

    return await this.colaboradorRepository.save(Colaborador);
  }

   async delete(id: number): Promise<DeleteResult> {
    await this.findById(id)
    return await this.colaboradorRepository.delete(id);
   }
}
