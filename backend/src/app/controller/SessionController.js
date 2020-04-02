const jwt = require('jsonwebtoken');
const yup = require('yup');
const authConfig = require('../../config/auth');

const User = require('../models/User');

class SessionController {

  async store(req, res){

    const schema = yup.object().shape({
      email: yup
        .string()
        .email()
        .required(),
      password: yup
        .string()
        .required()
    })

    if(!(await schema.isValid(req.body))){
      return res.status(400).json({ error: 'Validation fails'});
    }

    const { email, password } = req.body;

    const user = await User.findOne({ where: { email: email}});

    if(! user){
      return res.status(401).json({ error: 'User not found'});
    }

    if(! (await user.checkPassword(password))){
      return res.status(401).json({ error: 'Password does not match' });
    }

    const { id, name } = user;

    return res.json({
      id,
      name,
      email,
      token: jwt.sign({ id }, authConfig.secret, {
        expiresIn: authConfig.expiresIn,
      })
    })

  }
}

module.exports = new SessionController();