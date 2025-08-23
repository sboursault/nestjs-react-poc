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
exports.ScenarioController = void 0;
const common_1 = require("@nestjs/common");
const scenario_service_1 = require("./scenario.service");
let ScenarioController = class ScenarioController {
    scenarioService;
    constructor(scenarioService) {
        this.scenarioService = scenarioService;
    }
    create(description) {
        return this.scenarioService.create(description);
    }
    findAll() {
        return this.scenarioService.findAll();
    }
    findOne(id) {
        return this.scenarioService.findOne(Number(id));
    }
    update(id, description) {
        return this.scenarioService.update(Number(id), description);
    }
    remove(id) {
        return this.scenarioService.remove(Number(id)).then(deleted => ({ deleted }));
    }
};
exports.ScenarioController = ScenarioController;
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScenarioController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], ScenarioController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScenarioController.prototype, "findOne", null);
__decorate([
    (0, common_1.Put)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __param(1, (0, common_1.Body)('description')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, String]),
    __metadata("design:returntype", Promise)
], ScenarioController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':id'),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String]),
    __metadata("design:returntype", Promise)
], ScenarioController.prototype, "remove", null);
exports.ScenarioController = ScenarioController = __decorate([
    (0, common_1.Controller)('scenarios'),
    __metadata("design:paramtypes", [scenario_service_1.ScenarioService])
], ScenarioController);
//# sourceMappingURL=scenario.controller.js.map