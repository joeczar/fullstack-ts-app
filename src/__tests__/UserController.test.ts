import request from 'supertest';
import app from '../web/web';

describe('GET /users', () => {
  test('It should respond with an array of Users', async () => {
    const response = await request(app).get('/users');
    expect(response.text).toContain('This action returns all users');
    expect(response.status).toEqual(200);
  });
});
describe('GET /users/:id', () => {
  test('It should respond with a single user and #NaN when given a bad id', async () => {
    const response = await request(app).get('/users/b');
    expect(response.text).toContain('This action returns user #NaN');
    expect(response.status).toEqual(200);
  });
  test('It should respond with a single user and the id when given an id', async () => {
    const response = await request(app).get('/users/5');
    expect(response.text).toContain('This action returns user #5');
    expect(response.status).toEqual(200);
  });
});

describe('POST /users', () => {
  test('it should respond with "Saving user...', async () => {
    const response = await request(app).post('/users');
    expect(response.text).toContain('Saving user...');
    expect(response.status).toEqual(200);
  });
});

describe('PUT /users/:id', () => {
  test('it should respond with "Saving user...', async () => {
    const response = await request(app).put('/users/5');
    expect(response.text).toContain('Updating a user...');
    expect(response.status).toEqual(200);
  });
});

describe('DELETE /users/:id', () => {
  test('it should respond with "Removing user..."', async () => {
    const response = await request(app).delete('/users/5');
    expect(response.text).toContain('Removing user...');
    expect(response.status).toEqual(200);
  });
});
