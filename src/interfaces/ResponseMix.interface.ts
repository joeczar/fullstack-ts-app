import { Response } from 'express';
import { ServerResponse } from 'http';

export interface ICustomResponse extends Response {
  res: ServerResponse;
}
