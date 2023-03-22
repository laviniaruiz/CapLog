require('dotenv').config()
const express = require('express')
const connectDB = require('./config/db')

const app = express()
const PORT = 8084 
connectDB()

const { createEngine } = require('jsx-view-engine')

app.set('view engine', 'jsx')

app.engine('jsx', createEngine())

const methodOverride = require('method-override')

app.use(express.urlencoded({extended: true}))

app.use(methodOverride('_method'))

app.use(express.static('public'))

const capLogRoutes = require('./routes/capLogRoutes.js')

// app.use('/', require('./routes/index'))
app.use('/caplogs', capLogRoutes)

// Listen to the given port
app.listen(PORT, () => {
    console.log('Listening to the port: ' + PORT)
})