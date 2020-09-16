import { Request, Response, NextFunction } from 'express';
import { get, controller, use } from './decorators';

function requireAuth (req: Request, res: Response, next: NextFunction): void {
  if (req.session && req.session.loggedIn) {
    next();
    return;
  }
  res.status(403);
  res.send('Not Permitted');
}

@controller('/api')
// eslint-disable-next-line no-unused-vars
class RootController {
  @get('/test')
  getRoot (req: Request, res: Response) {
    return res.json({ msg: 'Hello test' });
  }

  @get('/protected')
  @use(requireAuth)
  getProtected (req: Request, res: Response) {
    res.send('welcome to protected route, logged in user.');
  }
}
