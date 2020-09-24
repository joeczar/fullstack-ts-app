import 'dotenv/config';
import 'reflect-metadata';
import { createConnection } from 'typeorm';
import config from './ormconfig';
import * as web from './web';

const port = Number(process.env.PORT) || 3000;

async function main() {
    await createConnection(config);
    console.log('Connected to DB');

    await web.start(port);
    console.log(`Server started at http://localhost:${port}`);
}

main().catch(error => console.error(error));
