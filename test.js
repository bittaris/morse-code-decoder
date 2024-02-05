const decodeMorse = require('./index');

test('Translate morse code into roman alphabet', () => {
    expect(decodeMorse('   .... . -.--   ')).toBe("HEY");
})