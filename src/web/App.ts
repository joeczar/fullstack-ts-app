import express from 'express';
import bodyParser from 'body-parser';
import path from 'path';
import Controller from '../interfaces/Controller.interface';

class App {
  public app: express.Application;
  public port: number;

  constructor(controllers: Controller[], port: number) {
    this.app = express();
    this.port = port;

    this.initializeMiddlewares();
    this.initializeControllers(controllers);
    this.initializeStatic();
  }

  private initializeMiddlewares() {
    this.app.use(bodyParser.json());
  }

  private initializeStatic() {
    // Template configuration
    this.app.set('view engine', 'ejs');
    this.app.set('views', 'public');

    // Static files configuration
    this.app.use('/assets', express.static(path.join(__dirname, 'frontend')));
  }

  private initializeControllers(controllers: Controller[]) {
    controllers.forEach(controller => {
      this.app.use('/', controller.router);
    });
  }
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
