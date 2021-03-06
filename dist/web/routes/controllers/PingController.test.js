"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const web_1 = require("../../web");
describe('Test PingController', () => {
    it('Request /ping should return Pong!', async () => {
        const result = await supertest_1.default(web_1.app).get('/ping').send();
        expect(result.status).toBe(200);
        expect(result.body.data).toBe('Pong!');
    });
});
//# sourceMappingURL=PingController.test.js.map