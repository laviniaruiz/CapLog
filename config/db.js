const mongooes = require('mongoose')
const db = process.env.mongo_URI

const connectDB = async () => {
    try {
        await mongooes.connect(db, {
            useNewUrlParser: true
        })
        console.log("Mongoose connected...")
    } catch (err) {
        console.error(err.message)
    }
}

module.exports = connectDB