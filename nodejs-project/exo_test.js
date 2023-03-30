let utils = require('./utils.js');
let exo = require('./exo.js');
let assert  = require('assert');

it('should eturrn HELLO', () => {
	try {
		assert.equal("Module 288", exo.LE_MODULE);
    	assert.equal(typeof(exo.LE_MODULE), "string");
	} catch (error) {
		utils.printMessage ('Conseil 💡',"Vérifier la valeur")

		throw error;
	}
});

it('should throws Error', function () {
    try {
		assert.throws(
	      () => exo.LE_MODULE = 'Test',
	      TypeError
	    );
	} catch (error) {
		utils.printMessage ('Conseil 💡',"est une variable")

		throw error;
	}
    

});