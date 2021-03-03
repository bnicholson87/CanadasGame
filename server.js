require( 'dotenv' ).config() // looks for .env ; process.env gets it's values

var htmlroutes = require('./routes/htmlroutes.js')
var apiroutes = require('./routes/apiroutes.js')

const express = require('express')
const apiRouter = require('./app/router')
const app = express()

const PORT = process.env.PORT || 8080

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// for serving all the normal html
app.use( express.static('public') )

// require('./routes/apiroutes')(app)
// for routes
apiRouter(app)

app.listen(PORT, function() {
    console.log( `Serving app on: https://localhost:${PORT}` )
})