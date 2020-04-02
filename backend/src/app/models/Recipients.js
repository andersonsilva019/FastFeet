const { Sequelize, Model } = require('sequelize');

class Recipients extends Model {
  static init(sequelize){
    super.init(
      {
        name: Sequelize.STRING,
        street: Sequelize.STRING,
        number: Sequelize.INTEGER,
        complement: Sequelize.STRING,
        state: Sequelize.STRING,
        city: Sequelize.STRING,
        cep: Sequelize.STRING
      },
      {
        sequelize,
      }
    )
  }
}

module.exports = Recipients;