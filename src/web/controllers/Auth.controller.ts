import { Controller, Res, Req, Get, Post, Render, JsonController } from 'routing-controllers';
import { Request, Response } from 'express';

@JsonController('/auth')
export class AuthController {
  @Get()
  showAuth() { return { auth: true }; }

  @Get('/login')
  login(@Req() req: Request, @Res() res: Response) {
    if (req.session) {
      req.session.userId = 5;
    }
    return { loggedIn: true };
  }
}

