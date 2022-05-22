require('dotenv').config();
const app = require('express')();
const bodyParser = require("body-parser");
const cors = require("cors");

const dbc = require("./database"); // connecting to the database

const validateURL = require("./validations/urlValidator");
const generateQRCode = require("./services/generateQRCode");
const urlShortener = require("./services/urlShortener");
const redirectToURL = require("./services/redirectToUrl");

const PORT = process.env.PORT || 8080;

app.use(bodyParser.json());
app.use(cors())

app.post("/api/getUrl", validateURL, (req, res) => {
    generateQRCode(req, res);
});

app.post('/api/shortenUrl', validateURL, (req, res) => {
    urlShortener(req, res);
});

app.get("/api/:shortUrl", (req, res) => {
    redirectToURL(req, res);
})

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));