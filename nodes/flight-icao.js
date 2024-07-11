const axios = require('axios');

module.exports = function(RED) {
    function FlightICAO(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function(msg) {
            const icaoCode = msg.payload;
            const apiUrl = `https://api.oiot.com.br/flight/icao/?icao=${icaoCode}`;

            axios.get(apiUrl)
                .then(response => {
                    msg.payload = response.data;
                    node.send(msg);
                })
                .catch(error => {
                    node.error("Erro ao consultar API: " + error.message);
                });
        });
    }
    RED.nodes.registerType("flight-icao", FlightICAO);
}
