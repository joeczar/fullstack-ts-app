"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const web_1 = __importDefault(require("../web/web"));
describe('GET /users', () => {
    test('It should respond with an array of Users', async () => {
        const response = await supertest_1.default(web_1.default).get('/users');
        expect(response.text).toContain('This action returns all users');
        expect(response.status).toEqual(200);
    });
});
describe('GET /users/:id', () => {
    test('It should respond with a single user and #NaN when given a bad id', async () => {
        const response = await supertest_1.default(web_1.default).get('/users/b');
        expect(response.text).toContain('This action returns user #NaN');
        expect(response.status).toEqual(200);
    });
    test('It should respond with a single user and the id when given an id', async () => {
        const response = await supertest_1.default(web_1.default).get('/users/5');
        expect(response.text).toContain('This action returns user #5');
        expect(response.status).toEqual(200);
    });
});
describe('POST /users', () => {
    test('it should respond with "Saving user...', async () => {
        const response = await supertest_1.default(web_1.default).post('/users');
        expect(response.text).toContain('Saving user...');
        expect(response.status).toEqual(200);
    });
});
describe('PUT /users/:id', () => {
    test('it should respond with "Saving user...', async () => {
        const response = await supertest_1.default(web_1.default).put('/users/5');
        expect(response.text).toContain('Updating a user...');
        expect(response.status).toEqual(200);
    });
});
describe('DELETE /users/:id', () => {
    test('it should respond with "Removing user..."', async () => {
        const response = await supertest_1.default(web_1.default).delete('/users/5');
        expect(response.text).toContain('Removing user...');
        expect(response.status).toEqual(200);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiVXNlckNvbnRyb2xsZXIudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fX3Rlc3RzX18vVXNlckNvbnRyb2xsZXIudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFnQztBQUNoQyxxREFBNkI7QUFFN0IsUUFBUSxDQUFDLFlBQVksRUFBRSxHQUFHLEVBQUU7SUFDMUIsSUFBSSxDQUFDLDBDQUEwQyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzFELE1BQU0sUUFBUSxHQUFHLE1BQU0sbUJBQU8sQ0FBQyxhQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsK0JBQStCLENBQUMsQ0FBQztRQUNqRSxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBQ0gsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtJQUM5QixJQUFJLENBQUMsbUVBQW1FLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDbkYsTUFBTSxRQUFRLEdBQUcsTUFBTSxtQkFBTyxDQUFDLGFBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQywrQkFBK0IsQ0FBQyxDQUFDO1FBQ2pFLE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxDQUFDO0lBQ0gsSUFBSSxDQUFDLGtFQUFrRSxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ2xGLE1BQU0sUUFBUSxHQUFHLE1BQU0sbUJBQU8sQ0FBQyxhQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsVUFBVSxDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsNkJBQTZCLENBQUMsQ0FBQztRQUMvRCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLGFBQWEsRUFBRSxHQUFHLEVBQUU7SUFDM0IsSUFBSSxDQUFDLHdDQUF3QyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQ3hELE1BQU0sUUFBUSxHQUFHLE1BQU0sbUJBQU8sQ0FBQyxhQUFHLENBQUMsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLENBQUM7UUFDbkQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztRQUNsRCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztBQUNMLENBQUMsQ0FBQyxDQUFDO0FBRUgsUUFBUSxDQUFDLGdCQUFnQixFQUFFLEdBQUcsRUFBRTtJQUM5QixJQUFJLENBQUMsd0NBQXdDLEVBQUUsS0FBSyxJQUFJLEVBQUU7UUFDeEQsTUFBTSxRQUFRLEdBQUcsTUFBTSxtQkFBTyxDQUFDLGFBQUcsQ0FBQyxDQUFDLEdBQUcsQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUNwRCxNQUFNLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDLFNBQVMsQ0FBQyxvQkFBb0IsQ0FBQyxDQUFDO1FBQ3RELE1BQU0sQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEdBQUcsQ0FBQyxDQUFDO0lBQ3ZDLENBQUMsQ0FBQyxDQUFDO0FBQ0wsQ0FBQyxDQUFDLENBQUM7QUFFSCxRQUFRLENBQUMsbUJBQW1CLEVBQUUsR0FBRyxFQUFFO0lBQ2pDLElBQUksQ0FBQywyQ0FBMkMsRUFBRSxLQUFLLElBQUksRUFBRTtRQUMzRCxNQUFNLFFBQVEsR0FBRyxNQUFNLG1CQUFPLENBQUMsYUFBRyxDQUFDLENBQUMsTUFBTSxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3ZELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLGtCQUFrQixDQUFDLENBQUM7UUFDcEQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9