import { Controller, Res, Req, Get, Post, Render } from 'routing-controllers';
import { Request, Response } from 'express';

@Controller('/welcome*')
export class AuthController {
  @Get('')
  @Render('index')
  showReg() {}
}
