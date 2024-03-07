function listarSalas(){
    return[
        {
        "_id": {
            "$oid": "123456789"
        },
        "nome": "Guerreiros da INFO",
        "tipo": "publica"
},
{
    "_id": {
        "$oid": "12345678910"
    },
    "nome": "Guerreiros do CIMOL",
    "tipo": "privada",
    "chave": "1234"
}, {
    "_id": {
        "$oid": "12345678"
    },
    "nome": "Guerreiros da INFOCIMOL",
    "tipo": "publica"
},
];
}
/*
exports.get=()=>{
    let salaModel = require('../models/salaModel');
    return salaModel.listarSalas();
}
*/