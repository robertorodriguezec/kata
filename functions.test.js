var functions = require('./functions.js');

test('Attacks', () =>{
    expect(functions.atacar([2,1,1,0,0])).toBe(13);
});

test('Attacks', () =>{
    expect(functions.atacar([2,2,1,1,1])).not.toBe(31);
});

test('Attacks', () =>{
    expect(functions.atacar([2,2,2,1,1])).not.toBe(48);
});



