import compression from 'compression';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import type { ErrorRequestHandler } from 'express';
import express from 'express';
import helmet from 'helmet';
import logger from 'morgan';

import { isProduction, isTest } from './config';
import indexRouter from './routes/index';

const app = express();

/**
 * Middleware.
 */
app.use(compression());
app.use(cookieParser());
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(helmet());
app.use(
  logger(/* istanbul ignore next */ isProduction ? 'combined' : 'dev', {
    skip: () => isTest,
  }),
);

/**
 * Routes.
 */
app.use('/', indexRouter);

/**
 * 404 Not Found
 */
app.use((request, response) => {
  response.status(404).send('Not Found');
});

/**
 * 500 Internal Server Error
 */
// eslint-disable-next-line no-unused-vars
app.use(((error, request, response, next) => {
  // eslint-disable-next-line no-console
  console.error(error.stack);
  response.status(500).send('Internal Server Error');
}) as ErrorRequestHandler);

export default app;
