const validUrl = require("valid-url");
const { INVALID_URL } = require("../constants/error");

module.exports = (req, res, next) => {
  const { url } = req.body;
  if (!validUrl.isUri(url)) {
    return res.status(INVALID_URL.code).json({error: {...INVALID_URL} , data: null});
  }
  next();
};
