var five = require('johnny-five');
var request = require('request');

var board = new five.Board();

board.on('ready', function() {
    var pot = new five.Sensor('A0')
    var led = new five.Led(13)

    pot.on('data', function() {
        request({
            url: 'http://iot-intajay.rhcloud.com/button',
            json: true
        }, function(error, response, body) {
            if (!error && response.statusCode == 200) {
                console.log(body)
                if(body.status === 'on')
                {
                    led.on()
                } else {
                    led.off()
                }
            }
        })
    })
});