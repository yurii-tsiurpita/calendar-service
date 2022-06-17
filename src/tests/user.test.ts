import request from 'supertest';
import app from '../server.js';

describe('when getting users info', () => {
    test('response content type should by application/json', async () => {
        const response = await request(app).get('/api/users');
        expect(response.headers['content-type']).toEqual(expect.stringContaining("json"));
    });
});

describe('when did not pass user email', () => {
    test('response status code should be 500', async () => {
        const response = await request(app).post('/api/users').send({
            name: 'test'
        });
        expect(response.statusCode).toBe(500);
    });
});