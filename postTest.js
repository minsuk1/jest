const request = require('supertest');
const app = require('../index');

describe('Go Fit Server API TEST', () => {
  test('should test that true === true', () => {
    expect(true).toBe(true)
  })

  test('should create a new daylog', async (done) => {
    const response = await request(app)
    .post('/api/daylog').send({
      userId: 1,
      title: 'test is cool',
    })
    expect(response.status).toEqual(200)
  })
})