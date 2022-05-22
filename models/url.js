const db = require('../dbConfig')
const sequelize = require('sequelize')

const url = db.define('url', {
    id: {
        type: sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    long_url: {
        type: sequelize.STRING,
        allowNull: false
    },
    short_url: {
        type: sequelize.STRING,
    }
}, {
    timestamps: false,
    freezeTableName: true
})

module.exports = url