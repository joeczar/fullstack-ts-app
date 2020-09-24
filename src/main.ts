import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import config from './ormconfig';
import validateEnv from './utils/validateEnv';

import * as web from './web';



validateEnv();
const port = Number(process.env.PORT);

async function dbConnect() {
  await createConnection(config);
  console.log('TypeORM running');
}

async function main() {
  await web.start(port);
  console.log(`Server started at http://localhost:${port}`);
   
}
dbConnect().catch(error => console.log(error));
main().catch(error => console.error(error));
