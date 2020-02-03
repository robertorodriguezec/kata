var attack = require('./functions.js');

test('Attacks', () =>{
    expect(attack.attack([2,1,1,0,0])).toBe(13);
});

test('Attacks', () =>{
    expect(attack.attack([2,2,1,1,1])).toBe(31);
});

test('Attacks', () =>{
    expect(attack.attack([2,2,2,1,1])).toBe(40);
});



