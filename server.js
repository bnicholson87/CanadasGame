require( 'dotenv' ).config() // looks for .env ; process.env gets it's values

const apiRouter = require('./app/apiroutes')

const orm = require('./app/orm')
const express = require('express')


const app = express()
const PORT = process.env.PORT || 8081

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// for serving all the normal html
app.use( express.static('public') )
app.use( express.static('script') );


apiRouter(app)






// serverport listening functiion
app.listen(PORT, function() {
    console.log( `Serving app on: http://localhost:${PORT}` )
})