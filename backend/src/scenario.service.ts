import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Scenario } from './scenario.entity';

@Injectable()
export class ScenarioService {
  constructor(
    @InjectRepository(Scenario)
    private scenarioRepository: Repository<Scenario>,
  ) {}

  create(description: string): Promise<Scenario> {
    const scenario = this.scenarioRepository.create({ description });
    return this.scenarioRepository.save(scenario);
  }

  findAll(): Promise<Scenario[]> {
    return this.scenarioRepository.find();
  }

  findOne(id: number): Promise<Scenario | null> {
    return this.scenarioRepository.findOneBy({ id });
  }

  async update(id: number, description: string): Promise<Scenario | null> {
    const scenario = await this.scenarioRepository.findOneBy({ id });
    if (!scenario) return null;
    scenario.description = description;
    return this.scenarioRepository.save(scenario);
  }

  async remove(id: number): Promise<boolean> {
    const result = await this.scenarioRepository.delete(id);
    return result.affected !== 0;
  }
}

