var mqtt = require('mqtt');
var client = mqtt.connect('mqtt://messagesight.demos.ibm.com:1883')

client.on('connect', function() { // When connected

  // subscribe to a topic
  client.subscribe('ingesupb2/groupe2', function() {

    client.on('message', function(topic, message, packet) {
      console.log("Received '" + message + "' on '" + topic + "'");
    });
  });
});