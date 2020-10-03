import { Controller, Res, Req, Get, Render } from 'routing-controllers';
import { Request, Response } from 'express';

@Controller()
// eslint-disable-next-line no-unused-vars
export class RootController {
  @Get('*')
  index(@Req() req: Request, @Res() res: Response) {
    return res.render('index');
    // if (req.session && !req.session.registerId) {
    //   res.redirect("/welcome");
    // } else {
    //   res.render('index');
    // }

  };
  @Get('welcome')
  // @Render('index')
  welcome(@Req() req: Request, @Res() res: Response) {
    return res.render('index');
    // if (req.session && req.session.userId) {
    //   res.redirect("/");
    // } else {
    //   res.render('index');
    // }

  };





}
