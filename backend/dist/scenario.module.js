"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ScenarioModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const scenario_entity_1 = require("./scenario.entity");
const scenario_service_1 = require("./scenario.service");
const scenario_controller_1 = require("./scenario.controller");
let ScenarioModule = class ScenarioModule {
};
exports.ScenarioModule = ScenarioModule;
exports.ScenarioModule = ScenarioModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([scenario_entity_1.Scenario])],
        providers: [scenario_service_1.ScenarioService],
        controllers: [scenario_controller_1.ScenarioController],
    })
], ScenarioModule);
//# sourceMappingURL=scenario.module.js.map