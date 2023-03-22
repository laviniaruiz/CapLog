const mongoose = require('mongoose')

const Schema = mongoose.Schema

const capLogsSchema = new Schema({
    title: {type: String, required: true},
    entry: {type: String, required: true},
    shipIsBroken: {type: Boolean, required: true},
    ts: {type: String, required: true},
})

const CapLogs = mongoose.model('capLogs', capLogsSchema)

module.exports = CapLogs