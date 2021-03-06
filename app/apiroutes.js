const orm = require('./orm');
const fs = require('fs')
const multer  = require('multer')
const crypto = require('crypto')


var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'public/assets/player_photos')
    },
    filename: (req, file, cb) => {
        let customFileName = crypto.randomBytes(18).toString('hex'),
            fileExtension = file.originalname.split('.')[1] // get file extension from original file name
            cb(null, customFileName + '.' + fileExtension)
         }
  })
   
  var upload = multer({ storage: storage })

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

    app.get("/api/player/edit/:id?", async function(req, res ){
        console.log(`this is the id from SERVER`,req.params.id);
        let player = await orm.getPlayer( req.params.id );
        res.send( player );
      });

    // pull from db and generate html card
    
    app.get('/api/team/:teamname', async function(req, res){
        console.log(req.params.teamname)
        let teamPlayers = await orm.getTeam(req.params.teamname)
        console.log(teamPlayers)
        res.send(teamPlayers)
    })
    
    app.get('/api/available', async function(req, res){
        console.log('we are at api/available')
        let availablePlayers = await orm.getAvailable()
        console.log('These are the', availablePlayers)
        res.send(availablePlayers)
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
        const fieldname =  req.file && req.file.fieldname ? req.file.fieldname : "";
        const originalname = req.file && req.file.originalname ? req.file.originalname: "";
        const encoding = req.file && req.file.encoding ? req.file.encoding: "";
        const mimetype = req.file && req.file.mimetype ? req.file.mimetype: "";
        const destination = req.file && req.file.destination ? req.file.destination : "";
        const filename = req.file && req.file.filename ? req.file.filename: "";
        const path = req.file && req.file.path ? req.file.path: "";

        console.log(`field name is = to `, fieldname)

        const result = await orm.newPlayer(firstName, lastName, birthDate, email, street, city, province, postalCode, friendName, position, skill, fieldname, originalname, encoding, mimetype, destination, filename, path)

        console.log( result )
          
        // adding to playerList and pushing file details to JSON list
        playersList.push(newfullPlayerDetails)

        // writing player JSON list to a file
        fs.writeFileSync(savePlayers, JSON.stringify(playersList))

        res.send(newfullPlayerDetails)
    }) 


    // delete, adjusted to account for photo upload by adding the upload.single
    app.delete('/api/:id', async function(req, res){
        const playerid = req.params.id
        console.log(`[DELETE] id ${playerid}`)
        const deleteResults = await orm.deletePlayer(playerid)
        console.log(`...`, deleteResults)

        res.send({ status: true, message: 'Deleted successfully' })
    
    }) 



    // put, update player information
    app.put('/api/player/:id', upload.single('avatar'), async function(req, res){
        
        console.log( '[PUT] we received this data:', req.body )
        if( !req.body.id ) {
            res.status(404).send( { message: 'Invalid id' } )
        }
        const pUpdate = req.body

        const saveResult = await orm.editPlayer( pUpdate.id, pUpdate.first_name, pUpdate.last_name, pUpdate.position )
        console.log( '... ', saveResult )
        res.send( { status: true, message: 'Updated successfully' } )

    }
    ) 









}



module.exports = router

