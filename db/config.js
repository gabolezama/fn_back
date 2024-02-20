const { config } = require('../config/config');

const USER = encodeURIComponent( config.dbUser );
const PASSWORD = encodeURIComponent( config.dbPassword );
const HOST = encodeURIComponent( config.dbHost );
const URI = `postgres://${USER}:${PASSWORD}@${HOST}:${config.dbPort}/${config.dbName}`

module.exports = {
    development:{
        url: URI,
        dealect: 'postgres'
    },
    production:{
        url: URI,
        dealect: 'postgres'
    }
}