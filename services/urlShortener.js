const urlModel = require("../models/url");

const generateId = require("../utils/generateRandomId");

const { ERROR_SHORTENING_URL } = require("../constants/error");
const { URL_SHORTEN_SUCCESSFULLY } = require("../constants/success");

module.exports = async (req, res) => {
  try {
    const { url } = req.body;
    const shortenUrl = generateId();
    await urlModel.update(
      {
        short_url: shortenUrl,
      },
      {
        where: {
          long_url: url,
        },
      }
    );
    res
      .status(URL_SHORTEN_SUCCESSFULLY.code)
      .json({ ...URL_SHORTEN_SUCCESSFULLY, shortenUrl });
  } catch (error) {
    console.log(error);
    res
      .status(ERROR_SHORTENING_URL.code)
      .json({ ...ERROR_SHORTENING_URL, shortenUrl });
  }
};
