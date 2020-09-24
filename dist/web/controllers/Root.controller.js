"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.RootController = void 0;
const Base_controller_1 = __importDefault(require("./Base.controller"));
class RootController extends Base_controller_1.default {
    constructor() {
        super();
        this.path = '/';
        this.index = (req, res) => {
            res.render('index');
        };
        this.intitRoutes();
    }
    intitRoutes() {
        this.router.get(this.path, this.index);
    }
}
exports.RootController = RootController;
//# sourceMappingURL=Root.controller.js.map