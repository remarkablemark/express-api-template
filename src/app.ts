import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import type { ErrorRequestHandler } from 'express';

import { isProduction } from './config';
import indexRouter from './routes/index';

const app = express();

/**
 * Middleware.
 */
app.use(logger(isProduction ? 'combined' : 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

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
  console.error(error.stack);
  response.status(500).send('Internal Server Error');
}) as ErrorRequestHandler);

export default app;
