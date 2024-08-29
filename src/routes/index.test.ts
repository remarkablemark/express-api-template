import request from 'supertest';

import app from '../app';

describe('GET /', () => {
  it('responds with 200 "OK"', async () => {
    const response = await request(app).get('/');
    expect(response.statusCode).toBe(200);
    expect(response.text).toBe('OK');
  });
});
