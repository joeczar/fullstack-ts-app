import express, { Request, Response } from 'express';
import bodyParser from 'body-parser';
import compression from 'compression';
import helmet from 'helmet';
import path from 'path';
import crypto from 'crypto';
import { useExpressServer } from 'routing-controllers';
import { UserController, AuthController } from './controllers';
import cookieSession from 'cookie-session';


class App {
  public app: express.Application;
  public port: number;

  constructor(port: number) {
    this.app = express();
    this.port = port;
    useExpressServer(this.app, {
      controllers: [UserController, AuthController]
    });
    this.initializeStatic();
    this.initializeMiddlewares();

  }

  private initializeMiddlewares() {
    const cookieSessionMiddleware = cookieSession({
      secret: process.env.COOKIE_SESSION,
      maxAge: Number(process.env.COOKIE_AGE),
    });
    this.app.use(cookieSessionMiddleware);
    this.app.use(bodyParser.json());
    this.app.use(compression());
    this.app.use(helmet());
    this.app.use((req, res, next) => {
      res.locals.cspNonce = crypto.randomBytes(16).toString('hex');
      next();
    });
    this.app.use(
      helmet.contentSecurityPolicy({
        directives: {
          defaultSrc: ["'self'"],
          styleSrc: ["'self' 'unsafe-inline'"],
          scriptSrc: ["'self'"]
        }
      })
    );
  }

  private initializeStatic() {
    // Template configuration
    this.app.set('view engine', 'ejs');
    this.app.set('views', 'public');

    // Static files configuration
    this.app.use('/assets', express.static(path.join(__dirname, 'frontend')));
    this.app.get('*', this.index);
    this.app.get('/welcome', this.welcome);
    // this.app'
  }
  public index = (req: Request, res: Response) => {

    if (req.session && !req.session.registerId) {
      res.redirect("/welcome");
    } else {
      res.render('index');
    }

  };
  public welcome = (req: Request, res: Response) => {
    if (req.session && req.session.registerId) {
      res.redirect("/");
    } else {
      res.render('index');
    }

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
