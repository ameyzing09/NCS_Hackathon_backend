const { BAD_REQUEST, NOT_FOUND, INTERNAL_SERVER_ERROR } = require('./httpStatusCode');

module.exports = {
    ERROR_GENERATING_QR_CODE: {
        code: INTERNAL_SERVER_ERROR,
        message: 'Error generating QR code'
    },
    ERROR_REDIRECTING_TO_URL: {
        code: BAD_REQUEST,
        message: 'Error redirecting to URL'
    },
    ERROR_SHORTENING_URL: {
        code: INTERNAL_SERVER_ERROR,
        message: 'Error shortening URL'  
    },
    URL_NOT_FOUND: {
        code: NOT_FOUND,
        message: 'URL not found'
    },
    INVALID_URL: {
        code: BAD_REQUEST,
        message: 'Invalid URL'
    }
}