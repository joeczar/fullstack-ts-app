"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.app = void 0;
var express_1 = __importDefault(require("express"));
var http_1 = __importDefault(require("http"));
var path_1 = __importDefault(require("path"));
var body_parser_1 = __importDefault(require("body-parser"));
var cookie_session_1 = __importDefault(require("cookie-session"));
var AppRouter_1 = require("./AppRouter");
require("./controllers/LoginController");
require("./controllers/RootController");
// Express app initialization
exports.app = express_1.default();
// Template configuration
exports.app.set('view engine', 'ejs');
exports.app.set('views', 'public');
// MiddleWares
exports.app.use(body_parser_1.default.json());
exports.app.use(body_parser_1.default.urlencoded({ extended: true }));
exports.app.use(cookie_session_1.default({ keys: ['allTheShit'] }));
// Static files configuration
exports.app.use('/assets', express_1.default.static(path_1.default.join(__dirname, 'frontend')));
// Controllers
exports.app.use(AppRouter_1.AppRouter.getInstance());
// app.get('/*', (req, res) => {
//   res.render('index');
// });
// Start function
exports.start = function (port) {
    var server = http_1.default.createServer(exports.app);
    return new Promise(function (resolve, reject) {
        server.listen(port, resolve);
    });
};
//# sourceMappingURL=web.js.map