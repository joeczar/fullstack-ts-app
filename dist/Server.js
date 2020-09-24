"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const App_1 = __importDefault(require("./web/App"));
const controllers_1 = require("./web/controllers");
const app = new App_1.default([new controllers_1.RootController()], 5000);
app.listen();
//# sourceMappingURL=server.js.map