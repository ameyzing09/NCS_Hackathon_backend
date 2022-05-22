const { ERROR_REDIRECTING_TO_URL } = require("../constants/error");
const urlModel = require("../models/url");

module.exports = async (req, res) => {
  try {
    const { shortUrl } = req.params;

    const urlToRedirect = await urlModel.findOne({
      where: {
        short_url: shortUrl,
      },
      attributes: ["long_url"],
      raw: true,
    });

    if (urlToRedirect !== null) {
      res.redirect(urlToRedirect.long_url);
    } else {
      res
        .status(URL_NOT_FOUND.code)
        .send({ error: { ...URL_NOT_FOUND }, data: null });
    }
  } catch (error) {
    console.log(error);
    return res
      .status(ERROR_REDIRECTING_TO_URL.code)
      .json({ error: { ...ERROR_REDIRECTING_TO_URL }, data: null });
  }
};
