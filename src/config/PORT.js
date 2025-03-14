const dotenv = require('dotenv');

dotenv.config()

module.exports = {
    serverPort: +process.env.PORT
}