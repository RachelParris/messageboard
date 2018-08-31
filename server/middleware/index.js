const verifyCookie = (req, res, next) => {
  const jwt = require("jsonwebtoken");
  const token = req.cookies.awesomeToken;
  const secret = 'superAwesomeSecretKey';

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).json({status: 'Access denied.'});
    }
    res.json({ status: 'token verified'})
    console.log(decoded);

    req.user = {
      username: decoded.data.username,
    }
    next();
  });
}

module.exports = verifyCookie;