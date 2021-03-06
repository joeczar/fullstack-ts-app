import { Request, Response } from 'express';
import { get, controller, bodyValidator, post } from './decorators';

@controller('/auth')
// eslint-disable-next-line no-unused-vars
class LoginController {
  @get('/login')
  getLogin (req: Request, res: Response): void {
    res.send(`
    <form method="POST">
      <div>
        <label>Email</label>
        <input name="email" />
      </div>
      <div>
        <label>Password</label>
        <input name="password" type="password" />
      </div>
      <button>Submit</button>
    </form>
    `);
  }

  @post('/login')
  @bodyValidator('email', 'password')
  postLogin (req: Request, res: Response) {
    const { email, password } = req.body;
    if (
      email &&
      password &&
      email === 'joe@joe.com' &&
      password === 'gangsta'
    ) {
      req.session = { loggedIn: true };
      res.redirect('/');
    } else {
      res.send('You must provide a valid email and password');
    }
  }

  @get('/logout')
  getLogout (req: Request, res: Response) {
    req.session = null;
    res.redirect('/');
  }
}
