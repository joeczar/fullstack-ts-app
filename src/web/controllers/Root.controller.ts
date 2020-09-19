import { Controller, Req, Res, Param, Body, Get, Post, Put, Delete } from 'routing-controllers';

@Controller()
export class RootController {
  @Get('/')
  renderReact(@Req() req: any, @Res() res: any) {
    return res.render('index');
  }

}
