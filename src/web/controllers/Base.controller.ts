import { Router } from 'express';

abstract class BaseController {
  public abstract path: string;
  public router = Router();

  public abstract intitRoutes(): void;
}

export default BaseController;
