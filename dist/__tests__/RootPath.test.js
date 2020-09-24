"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const App_1 = __importDefault(require("../web/App"));
const controllers_1 = require("../web/controllers");
describe('GET /*', () => {
    test('It should respond with an array of Users', async () => {
        const app = new App_1.default([new controllers_1.RootController()], 6000);
        const res = await supertest_1.default(app.getServer()).get('/');
        expect(res.text).toContain('<div id="root"></div>');
        expect(res.status).toEqual(200);
        const res2 = await supertest_1.default(app.getServer()).get('/something');
        expect(res.text).toContain('<div id="root"></div>');
        expect(res.status).toEqual(200);
    });
});
//# sourceMappingURL=RootPath.test.js.map