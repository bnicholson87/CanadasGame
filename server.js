require( 'dotenv' ).config() // looks for .env ; process.env gets it's values
const fs = require('fs')



// var htmlroutes = require('./routes/htmlroutes.js')
// var apiroutes = require('./routes/apiroutes.js')

const express = require('express')
// const apiRouter = require('./app/router')
const app = express()

const PORT = process.env.PORT || 8081

// for parsing incoming POST data
app.use(express.urlencoded({ extended: true }))
app.use(express.json())

// for serving all the normal html
app.use( express.static('public') )
app.use( express.static('script') );

// require('./routes/apiroutes')(app)
// for routes
// apiRouter(app)



// saving JSON to file
const savePlayers = './.playersList.json'



// Data =======================================================
let playersList = fs.existsSync(savePlayers) ?
    JSON.parse( fs.readFileSync(savePlayers) ) : []







//EndPoints

// send playlist from JSON to this api
app.get('/api/player', function(req, res){
    res.send( playersList )
})



app.post('/api/player/new', function(req, res){
    const newPlayerData = req.body
    console.log(`submit button pushed adding`, newPlayerData)
    
    // adding to player list JSON
    playersList.push(newPlayerData)

    // writing player list to file - for now
    fs.writeFileSync(savePlayers, JSON.stringify(playersList))
    
    res.send({ message: `Saved: ${newPlayerData.fname}` })
    
    console.log(`this is the full list`, playersList)
    console.log(`this is the new additon`, newPlayerData)
   
}) 






app.listen(PORT, function() {
    console.log( `Serving app on: http://localhost:${PORT}` )
})