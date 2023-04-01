const utils = require('./utils.js');
const assert = require('assert');
const ex = require('./exo.js');

describe('Je teste describe allez hop', () => {
	it("création des variables'", function () {
	    try
	    {
	        assert.strictEqual("égalité", ex.test(5, 5));
	        assert.strictEqual("petit est plus petit", ex.test(5, 6));
	        assert.strictEqual("petit est plus grand", ex.test(6, 5));
	    }
	    catch (error)
	    {
	        utils.printMessage('Conseil 💡', "Vérifiez le nom et/ou la valeur de la variable 🤔");

	        throw error;
	    }
	});
})