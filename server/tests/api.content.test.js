const request = require('supertest');
const { app, server } = require('../index');

afterAll(()=> server.close());

test('GET /api/content responde JSON con claves esperadas', async () => {
  const res = await request(app).get('/api/content');
  expect(res.status).toBe(200);
  expect(res.body).toHaveProperty('consejos');
  expect(Array.isArray(res.body.consejos)).toBe(true);
});
