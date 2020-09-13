"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.routes = void 0;
const controllers_1 = require("./controllers");
const _routes = [
    ['/', controllers_1.IndexController],
    ['/ping', controllers_1.PingController],
];
exports.routes = (app) => {
    _routes.forEach((route) => {
        const [url, controller] = route;
        app.use(url, controller);
    });
};
//# sourceMappingURL=index.js.map