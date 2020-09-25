import 'reflect-metadata';
import request from 'supertest';
import App from '../web/App';
// import { RootController } from '../web/controllers';


describe('GET /*', () => {
  test('It should respond with an array of Users', async () => {
    const app = new App(6000);
    const res = await request(app.getServer()).get('/');
    expect(res.text).toContain('<div id="root"></div>');
    expect(res.status).toEqual(200);

    const res2 = await request(app.getServer()).get('/something');
     expect(res.text).toContain('<div id="root"></div>');
     expect(res.status).toEqual(200);
  });
});
