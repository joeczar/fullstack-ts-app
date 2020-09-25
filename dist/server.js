"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
require("reflect-metadata");
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("./ormconfig"));
const App_1 = __importDefault(require("./web/App"));
// import {} from './web/controllers';
const validateEnv_1 = __importDefault(require("./utils/validateEnv"));
validateEnv_1.default();
const port = Number(process.env.SERVER_PORT);
(async () => {
    try {
        const connection = await typeorm_1.createConnection(ormconfig_1.default);
        console.log('Connected to DB');
    }
    catch (err) {
        console.log('Error connecting to DB', err);
    }
    const app = new App_1.default(port);
    app.listen();
})();
//# sourceMappingURL=server.js.map