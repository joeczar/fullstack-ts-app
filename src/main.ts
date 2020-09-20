import 'dotenv/config';
import 'reflect-metadata';
import config from './ormconfig'
import { createConnection } from 'typeorm';

import * as web from './web';
const port = Number(process.env.SERVER_PORT)
async function main() {
    try {
    await createConnection(config);
    await web.start(port);
    console.log(`Server started at http://localhost:${port}`);
  } catch (error) {
    console.log('Error while connecting to the database', error);
    return error;
  }
   
}

main().catch(error => console.error(error));
