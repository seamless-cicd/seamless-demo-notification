import request from 'supertest';
import app from '../app';

describe('GET /', () => {
  test('responds with 200 and "Notification Service" on /', async () => {
    const response = await request(app).get('/');
    expect(response.status).toBe(200);
    expect(response.text).toBe('Notification Service');
  });
});
