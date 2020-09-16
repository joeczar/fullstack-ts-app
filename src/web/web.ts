import express from 'express';
import http from 'http';
import path from 'path';
import bodyParser from 'body-parser';
import cookieSession from 'cookie-session';
import { AppRouter } from './AppRouter';
import './controllers/LoginController';
import './controllers/RootController';
// Express app initialization
export const app = express();

// Template configuration
app.set('view engine', 'ejs');
app.set('views', 'public');
// MiddleWares
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieSession({ keys: ['allTheShit'] }));

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

  return new Promise<void>((resolve, reject) => {
    server.listen(port, resolve);
  });
};
