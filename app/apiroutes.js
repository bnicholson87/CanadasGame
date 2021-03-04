const orm = require('./orm');
const fs = require('fs')
const multer  = require('multer')
const upload = multer({ dest: './uploads/' })



function router (app){


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

    // req.body fields to constansts
    const firstName = req.body.first_name;
    const lastName = req.body.last_name;
    const birthDate = req.body.birth_date;
    const email = req.body.email;
    const street = req.body.street;
    const city = req.body.city;
    const postalCode = req.body.postal_code;
    const province = req.body.province;
    const friendName = req.body.friend_name;
    const position = req.body.position;
    const skill = req.body.experience;
    const coach = req.body.coach;
    // req.file fields to constants - nothing is passed if no pic uplaoded so we need blank spaces
    const fieldname = " " || req.file.fieldname;
    const originalname = " " || req.file.originalname;
    const encoding = " " || req.file.encoding;
    const mimetype = " " || req.file.mimetype;
    const destination = " " || req.file.destination;
    const filename = " " || req.file.filename;
    const path = " " || req.file.path;

    
    const result = await orm.newPlayer(firstName, lastName, birthDate, email, street, city, province, postalCode, friendName, position, skill, fieldname, originalname, encoding, mimetype, destination, filename, path)

    console.log( result )

 


           
    // adding to playerList and pushing file details to JSON list
    playersList.push(newfullPlayerDetails)

    // writing player JSON list to a file
    fs.writeFileSync(savePlayers, JSON.stringify(playersList))

    res.send(newfullPlayerDetails)

    
    
}) 


}



module.exports = router

