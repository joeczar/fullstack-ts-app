"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const web_1 = __importDefault(require("../web/web"));
describe('GET /api/users', () => {
    test('It should respond with an array of Users', async () => {
        const response = await supertest_1.default(web_1.default).get('/');
        expect(response.text).toContain('<div id="root"></div>');
        expect(response.status).toEqual(200);
    });
});
//# sourceMappingURL=RootPath.test.js.map