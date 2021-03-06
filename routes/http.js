/**
 * Dependencies
 */
const config = require('../config');
const protocol = require('../protocol/index');

module.exports = function (req, res) {
	// disable `Host` check
	if (/*req.header('Host') !== config.host ||*/
	req.header('Content-Type') !== 'application/json') {
		res.status(400).end();
		return;
	}

	protocol.postRequest(req.body, function (resBody) {
		res.send(resBody);
	});
};
