"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
const supertest_1 = __importDefault(require("supertest"));
const App_1 = __importDefault(require("../web/App"));
const server = new App_1.default(6000);
const app = server.getServer();
describe('GET /users', () => {
    test('It should respond with an array of Users', async () => {
        const response = await supertest_1.default(app).get('/api/users');
        expect(response.text).toContain('This action returns all users');
        expect(response.status).toEqual(200);
    });
});
describe('GET /users/:id', () => {
    test('It should respond with a single user and #NaN when given a bad id', async () => {
        const response = await supertest_1.default(app).get('/api/users/b');
        expect(response.text).toContain('This action returns user #NaN');
        expect(response.status).toEqual(200);
    });
    test('It should respond with a single user and the id when given an id', async () => {
        const response = await supertest_1.default(app).get('/api/users/5');
        expect(response.text).toContain('This action returns user #5');
        expect(response.status).toEqual(200);
    });
});
describe('POST /users', () => {
    test('it should respond with "Saving user...', async () => {
        const response = await supertest_1.default(app).post('/api/users');
        expect(response.text).toContain('Saving user...');
        expect(response.status).toEqual(200);
    });
});
describe('PUT /users/:id', () => {
    test('it should respond with "Saving user...', async () => {
        const response = await supertest_1.default(app).put('/api/users/5');
        expect(response.text).toContain('Updating a user...');
        expect(response.status).toEqual(200);
    });
});
describe('DELETE /users/:id', () => {
    test('it should respond with "Removing user..."', async () => {
        const response = await supertest_1.default(app).delete('/api/users/5');
        expect(response.text).toContain('Removing user...');
        expect(response.status).toEqual(200);
    });
});
//# sourceMappingURL=User.controller.test.js.map