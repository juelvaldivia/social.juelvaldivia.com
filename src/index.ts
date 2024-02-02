import dotenv from 'dotenv';

import { ServerHTTP } from './servers/http';
import { ExpressApi } from './api';
import { API } from './api/interfaces';

dotenv.config();

const host = process.env.SERVER_URL || 'http://localhost';
const port = Number(process.env.PORT || 3000);
const BASE_URL = `${host}:${port}`;

// implement database
const api: API = new ExpressApi(BASE_URL);
const httpServer = new ServerHTTP(host, port, api.createServer());

try {
  httpServer.listen()
} catch (error) {
  if (error instanceof Error) {
    console.error(`Error starting server: ${error.message}`);
  } else {
    console.error('Unknown error occurred');
  }
}
