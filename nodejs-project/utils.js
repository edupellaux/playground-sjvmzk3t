const printToChannel = (channel, message) => {
	console.log(`\nTECHIO> message --channel ${channel} ${message}`);
}


module.exports = {
  printToChannel : printToChannel
};