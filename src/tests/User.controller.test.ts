import request from 'supertest'
import  {app} from '../web/web'
import connection from '../utils/connection';
import {dbConnect} from '../main'

// beforeAll(async ()=>{
//   // await connection.create();
//   // dbConnect();
// });

// // afterAll(async ()=>{
// //   await connection.close();
// // });

// beforeEach(async () => {
//   await connection.clear();
// });


describe("GET /api/users", ()=>{
  test('It should respond with an array of Users', async ()=>{
    const response = await request(app).get('/api/users')
    expect(response.body).toEqual(['the wrong stuff'])
    expect(response.status).toEqual(200)
  })
})