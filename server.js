// require( 'dotenv' ).config() // looks for .env ; process.env gets it's values


const fs = require('fs')
const orm = require('./config/orm')
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


// Data ======================================================
let playersList = fs.existsSync(savePlayers) ?
    JSON.parse( fs.readFileSync(savePlayers) ) : []


// EndPoints =======================================================

// send playlist from JSON to the /api/player path
app.get('/api/player', function(req, res){
    res.send( playersList )
})

// post, adjusted to account for photo upload by adding the upload.single
app.post('/api/player/new', upload.single('avatar'), async function(req, res){
    
    // this is a combined object which includes the photo details and the form post details
    const newPlayerData = req.body
    const newPlayerPhoto = req.file
    const newfullPlayerDetails = {
        ...newPlayerData,
        ...newPlayerPhoto
    }
    console.log(`[submit button pushed] Here is the combined object with forma and photo details`, newfullPlayerDetails)


    var firstName = req.body.first_name;
    var lastName = req.body.last_name;
    let birthDate = req.body.birth_date;
    var email = req.body.email;
    var street = req.body.street;
    var city = req.body.city;
    var postalCode = req.body.postal;
    var province = req.body.province;
    var friendName = req.body.friname1;
    var position = req.body.position;
    var skill = req.body.skill;
    var coach = req.body.coach;
    const result = await orm.newPlayer(firstName, lastName, birthDate, email, street, city, postalCode, province, friendName, position, skill)

    console.log( result )

 


           
    // adding to playerList and pushing file details to JSON list
    playersList.push(newfullPlayerDetails)

    // writing player JSON list to a file
    fs.writeFileSync(savePlayers, JSON.stringify(playersList))

    res.send(req.body)

    
    
}) 







// serverport listening functiion
app.listen(PORT, function() {
    console.log( `Serving app on: http://localhost:${PORT}` )
})