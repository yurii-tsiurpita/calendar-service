import request from 'supertest';
import app from '../server.js';

describe('when getting events info', () => {
    test('response should has createdAt and updatedAt fields', async () => {
        const response = await request(app).get('/api/events');
        expect(response.body[0].createdAt).toBeDefined();
        expect(response.body[0].updatedAt).toBeDefined();
    });
});

describe('when did not pass event description', () => {
    test('response status code should be 500', async () => {
        const response = await request(app).post('/api/events').send({
            date: "2022-9-19",
            repeat: "week",
            userId: 2
        });
        expect(response.statusCode).toBe(500);
    });
});

describe('passing id with string type', () => {
    test('response status code should be 500', async () => {
        const response = await request(app).delete('/api/events/wrongId')
        expect(response.statusCode).toBe(500);
    });
});
