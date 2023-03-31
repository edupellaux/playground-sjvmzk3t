let printToChannel = require('./utils.js');
let toUpper = require('./exo.js');
let assert  = require('assert');

it('should return HELLO', () => {
	try {
		assert.equal('HELLO', toUpper('hello'));
	} catch (error) {
		printToChannel ('Conseil 💡',"Vérifier le retour de la fonction toUpper")
	}
});