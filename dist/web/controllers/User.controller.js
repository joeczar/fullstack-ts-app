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
exports.UserController = void 0;
const routing_controllers_1 = require("routing-controllers");
let UserController = class UserController {
    getAll() {
        return 'This action returns all users';
    }
    getOne(id) {
        return 'This action returns user #' + id;
    }
    post(user) {
        return 'Saving user...';
    }
    put(id, user) {
        return 'Updating a user...';
    }
    remove(id) {
        return 'Removing user...';
    }
};
__decorate([
    routing_controllers_1.Get('/users'),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getAll", null);
__decorate([
    routing_controllers_1.Get('/users/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "getOne", null);
__decorate([
    routing_controllers_1.Post('/users'),
    __param(0, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "post", null);
__decorate([
    routing_controllers_1.Put('/users/:id'),
    __param(0, routing_controllers_1.Param('id')), __param(1, routing_controllers_1.Body()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Object]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "put", null);
__decorate([
    routing_controllers_1.Delete('/users/:id'),
    __param(0, routing_controllers_1.Param('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], UserController.prototype, "remove", null);
UserController = __decorate([
    routing_controllers_1.Controller()
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlci5jb250cm9sbGVyLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vc3JjL3dlYi9jb250cm9sbGVycy9Vc2VyLmNvbnRyb2xsZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQUEsNkRBUTZCO0FBRzdCLElBQWEsY0FBYyxHQUEzQixNQUFhLGNBQWM7SUFFekIsTUFBTTtRQUNKLE9BQU8sK0JBQStCLENBQUM7SUFDekMsQ0FBQztJQUdELE1BQU0sQ0FBYyxFQUFVO1FBQzVCLE9BQU8sNEJBQTRCLEdBQUcsRUFBRSxDQUFDO0lBQzNDLENBQUM7SUFHRCxJQUFJLENBQVMsSUFBUztRQUNwQixPQUFPLGdCQUFnQixDQUFDO0lBQzFCLENBQUM7SUFHRCxHQUFHLENBQWMsRUFBVSxFQUFVLElBQVM7UUFDNUMsT0FBTyxvQkFBb0IsQ0FBQztJQUM5QixDQUFDO0lBR0QsTUFBTSxDQUFjLEVBQVU7UUFDNUIsT0FBTyxrQkFBa0IsQ0FBQztJQUM1QixDQUFDO0NBQ0YsQ0FBQTtBQXZCQztJQURDLHlCQUFHLENBQUMsUUFBUSxDQUFDOzs7OzRDQUdiO0FBR0Q7SUFEQyx5QkFBRyxDQUFDLFlBQVksQ0FBQztJQUNWLFdBQUEsMkJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7Ozs0Q0FFbEI7QUFHRDtJQURDLDBCQUFJLENBQUMsUUFBUSxDQUFDO0lBQ1QsV0FBQSwwQkFBSSxFQUFFLENBQUE7Ozs7MENBRVg7QUFHRDtJQURDLHlCQUFHLENBQUMsWUFBWSxDQUFDO0lBQ2IsV0FBQSwyQkFBSyxDQUFDLElBQUksQ0FBQyxDQUFBLEVBQWMsV0FBQSwwQkFBSSxFQUFFLENBQUE7Ozs7eUNBRW5DO0FBR0Q7SUFEQyw0QkFBTSxDQUFDLFlBQVksQ0FBQztJQUNiLFdBQUEsMkJBQUssQ0FBQyxJQUFJLENBQUMsQ0FBQTs7Ozs0Q0FFbEI7QUF4QlUsY0FBYztJQUQxQixnQ0FBVSxFQUFFO0dBQ0EsY0FBYyxDQXlCMUI7QUF6Qlksd0NBQWMifQ==