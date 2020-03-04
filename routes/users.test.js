const request = require('supertest');
const app = require('../app');

test('Obtener listados de usuarios', async () => {
    const resp = await request(app)
                        .get('/users')
                        .expect(200)
    console.log(resp.body);
    expect(resp.body).toBeTruthy();
    expect(Array.isArray(resp.body)).toBe(true);
})

describe('Busqueda de usuarios', () => {
    test('Cuando existe si lo encuentra', async () => {
        const resp = await request(app)
                        .get('/users/test@t')
                        .expect(200)
        expect(resp.body).toBeTruthy();
        expect(resp.body.email).toBe("test@t");
    })
    test('Cuando no existe que marque error', async () => {
        const resp = await request(app)
                        .get('/users/test1@t')
                        .expect(404)
        expect(resp.body.error).toBeTruthy();
        expect(resp.body.error).toBe('No existe');
    })
})