import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { isProduction } from './config';
import indexRouter from './routes/index';

const app = express();

app.use(logger(isProduction ? 'combined' : 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);

/**
 * 404 Not Found
 */
app.use((request, response) => {
  response.status(404).send('Not Found');
});

export default app;
