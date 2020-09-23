import 'reflect-metadata';
import { createExpressServer } from 'routing-controllers';
import http from 'http';
import path from 'path';
import { UserController } from './controllers/User.controller';
let compression = require('compression');
let app = createExpressServer({
  controllers: [UserController]
}); // creates express app, registers all controller routes and returns you express app instance
app.use(compression());

import express, { Request, Response } from 'express';


// Express app initialization
// const app = express();

// Template configuration
app.set('view engine', 'ejs');
app.set('views', 'public');

// Static files configuration
app.use('/assets', express.static(path.join(__dirname, 'frontend')));

// Controllers
app.get('/*', (_req: Request, res: Response) => {
  res.render('index');
});
// Start function
export const start = (port: number): Promise<void> => {
    const server = http.createServer(app);

    return new Promise<void>((resolve, _reject) => {
      server.listen(port, resolve);
    });
};

export default app;