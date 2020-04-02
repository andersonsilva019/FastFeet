const Sequelize = require('sequelize');

/* Configurações do banco de dados */
const databaseConfig = require('../config/database');

/* Models */
const User = require('../app/models/User');

/* Onde vai ficar todos os models */
const models = [User]

class Database {
  constructor(){
    this.init();
  }

  init(){
    this.connection =  new Sequelize(databaseConfig);
    models.map(model => model.init(this.connection))
  }
}

module.exports = new Database(); 