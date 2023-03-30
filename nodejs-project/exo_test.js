const assert = require('assert');
const exo = require('./exo.js');

describe('Test de constante', function() {
  it('La constante devrait être une constante', function() {
    const expectedValue = 'valeur attendue';
    const obj = { constante: exo.LE_MODULE };
    Object.freeze(obj); // On gèle l'objet
    assert.throws(() => { obj.constante = 'nouvelle valeur'; }, TypeError, 'La constante n\'est pas une constante');
  });
});