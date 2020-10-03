import express from 'express';
import { User as UserEntity } from '../entities/User.entity';

declare module 'express' {
  export interface IUser extends UserEntity { }
  export interface Request {
    user?: IUser;
  }
}