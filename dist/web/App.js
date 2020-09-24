"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const path_1 = __importDefault(require("path"));
class App {
    constructor(controllers, port) {
        this.app = express_1.default();
        this.port = port;
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeStatic();
    }
    initializeMiddlewares() {
        this.app.use(body_parser_1.default.json());
    }
    initializeStatic() {
        // Template configuration
        this.app.set('view engine', 'ejs');
        this.app.set('views', 'public');
        // Static files configuration
        this.app.use('/assets', express_1.default.static(path_1.default.join(__dirname, 'frontend')));
    }
    initializeControllers(controllers) {
        controllers.forEach(controller => {
            this.app.use('/', controller.router);
        });
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map