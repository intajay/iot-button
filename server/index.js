var express = require('express');
var bodyParser = require('body-parser');
var cors = require('cors');

var app = express();
var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080;
var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1';

var button = {
	status: 'on'
};

app.use(bodyParser.json());
app.use(cors());

app.use(express.static(__dirname + '/public'));

app.get('/button', function(req, res) {
	res.json(button);
});

app.put('/button', function(req, res) {
	var currertStatus = req.body.status;

	var updatedButton = {};

	if (currertStatus === 'on') {
		updatedButton.status = 'on';
	} else if (currertStatus === 'off') {
		updatedButton.status = 'off';
	} else {
		return res.status(400).send();
	}

	button = updatedButton;
	console.log(updatedButton);
	res.json(updatedButton);
});

app.listen(server_port, server_ip_address, function() {
	console.log("Listening on " + server_ip_address + ", server_port " + server_port);
});