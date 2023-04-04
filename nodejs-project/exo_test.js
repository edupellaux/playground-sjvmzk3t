const utils = require('./utils.js');
const assert = require('assert');
const ex = require('./exo.js');

/*

if (age < 16) {
 phrase = "tarif enfant"
} else if (age <  18 || age >= 65 || estAuChomage || (estEtudiant && age < 25)) {
    phrase = "tarif réduit"
} else {
    phrase = "plein tarif"
} 

*/

describe('Test de comparaison opérateur logique et', () => {
	it("Test de tarif enfant", () => {
	    try
	    {
	        assert.strictEqual("tarif enfant", ex.conditionLogiqueOu(15, true, true));
	        assert.strictEqual("tarif enfant", ex.conditionLogiqueOu(15, false, true));
	        assert.strictEqual("tarif enfant", ex.conditionLogiqueOu(15, true, false));
	        assert.strictEqual("tarif enfant", ex.conditionLogiqueOu(15, false, false));
	    }
	    catch (error)
	    {
	        utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que l'âge soit plus petit que 18 🤔");
	        utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que le fait d'être au chômage ou être étudiant ne joue pas de rôle 🤔");
        	utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable phrase 🤔");

	        throw error;
	    }
	});

	it("Test tarif réduit", () => {
	    try
	    {
	        assert.strictEqual("tarif réduit", ex.conditionLogiqueOu(17, true, true));
	        assert.strictEqual("tarif réduit", ex.conditionLogiqueOu(42, true, false));
	        assert.strictEqual("tarif réduit", ex.conditionLogiqueOu(65, false, false));
	        assert.strictEqual("tarif réduit", ex.conditionLogiqueOu(21, false, true));
	    }
	    catch (error)
	    {
	        utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que l'âge soit plus petit à 18 🤔");
        	utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable phrase 🤔");

	        throw error;
	    }
	});

	it("Test de plein tarif", () => {
	    try
	    {
	        assert.strictEqual("plein tarif", ex.conditionLogiqueOu(18, true, false));
	        assert.strictEqual("plein tarif", ex.conditionLogiqueOu(23, false, false));
	        assert.strictEqual("plein tarif", ex.conditionLogiqueOu(26, false, true));
	    }
	    catch (error)
	    {
	        utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que l'âge soit plus grand ou égal à 18 🤔");
	        utils.printMessage('Conseil 💡', "Vérifiez que vous testiez que l'âge soit supérieur à 25 si la personne est étudiante 🤔");
        	utils.printMessage('Conseil 💡', "Vérifiez la valeur de la variable phrase 🤔");

	        throw error;
	    }
	});
})