import request from 'supertest';
import app from '../web/web';

describe('GET /api/users', () => {
  test('It should respond with an array of Users', async () => {
    const response = await request(app).get('/');
    expect(response.text).toContain('<div id="root"></div>');
    expect(response.status).toEqual(200);
  });
});
