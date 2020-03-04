//renombrar archivo a "play.test.js" para poder ejecutarlo
function len(valor) {
    return valor.length;
}

test('ver si funciona jest', () => {
    // throw new Error('Hay un error');
    // expect(4).toBe(3); //lanza un error
    // expect({}).toBe({}); //lanza un error (tiene difernte direccion de memoria)
    expect({}).toEqual({}); //es correcto
})

test('Funciona len', () => {
    let testV = [1,4,"a"];
    expect(len(testV)).toBeGreaterThanOrEqual(0);
    expect(len(testV)).toBe(3);
    expect(len(testV)).toBeDefined();
})

describe('Probar que funciona len', () => {
    let testV = [1,4,"a"];
    test('regresa positivo', () => {
        expect(len(testV)).toBeGreaterThanOrEqual(0);
    })
    test('valor correcto', () => {
        expect(len(testV)).toBe(3);
    })
})

test('codigo asincrono', (done) => {
    setTimeout(() => {
        let res = "hola";
        expect(res).toBe("hola2");
        done();
    }, 2000);
})