import { Controller } from "routing-controllers";
import { getConnectionManager } from "typeorm";


export class ApiBase {
  public manager = getConnectionManager().get()
}