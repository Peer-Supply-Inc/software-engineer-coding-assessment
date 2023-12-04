const request = require('supertest');

const app = require('./app');

describe('GET /', () => {
  it('GET / => array of items', async () => {
    const response = await request(app).get('/todos');
    expect(response.statusCode).toBe(200);
  });
});