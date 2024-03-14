const db = require("./db");
async function listarSalas(){
    return await db.findALL("salas");
}
module.exports = {listarSalas};
