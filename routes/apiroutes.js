// app.post('/registration', function(req, res) {
//     res.send('/registration.html');
// })


const express = require("express");
const app = express();



var orm = require('../config/orm.js')





// Routes (Endpoints)




// module.exports = function(app){
//     app.get('/', function(req, res) {
//         res.send('/index.html');
//     })
//     app.post('/api/player', function(req, res){
//         console.log(`submit button pushed`)
//         var firstName = req.body.first_name;
//         var lastName = req.body.last_name;
//         var birthDate = req.body.birth_date;
//         var email = req.body.email;
//         var street = req.body.street;
//         var city = req.body.city;
//         var postalCode = req.body.postal_code;
//         var friendName = req.body.friend_name;
//         var position = req.body.position;
//         orm.addPlayer(firstName, lastName, position)
//         console.log(`here is what is posting`, req.body)
//         res.send(req.body)
//     }) 
// }


