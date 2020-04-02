const Recipient = require('../models/Recipients');
const yup = require('yup');

class RecipientController {
  
  async store(req, res) {
    
    const schema = yup.object().shape({
      name: yup
        .string()
        .required(),
      street: yup
        .string()
        .required(),
      number: yup
        .number()
        .required(),
      complement: yup
        .string(),
      state: yup
        .string()
        .required()
        .max(2)
        .min(2), 
      city: yup
        .string()
        .required(),
      cep: yup 
        .string()
        .required()
    })

    if(! (await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Validation fails'});
    }

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

  async update(req, res){

    const { id } = req.params;

    const recipientExists = await Recipient.findOne({ where: { id }})

    if(!recipientExists){
      return res.status(401).json({ error: ' Recipient not found '});
    }

    const {name, street, number,complement, state, city, cep} = await recipientExists.update(req.body);

    return res.json({
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

