import { ScenarioService } from './scenario.service';
import { Scenario } from './scenario.entity';
export declare class ScenarioController {
    private readonly scenarioService;
    constructor(scenarioService: ScenarioService);
    create(description: string): Promise<Scenario>;
    findAll(): Promise<Scenario[]>;
    findOne(id: string): Promise<Scenario | null>;
    update(id: string, description: string): Promise<Scenario | null>;
    remove(id: string): Promise<{
        deleted: boolean;
    }>;
}
