import { Controller, Get, Post, Put, Delete, Body, Param } from '@nestjs/common';
import { ScenarioService } from './scenario.service';
import { Scenario } from './scenario.entity';

@Controller('scenarios')
export class ScenarioController {
  constructor(private readonly scenarioService: ScenarioService) {}

  @Post()
  create(@Body('description') description: string): Promise<Scenario> {
    return this.scenarioService.create(description);
  }

  @Get()
  findAll(): Promise<Scenario[]> {
    return this.scenarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string): Promise<Scenario | null> {
    return this.scenarioService.findOne(Number(id));
  }

  @Put(':id')
  update(@Param('id') id: string, @Body('description') description: string): Promise<Scenario | null> {
    return this.scenarioService.update(Number(id), description);
  }

  @Delete(':id')
  remove(@Param('id') id: string): Promise<{ deleted: boolean }> {
    return this.scenarioService.remove(Number(id)).then(deleted => ({ deleted }));
  }
}

