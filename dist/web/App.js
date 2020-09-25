"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const compression_1 = __importDefault(require("compression"));
const helmet_1 = __importDefault(require("helmet"));
const path_1 = __importDefault(require("path"));
const crypto_1 = __importDefault(require("crypto"));
const routing_controllers_1 = require("routing-controllers");
const User_controller_1 = require("./controllers/User.controller");
const Auth_controller_1 = require("./controllers/Auth.controller");
class App {
    constructor(port) {
        this.index = (req, res) => {
            res.render('index');
        };
        this.app = express_1.default();
        this.port = port;
        this.initializeStatic();
        this.initializeMiddlewares();
        routing_controllers_1.useExpressServer(this.app, {
            controllers: [User_controller_1.UserController, Auth_controller_1.AuthController]
        });
    }
    initializeMiddlewares() {
        this.app.use(body_parser_1.default.json());
        this.app.use(compression_1.default());
        this.app.use(helmet_1.default());
        this.app.use((req, res, next) => {
            res.locals.cspNonce = crypto_1.default.randomBytes(16).toString('hex');
            next();
        });
        this.app.use(helmet_1.default.contentSecurityPolicy({
            directives: {
                defaultSrc: ["'self'"],
                styleSrc: ["'self' 'unsafe-inline'"],
                scriptSrc: ["'self'"]
            }
        }));
    }
    initializeStatic() {
        // Template configuration
        this.app.set('view engine', 'ejs');
        this.app.set('views', 'public');
        // Static files configuration
        this.app.use('/assets', express_1.default.static(path_1.default.join(__dirname, 'frontend')));
        this.app.get('/', this.index);
    }
    getServer() {
        return this.app;
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`App listening on the port ${this.port}`);
        });
    }
}
exports.default = App;
//# sourceMappingURL=App.js.map