import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import config from './ormconfig';
import App from './web/App';
// import {} from './web/controllers';
import validateEnv from './utils/validateEnv';

validateEnv();

const port = Number(process.env.SERVER_PORT);

(async () => {
  try {
    const connection = await createConnection(config);
    console.log('Connected to DB');
  } catch (err) {
    console.log('Error connecting to DB', err);
  }
  const app = new App(port);
  app.listen();
})();
