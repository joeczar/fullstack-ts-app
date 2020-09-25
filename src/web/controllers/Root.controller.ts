import { Controller, Res, Req, Get, Render } from 'routing-controllers';

@Controller('')
// eslint-disable-next-line no-unused-vars
export class RootController {
  @Get('*')
  @Render('index')
  getRoot() {}
}
