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
exports.RootController = void 0;
var routing_controllers_1 = require("routing-controllers");
var RootController = /** @class */ (function () {
    // eslint-disable-next-line no-unused-vars
    function RootController() {
    }
    RootController.prototype.getRoot = function (req, res) {
        return res.render('index');
    };
    __decorate([
        routing_controllers_1.Get('/'),
        __param(0, routing_controllers_1.Req()), __param(1, routing_controllers_1.Res()),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", [Object, Object]),
        __metadata("design:returntype", void 0)
    ], RootController.prototype, "getRoot", null);
    RootController = __decorate([
        routing_controllers_1.Controller('')
        // eslint-disable-next-line no-unused-vars
    ], RootController);
    return RootController;
}());
exports.RootController = RootController;
//# sourceMappingURL=Root.controller.js.map