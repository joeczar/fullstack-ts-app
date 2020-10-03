import 'reflect-metadata';
import request from 'supertest';
import App from '../web/App';
const server = new App(6000);
const app = server.getServer();

describe('GET /users', () => {
  test('It should respond with an array of Users', async () => {
    const response = await request(app).get('/api/users');
    expect(response.text).toContain('This action returns all users');
    expect(response.status).toEqual(200);
  });
});
describe('GET /users/:id', () => {
  test('It should respond with a single user and #NaN when given a bad id', async () => {
    const response = await request(app).get('/api/users/b');
    expect(response.text).toContain('This action returns user #NaN');
    expect(response.status).toEqual(200);
  });
  test('It should respond with a single user and the id when given an id', async () => {
    const response = await request(app).get('/api/users/5');
    expect(response.text).toContain('This action returns user #5');
    expect(response.status).toEqual(200);
  });
});

describe('POST /users', () => {
  test('it should respond with "Saving user...', async () => {
    const response = await request(app).post('/api/users');
    expect(response.text).toContain('Saving user...');
    expect(response.status).toEqual(200);
  });
});

describe('PUT /users/:id', () => {
  test('it should respond with "Saving user...', async () => {
    const response = await request(app).put('/api/users/5');
    expect(response.text).toContain('Updating a user...');
    expect(response.status).toEqual(200);
  });
});

describe('DELETE /users/:id', () => {
  test('it should respond with "Removing user..."', async () => {
    const response = await request(app).delete('/api/users/5');
    expect(response.text).toContain('Removing user...');
    expect(response.status).toEqual(200);
  });
});
