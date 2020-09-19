import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import morgan from 'morgan';
import { AppRouter } from './AppRouter';
// import './controllers/User.controller';
import './controllers/Login.controller';
import './controllers/Root.controller';

// Express app initialization
export const app = express();

// Template configuration
app.set('view engine', 'ejs');
app.set('views', 'public');
// MiddleWares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['allTheShit'] }));
app.use(morgan('dev'));
// Static files configuration
app.use('/assets', express.static(path.join(__dirname, 'frontend')));

// Controllers
app.use(AppRouter.getInstance());

// app.get('/*', (req, res) => {
//   res.render('index');
// });

// Start function
export const start = (port: number): Promise<void> => {
  const server = http.createServer(app);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  return new Promise<void>((resolve, reject) => {
    server.listen(port, resolve);
  });
};
