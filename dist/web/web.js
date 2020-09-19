"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.app = void 0;
require("reflect-metadata");
var express_1 = __importDefault(require("express"));
var routing_controllers_1 = require("routing-controllers");
var controllers_1 = require("./controllers");
var http_1 = __importDefault(require("http"));
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var morgan_1 = __importDefault(require("morgan"));
// Express app initialization
// export const app = express();
exports.app = routing_controllers_1.createExpressServer({
    controllers: [controllers_1.UserController, controllers_1.RootController],
});
// Template configuration
exports.app.set('view engine', 'ejs');
exports.app.set('views', 'public');
// MiddleWares
exports.app.use(body_parser_1.default.json());
exports.app.use(body_parser_1.default.urlencoded({ extended: true }));
exports.app.use(cookie_session_1.default({ keys: ['allTheShit'] }));
exports.app.use(morgan_1.default('dev'));
// Static files configuration
exports.app.use('/assets', express_1.default.static(path_1.default.join(__dirname, 'frontend')));
// Controllers
// app.use(AppRouter.getInstance());
// app.get('/*', (req, res) => {
//   res.render('index');
// });
// Start function
exports.start = function (port) {
    var server = http_1.default.createServer(exports.app);
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    return new Promise(function (resolve, reject) {
        server.listen(port, resolve);
    });
};
//# sourceMappingURL=web.js.map