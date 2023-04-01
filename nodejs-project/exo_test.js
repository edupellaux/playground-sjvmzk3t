const utils = require('./utils.js');
const assert = require('assert');
const ex = require('./exo.js');

describe('Test de comparaison de valeurs sans type', () => {
	it("Test avec des valeurs et types identiques", () => {
	    try
	    {
	        assert.strictEqual(true, ex.test(1, 1));
	        assert.strictEqual(true, ex.test('Salut', 'Salut'));
	    }
	    catch (error)
	    {
	        utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que les valeurs soient identiques 🤔");
        	utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable retour 🤔");

	        throw error;
	    }
	});

	it("Test avec des valeurs identiques", () => {
	    try
	    {
	        assert.strictEqual(false, ex.test(1, "1"));
	        assert.strictEqual(false, ex.test(1, true));
	    }
	    catch (error)
	    {
	        utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que les valeurs et les types soient identiques 🤔");
        	utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable retour 🤔");

	        throw error;
	    }
	});

	it("Test avec des valeurs différentes", () => {
	    try
	    {
	        assert.strictEqual(false, ex.test(1, 0));
	        assert.strictEqual(false, ex.test(false, true));
	        assert.strictEqual(false, ex.test("bonjour", true));
	    }
	    catch (error)
	    {
	        utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que les valeurs soient différentes 🤔");
        	utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable retour 🤔");

	        throw error;
	    }
	});
})