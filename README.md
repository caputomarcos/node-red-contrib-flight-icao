# node-red-contrib-flight-icao

![Node-RED](https://img.shields.io/badge/node--red-icaonode-brightgreen)

Um nó Node-RED para consultar informações de voo usando códigos ICAO.

## Instalação

Para instalar este nó, execute o seguinte comando no diretório do seu Node-RED:
```bash
npm install node-red-contrib-flight-icao
```

## Uso
Este nó permite que você consulte informações de voo fornecendo um código ICAO como payload.

## Exemplo de Flow
```bash
[
    {
        "id": "inject-node",
        "type": "inject",
        "z": "flow-id",
        "name": "Injetar Código ICAO",
        "topic": "",
        "payload": "C4L0I",
        "payloadType": "str",
        "repeat": "",
        "crontab": "",
        "once": false,
        "onceDelay": 0.1,
        "x": 150,
        "y": 200,
        "wires": [
            ["flight-icao-node"]
        ]
    },
    {
        "id": "flight-icao-node",
        "type": "flight-icao",
        "z": "flow-id",
        "name": "",
        "x": 350,
        "y": 200,
        "wires": [
            ["debug-node"]
        ]
    },
    {
        "id": "debug-node",
        "type": "debug",
        "z": "flow-id",
        "name": "Debug",
        "active": true,
        "tosidebar": true,
        "console": false,
        "tostatus": false,
        "complete": "false",
        "x": 550,
        "y": 200,
        "wires": []
    }
]
```