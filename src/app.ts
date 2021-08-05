import express from 'express';
import cookieParser from 'cookie-parser';
import logger from 'morgan';

import { isProduction } from './config';
import indexRouter from './routes/index';
import usersRouter from './routes/users';

const app = express();

app.use(logger(isProduction ? 'combined' : 'dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use('/', indexRouter);
app.use('/users', usersRouter);

export default app;
