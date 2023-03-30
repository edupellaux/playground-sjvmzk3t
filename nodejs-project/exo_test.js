let utils = require('./utils.js');
const exo = require('./exo.js');
let assert  = require('assert');

describe('Test de constante', function() {
  it('La variable devrait être une constante', function() {
    const myConst = 42; // déclaration de la constante
    assert.strictEqual(Object.getOwnPropertyDescriptor(exo, 'LE_MODULE').writable, false, 'La variable n\'est pas une constante'); //vérification de la constante
  });
});