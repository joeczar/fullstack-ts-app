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
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseEntity = void 0;
var typeorm_1 = require("typeorm");
var class_transformer_1 = require("class-transformer");
var BaseEntity = /** @class */ (function () {
    function BaseEntity() {
    }
    BaseEntity.prototype.updateDateCreation = function () {
        this.createdAt = new Date();
    };
    BaseEntity.prototype.updateDateUpdate = function () {
        this.updatedAt = new Date();
    };
    __decorate([
        typeorm_1.Column({
            type: 'int',
            width: 11,
            nullable: false,
            readonly: true,
            default: function () { return '0'; },
            transformer: {
                to: function (value) { return (!value ? value : Math.round(value.getTime() / 1000)); },
                from: function (value) { return (!value ? value : new Date(value * 1000)); }
            }
        }),
        class_transformer_1.Type(function () { return Date; }),
        __metadata("design:type", Date)
    ], BaseEntity.prototype, "createdAt", void 0);
    __decorate([
        typeorm_1.Column({
            type: 'int',
            width: 11,
            nullable: true,
            default: function () { return null; },
            transformer: {
                to: function (value) { return (!value ? value : Math.round(value.getTime() / 1000)); },
                from: function (value) { return (!value ? value : new Date(value * 1000)); }
            }
        }),
        class_transformer_1.Type(function () { return Date; }),
        __metadata("design:type", Date)
    ], BaseEntity.prototype, "updatedAt", void 0);
    __decorate([
        typeorm_1.BeforeInsert(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaseEntity.prototype, "updateDateCreation", null);
    __decorate([
        typeorm_1.BeforeUpdate(),
        __metadata("design:type", Function),
        __metadata("design:paramtypes", []),
        __metadata("design:returntype", void 0)
    ], BaseEntity.prototype, "updateDateUpdate", null);
    return BaseEntity;
}());
exports.BaseEntity = BaseEntity;
//# sourceMappingURL=Base.entity.js.map