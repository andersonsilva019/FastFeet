const authConfig = require('../../config/auth');
const jwt = require('jsonwebtoken');
const { promisify } = require('util');

module.exports = async (req, res, next) => {

  const authHeads = req.headers.authorization;

  if(!authHeads){
    return res.status(401).json({ error: 'Token not provider' });
  }

  const [,token] = authHeads.split(' ');

  try {

    const decoded = await promisify(jwt.verify)(token, authConfig.secret);

    req.recipientId = decoded.id;

    console.log(req.recipientId)

    return next();

  } catch (err) {
    return res.status(401).json({ error: 'Token invalid' })
  } 
}