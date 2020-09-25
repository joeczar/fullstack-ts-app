"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const supertest_1 = __importDefault(require("supertest"));
const App_1 = __importDefault(require("../web/App"));
describe('GET /welcome', () => {
    test('It should render the react app', async () => {
        const app = new App_1.default(6000);
        const res = await supertest_1.default(app.getServer()).get('/welcome');
        expect(res.text).toContain('<div id="root"></div>');
        expect(res.status).toEqual(200);
    });
});
//# sourceMappingURL=Auth.test.js.map