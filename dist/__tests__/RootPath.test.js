"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const web_1 = __importDefault(require("../web/web"));
describe('GET /*', () => {
    test('It should respond the template at root "/"', async () => {
        const response = await supertest_1.default(web_1.default).get('/');
        expect(response.text).toContain('<div id="root"></div>');
        expect(response.status).toEqual(200);
    });
    test('It should respond with the template at "/" /welcome', async () => {
        const response = await supertest_1.default(web_1.default).get('/welcome');
        expect(response.text).toContain('<div id="root"></div>');
        expect(response.status).toEqual(200);
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiUm9vdFBhdGgudGVzdC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9fX3Rlc3RzX18vUm9vdFBhdGgudGVzdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFBLDBEQUFnQztBQUNoQyxxREFBNkI7QUFFN0IsUUFBUSxDQUFDLFFBQVEsRUFBRSxHQUFHLEVBQUU7SUFDdEIsSUFBSSxDQUFDLDRDQUE0QyxFQUFFLEtBQUssSUFBSSxFQUFFO1FBQzVELE1BQU0sUUFBUSxHQUFHLE1BQU0sbUJBQU8sQ0FBQyxhQUFHLENBQUMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7UUFDN0MsTUFBTSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsQ0FBQyxTQUFTLENBQUMsdUJBQXVCLENBQUMsQ0FBQztRQUN6RCxNQUFNLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxDQUFDLE9BQU8sQ0FBQyxHQUFHLENBQUMsQ0FBQztJQUN2QyxDQUFDLENBQUMsQ0FBQztJQUNILElBQUksQ0FBQyxxREFBcUQsRUFBRSxLQUFLLElBQUksRUFBRTtRQUNyRSxNQUFNLFFBQVEsR0FBRyxNQUFNLG1CQUFPLENBQUMsYUFBRyxDQUFDLENBQUMsR0FBRyxDQUFDLFVBQVUsQ0FBQyxDQUFDO1FBQ3BELE1BQU0sQ0FBQyxRQUFRLENBQUMsSUFBSSxDQUFDLENBQUMsU0FBUyxDQUFDLHVCQUF1QixDQUFDLENBQUM7UUFDekQsTUFBTSxDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsR0FBRyxDQUFDLENBQUM7SUFDdkMsQ0FBQyxDQUFDLENBQUM7QUFDTCxDQUFDLENBQUMsQ0FBQyJ9