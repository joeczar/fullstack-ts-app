import { Controller, Res, Req, Get, Render } from 'routing-controllers';
import { Request, Response } from 'express';

@Controller('/')
// eslint-disable-next-line no-unused-vars
export class RootController {
  @Get('*')
  @Render('index')
  showReg(@Req() req: Request, @Res() res: Response) {
    // return res.render('index');
    // return 'Hello!';
  }

  @Get('welcome')
  @Render('index')
  getRoot() { }


}
