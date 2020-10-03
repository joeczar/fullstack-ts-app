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
const controllers_1 = require("./controllers");
const cookie_session_1 = __importDefault(require("cookie-session"));
class App {
    constructor(port) {
        this.index = (req, res) => {
            const { userId } = req.session;
            if (!userId) {
                res.redirect("/welcome");
            }
            else {
                res.render('index');
            }
        };
        this.welcome = (req, res) => {
            if (req.session && req.session.userId) {
                res.redirect("/");
            }
            else {
                res.render('index');
            }
        };
        this.app = express_1.default();
        this.port = port;
        this.initializeMiddlewares();
        routing_controllers_1.useExpressServer(this.app, {
            // routePrefix: '/api',
            // development: false,
            defaultErrorHandler: false,
            // validation: true,
            controllers: [controllers_1.UserController, controllers_1.AuthController]
        });
        this.initializeStatic();
    }
    initializeMiddlewares() {
        const cookieSessionMiddleware = cookie_session_1.default({
            secret: process.env.COOKIE_SESSION || 'cookieKey',
            maxAge: Number(process.env.COOKIE_AGE),
        });
        this.app.use(cookieSessionMiddleware);
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
        this.app.use('/assets', express_1.default.static(path_1.default.join(__dirname, '..', 'frontend')));
        this.app.get('*', this.index);
        this.app.get('/welcome', this.welcome);
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