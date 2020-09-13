"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.start = exports.app = void 0;
const express_1 = __importDefault(require("express"));
const http_1 = __importDefault(require("http"));
const path_1 = __importDefault(require("path"));
// Express app initialization
exports.app = express_1.default();
// Template configuration
exports.app.set('view engine', 'ejs');
exports.app.set('views', 'public');
// Static files configuration
exports.app.use('/assets', express_1.default.static(path_1.default.join(__dirname, 'frontend')));
// Controllers
exports.app.get('/ping', (req, res) => {
    res.json({ data: 'Pong!' });
});
exports.app.get('/*', (req, res) => {
    res.render('index');
});
// Start function
exports.start = (port) => {
    const server = http_1.default.createServer(exports.app);
    return new Promise((resolve, reject) => {
        server.listen(port, resolve);
    });
};
//# sourceMappingURL=web.js.map