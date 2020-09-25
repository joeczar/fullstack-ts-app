import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import path from 'path';
import Controller from '../interfaces/Controller.interface';
import { useExpressServer } from 'routing-controllers';
import { UserController } from './controllers/User.controller';
import { AuthController } from './controllers/Auth.controller';

class App {
  public app: express.Application;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    this.initializeStatic();
    this.initializeMiddlewares();
    useExpressServer(this.app, {
      controllers: [UserController, AuthController]
    });
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
    this.app.use(compression());
    this.app.use(helmet());
  }

  private initializeStatic() {
    // Template configuration
    this.app.set('view engine', 'ejs');
    this.app.set('views', 'public');

    // Static files configuration
    this.app.use('/assets', express.static(path.join(__dirname, 'frontend')));
    this.app.get('/',  this.index);
  }
  private index = (req: Request, res: Response) => {
    res.render('index');
  };

  public getServer() {
    return this.app;
  }
  public listen() {
    this.app.listen(this.port, () => {
      console.log(`App listening on the port ${this.port}`);
    });
  }
}

export default App;
