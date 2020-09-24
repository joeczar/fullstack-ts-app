import { Router } from 'express';
import Controller from '../../interfaces/Controller.interface';

abstract class BaseController implements Controller {
  public abstract path: string;
  public router = Router();

  public abstract intitRoutes(): void;
}

export default BaseController;
