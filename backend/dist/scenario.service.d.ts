import { Repository } from 'typeorm';
import { Scenario } from './scenario.entity';
export declare class ScenarioService {
    private scenarioRepository;
    constructor(scenarioRepository: Repository<Scenario>);
    create(description: string): Promise<Scenario>;
    findAll(): Promise<Scenario[]>;
    findOne(id: number): Promise<Scenario | null>;
    update(id: number, description: string): Promise<Scenario | null>;
    remove(id: number): Promise<boolean>;
}
