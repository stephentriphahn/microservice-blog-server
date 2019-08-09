import * as bodyParser from 'body-parser';
import * as express from 'express';
import { application, NextFunction, Request, RequestHandler, Response } from 'express';
import logger from './logger';
import { Context } from './main';

const asyncMiddleware = (fn: RequestHandler) => {
  return (req: Request, res: Response, nextFn: NextFunction) => {
    return Promise.resolve(fn(req, res, nextFn))
      .catch(nextFn);
  };
};

export class App {
  public app = application;
  public context: Context;

  constructor(context: Context) {
    this.context = context;
    this.app = express();
    this.initConfig();
    this.routes();
  }

  private initConfig() {
    this.app.use(bodyParser.json());
    this.app.use(bodyParser.urlencoded({ extended: false }));
  }

  private routes() {
    this.app.get('/api/posts/:id', asyncMiddleware(this.getPosts.bind(this)));
    this.app.post('/api/posts', asyncMiddleware(this.addPost.bind(this)));
  }

  private async addPost(req: Request, res: Response) {
    logger.debug('add post handler', { req });
    const wasStored = await this.context.postStore.store(req.body);
    if (wasStored) {
      logger.info('stored successfully', { id: req.params.id });
      res.status(201).send();
    } else {
      logger.error('store-add-error', {});
      res.status(400).send();
    }
  }

  private async getPosts(req: Request, res: Response) {
    logger.debug('get post handler', { req });
    const post = await this.context.postStore.get(req.params.id);
    res.json(post);
  }
}


