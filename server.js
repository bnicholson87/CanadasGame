require( 'dotenv' ).config() // looks for .env ; process.env gets it's values
const fs = require('fs')



// var htmlroutes = require('./routes/htmlroutes.js')
// var apiroutes = require('./routes/apiroutes.js')

const express = require('express')
const multer  = require('multer')
const upload = multer({ dest: 'uploads/' })

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


// post adjusted to account for photo upload
app.post('/api/player/new', upload.single('avatar'), function(req, res){
    
    // this is a combined object which includes the photo details and the form post details
    const newPlayerData = req.body
    const newPlayerPhoto = req.file
    const newfullPlayerDetails = {
        ...newPlayerData,
        ...newPlayerPhoto
    }
    console.log(`[submit button pushed] Here is the combined object with forma and photo details`, newfullPlayerDetails)

           
    // adding to player and file details to JSON list
    playersList.push(newfullPlayerDetails)

    // writing player JSON list to a file
    fs.writeFileSync(savePlayers, JSON.stringify(playersList))
    
   
}) 








app.listen(PORT, function() {
    console.log( `Serving app on: http://localhost:${PORT}` )
})