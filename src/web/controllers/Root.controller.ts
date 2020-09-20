import { Controller, Res, Req Get } from 'routing-controllers';

@Controller('')
// eslint-disable-next-line no-unused-vars
export class RootController {
  @Get('/')
  getRoot (@Req() req: any,@Res() res: any) {
    return res.render('index');
  }
}
