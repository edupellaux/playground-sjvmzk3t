const utils = require('./utils.js');
const assert = require('assert');
const ex = require('./exo.js');

describe('Test de comparaison de valeurs', () => {
	it("Test de nombre plus petit ou égal à 5", () => {
	    try
	    {
	        assert.strictEqual(true, ex.test(4));
	        assert.strictEqual(true, ex.test(5));
	    }
	    catch (error)
	    {
	        utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que la valeur soit plus petite ou égal à 5 🤔");
        	utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable retour 🤔");

	        throw error;
	    }
	});

	it("Test de nombre plus grand que 5", () => {
	    try
	    {
	        assert.strictEqual("false", ex.test(6));
	    }
	    catch (error)
	    {
	        utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que la valeur soit plus grande que 5 🤔");
        	utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable retour 🤔");

	        throw error;
	    }
	});

	it("Test nombre2 est plus petit que nombre1", () => {
	    try
	    {
	        assert.strictEqual("nombre1 est plus grand", ex.test(6, 5));
	    }
	    catch (error)
	    {
	        utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que la variable nombre1 soit plus grand que nombre2 🤔");
        	utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable phrase 🤔");

	        throw error;
	    }
	});
})