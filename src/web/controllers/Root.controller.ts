import { Request, Response } from 'express';
import BaseController from './Base.controller';

export class RootController extends BaseController {
  public path: string = '/';

  constructor() {
    super();
    this.intitRoutes();
  }
  public intitRoutes(): void {
    this.router.get(this.path, this.index);
  }

  index = (req: Request, res: Response) => {
    res.render('index');
  };
}
