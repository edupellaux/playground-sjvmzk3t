const utils = require('./utils.js');
const assert = require('assert');
const ex = require('./exo.js');

describe('Test de comparaison opérateur logique et', () => {
	it("Test avec majorité", () => {
	    try
	    {
	        assert.strictEqual("Je suis majeur et étudiant", ex.test(18, true));
	        assert.strictEqual("Je suis majeur mais pas étudiant", ex.test(18, false));
	    }
	    catch (error)
	    {
	        utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que l'âge soit plus grand ou égal à 18' 🤔");
        	utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable phrase 🤔");

	        throw error;
	    }
	});

	it("Test avec minorité", () => {
	    try
	    {
	        assert.strictEqual("Je suis mineur et étudiant", ex.test(17, true));
	        assert.strictEqual("Je suis mineur mais pas étudiant", ex.test(17, false));
	    }
	    catch (error)
	    {
	        utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que l'âge soit plus plus petit à 18' 🤔");
        	utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable phrase 🤔");

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