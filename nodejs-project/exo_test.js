let utils = require('./utils.js');
let exo = require('./exo.js');
let assert  = require('assert');

it('should return HELLO', () => {
	try {
		assert.equal("Module 288", ex.LE_MODULE);
    	assert.equal(typeof(ex.LE_MODULE), "string");
	} catch (error) {
		utils.printMessage ('Conseil 💡',"Vérifier la valeur")
	}
});

it('should throws Error', function () {
    try {
		assert.doesNotThrow(
	      () => ex.LE_MODULE = 'Test',
	      TypeError
	    );
	} catch (error) {
		utils.printMessage ('Conseil 💡',"est une variable")
	}
    

});