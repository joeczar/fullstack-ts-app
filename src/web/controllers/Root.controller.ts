import { Request, Response } from 'express';
import { get, controller } from './decorators';

@controller('')
// eslint-disable-next-line no-unused-vars
class RootController {
  @get('/')
  getRoot (req: Request, res: Response) {
    res.render('index');
  }
}
