// Instalando pacote ESM para que o exports const no connection.js seja possivel utilizar e para que o 
// import do ES6 também
require = require('esm')(module);
module.exports = require('./serve')