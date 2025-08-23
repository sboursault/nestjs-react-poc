"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const scenario_entity_1 = require("./scenario.entity");
let ScenarioService = class ScenarioService {
    scenarioRepository;
    constructor(scenarioRepository) {
        this.scenarioRepository = scenarioRepository;
    }
    create(description) {
        const scenario = this.scenarioRepository.create({ description });
        return this.scenarioRepository.save(scenario);
    }
    findAll() {
        return this.scenarioRepository.find();
    }
    findOne(id) {
        return this.scenarioRepository.findOneBy({ id });
    }
    async update(id, description) {
        const scenario = await this.scenarioRepository.findOneBy({ id });
        if (!scenario)
            return null;
        scenario.description = description;
        return this.scenarioRepository.save(scenario);
    }
    async remove(id) {
        const result = await this.scenarioRepository.delete(id);
        return result.affected !== 0;
    }
};
exports.ScenarioService = ScenarioService;
exports.ScenarioService = ScenarioService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(scenario_entity_1.Scenario)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], ScenarioService);
//# sourceMappingURL=scenario.service.js.map