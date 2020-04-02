const Recipient = require('../models/Recipients');

class RecipientController {
  async store(req, res) {
    
    const recipientExist = await Recipient.findOne({ where: { number: req.body.number}})
    
    if(recipientExist){
      return res.status(400).json({ error: 'Recipients already exists'})
    }
    
    const { id, name, street, number, complement, state, city, cep} = await Recipient.create(req.body);

    return res.json({
      id,
      name,
      street,
      number,
      complement,
      state,
      city,
      cep
    });
  }
}

module.exports = new RecipientController();

