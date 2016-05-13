/*
 * Etant donné que la connexion plante souvent, il sera plus pratique de relancer ce petit serveur
 * plutot que redémarrer l'arduino à chaque fois
 */

var mqtt    = require('mqtt');
var client  = mqtt.connect('mqtt://messagesight.demos.ibm.com:1883');

client.on('connect', function () {
    client.publish('ingesupb2/groupe2', 'On est al #groupe2');
    setInterval(function() {
		//publie à la connexion
                console.log('J\'ai publié une température ' + (new Date()).getHours() + ":" + (new Date()).getMinutes() + " " + (new Date()).getSeconds() + "s");
                client.publish('ingesupb2/groupe2', ((Math.random() * (23 - 21) + 21).toFixed(2)).toString());
    }, 10000);
});