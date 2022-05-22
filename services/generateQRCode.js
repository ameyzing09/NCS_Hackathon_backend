const qrCode = require("qrcode");
// Utils
const generateId = require("../utils/generateRandomId");

// Models
const urlModel = require("../models/url");

// Constants
const { ERROR_GENERATING_QR_CODE } = require("../constants/error");
const { QRCODE_GENERATED_SUCCESSFULLY } = require("../constants/success");

module.exports = (req, res) => {
  const { url } = req.body;
  qrCode.toDataURL(url, async (err, urlQrCode) => {
    if (err) {
      console.log(err);
      return res
        .status(ERROR_GENERATING_QR_CODE.code)
        .json(ERROR_GENERATING_QR_CODE);
    }
    try {
      // const shortenUrl = generateId();
      // console.log('shortenUrl ', shortenUrl);
      await urlModel.create({
        long_url: url,
        // short_url: shortenUrl,
      });
      console.log({ urlQrCode });
      res.status(QRCODE_GENERATED_SUCCESSFULLY.code).json({
        ...QRCODE_GENERATED_SUCCESSFULLY,
        urlQrCode,
        error: null,
      });
    } catch (err) {
      console.log(err);
      return res
        .status(ERROR_GENERATING_QR_CODE.code)
        .json(ERROR_GENERATING_QR_CODE);
    }
  });
};
