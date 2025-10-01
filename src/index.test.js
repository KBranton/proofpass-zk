
const request = require('supertest');
const app = require('./index');

describe('GET /health', () => {
  it('should return 200 and correct JSON', async () => {
    const res = await request(app).get('/health');
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ status: 'ok', app: 'proofpass' });
  });
});

describe('POST /prove-age', () => {
  it('should return dummy proof response', async () => {
    const res = await request(app)
      .post('/prove-age')
      .send({ age: 18 });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ proof: 'dummy-proof', age: 18, valid: true });
  });
  it('should return error for invalid age', async () => {
    const res = await request(app)
      .post('/prove-age')
      .send({ age: -1 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: 'Invalid age' });
  });
});

describe('POST /verify-age', () => {
  it('should return dummy verify response', async () => {
    const res = await request(app)
      .post('/verify-age')
      .send({ proof: 'dummy-proof' });
    expect(res.statusCode).toBe(200);
    expect(res.body).toEqual({ verified: true, age: 18 });
  });
  it('should return error for invalid proof', async () => {
    const res = await request(app)
      .post('/verify-age')
      .send({ proof: 123 });
    expect(res.statusCode).toBe(400);
    expect(res.body).toEqual({ error: 'Invalid proof' });
  });
});
