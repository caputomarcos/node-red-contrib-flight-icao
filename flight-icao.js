module.exports = function(RED) {
    function FlightIcaoNode(config) {
        RED.nodes.createNode(this, config);
        var node = this;

        node.on('input', function(msg) {
            const axios = require('axios');
            const icaoCode = msg.payload;

            if (!icaoCode) {
                node.error("ICAO code is required");
                return;
            }

            const apiUrl = `https://api.example.com/flight/${icaoCode}`; // Substitua pela URL da API real

            axios.get(apiUrl)
                .then(response => {
                    msg.payload = response.data;
                    node.send(msg);
                })
                .catch(error => {
                    node.error("API request failed: " + error.message);
                });
        });
    }
    RED.nodes.registerType("flight-icao", FlightIcaoNode);
};
