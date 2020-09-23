import request from 'supertest';
import app from '../web/web';

describe('GET /*', () => {
  test('It should respond the template at root "/"', async () => {
    const response = await request(app).get('/');
    expect(response.text).toContain('<div id="root"></div>');
    expect(response.status).toEqual(200);
  });
  test('It should respond with the template at "/" /welcome', async () => {
    const response = await request(app).get('/welcome');
    expect(response.text).toContain('<div id="root"></div>');
    expect(response.status).toEqual(200);
  });
});
