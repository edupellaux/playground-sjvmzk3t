let utils = require('./utils.js');
let exo = require('./exo.js');
let assert  = require('assert');

it('should return HELLO', () => {
	try {
		assert.equal("Module 288", ex.LE_MODULE);
    	assert.equal(typeof(ex.LE_MODULE), "string");
	} catch (error) {
		utils.printMessage ('Conseil 💡',"Vérifier le retour de la fonction toUpper")
	}
});

it('should throws Error', function () {
    assert.throws(
      () => ex.LE_MODULE = 'Test',
      TypeError
    );

});