import 'reflect-metadata';
import request from 'supertest';
import App from '../web/App';

describe('GET /welcome', () => {
  test('It should render the react app', async () => {
    const app = new App(6000);
    const res = await request(app.getServer()).get('/welcome');
    expect(res.text).toContain('<div id="root"></div>');
    expect(res.status).toEqual(200);
  });
});
