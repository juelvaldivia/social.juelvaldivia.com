import express from 'express';
import http, { Server } from 'http';

import * as routes from './routes';
import { API } from './interfaces';

export class ExpressApi implements API {
  private router: express.Router;
  private baseUrl: string;

  constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
    this.router = express.Router();

    this.router.get('/', routes.welcome);
    this.router.get('/health', routes.healthCheck);
    this.router.get('/@:username', routes.getUser(this.baseUrl));
    this.router.post('/posts', routes.createPost(this.baseUrl));
    // TODO: implement inbox
    // this.router.post('/@:username/inbox', routes.inbox);
  }

  public createServer = (): Server => {
    const expressApp: express.Application = express();

    expressApp.use('/', this.router);

    return http.createServer(expressApp);
  }
}
