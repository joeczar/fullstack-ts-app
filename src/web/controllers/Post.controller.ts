import { Request, Response } from 'express';
import { getRepository } from 'typeorm';
import { Post } from '../entities';
import BaseController from './Base.controller';

export class PostController extends BaseController {
  public path: string = '/posts';
  // private postRepository = getRepository(Post);

  public intitRoutes(): void {
    this.router.get(this.path, this.getAllPosts);
  }

  private getAllPosts = async (req: Request, res: Response) => {
    // const posts = await this.postRepository.find();
    res.json({ posts: 'Test' });
    return;
  };
}
