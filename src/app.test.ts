import type { Router } from 'express';
import request from 'supertest';

import app from './app';
import indexRouter from './routes/index';

describe('GET /404', () => {
  it('responds with 404 "Not Found"', async () => {
    const response = await request(app).get('/404');
    expect(response.statusCode).toBe(404);
    expect(response.text).toBe('Not Found');
  });
});

describe('error', () => {
  const errorEndpoint = `/${Date.now()}`;
  let consoleLogSpy: jest.SpyInstance;
  let errorRouter: Router;

  beforeAll(() => {
    consoleLogSpy = jest.spyOn(console, 'error').mockImplementation(() => {});
    errorRouter = indexRouter.get(errorEndpoint, () => {
      throw new Error('test');
    });
  });

  afterAll(() => {
    consoleLogSpy.mockRestore();
    // @ts-expect-error Argument of type 'Router' is not assignable to parameter of type 'ILayer'
    indexRouter.stack.splice(indexRouter.stack.indexOf(errorRouter), 1);
  });

  it('responds with 500 "Internal Server Error"', async () => {
    const response = await request(app).get(errorEndpoint);
    expect(response.statusCode).toBe(500);
    expect(response.text).toBe('Internal Server Error');
  });
});
