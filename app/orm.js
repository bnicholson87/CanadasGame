const db = require('./connection')('hockey_db', 'SummerSummer')





function newPlayer(firstName, lastName, birthDate, email, street, city, province, postalCode, friendName, position, skill, fieldname, originalname, encoding, mimetype, destination, filename, path){
    const sql = `INSERT INTO player (first_name, last_name, birth_date, email, street, city, province, postal_code, friend_first_name, position, experience_level, fieldname, originalname, encoding, mimetype, destination, filename, path) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    
    console.log(`about to save: `, sql)
    
    return db.query(sql, [firstName, lastName, birthDate, email, street, city, province, postalCode, friendName, position, skill, fieldname, originalname, encoding, mimetype, destination, filename, path])


}


function editPlayer(id, firstName, lastName, position){
    return db.query = `UPDATE player SET? WHERE id =?`, [{firstName,lastName, position}, id]
    
   
}

function deletePlayer( id ){
    console.log(`ormid`,id)
    return db.query( 'DELETE FROM player WHERE id=?', [ id ] )
}


// grab by team
function getTeam(teamname){
    return db.query(`SELECT player.id, player.first_name, player.last_name, player.position, player.filename, team.name
    FROM player LEFT JOIN team ON player.coach_id = team.id
    WHERE team.name = "${teamname}";` )

}





module.exports = {newPlayer, deletePlayer, editPlayer, getTeam}
























// DISPLAY Teams on each of their pages
// ADD a player to player table using the registration page
// ADD a player to a team
// EDIT a player on a team
// REMOVE a player from a team

// const orm = {
//     selectAll: function (player, cb) {
//         connection.query(`SELECT * FROM ${player}`, (err, res) => {
//             if (err) {
//                 throw err;
//             }
//             cb(res);
//         });
//     },
//     addPlayer: function (player, newPlayer, cb) {
//         connection.query(
//             `INSERT INTO ${player} SET ?`,
//             newPlayer,
//             (err, res) => {
//                 if (err) {
//                     throw err;
//                 }
//                 console.log(`${res.affectedRows} Player added\n`);
//                 cb(res);
//             })
//     },
//     newPlayer: function (firstName, lastName){
//         connection.query(
//             `INSERT INTO player VALUES (${firstName}, ${lastName})`, (err, res) => {
//                 if (err) {
//                     throw err;
//                 }
//                 console.log(res);
//             });
//     },

//     editPlayerInfo: function (player, updateArray, cb) {
//         const query = connection.query(
//             `UPDATE ${player} SET ? WHERE ?`,
//             updateArray,
//             (err, res) => {
//                 if (err) {
//                     throw err;
//                 }
//                 console.log(`${res.affectedRows} Player info updated\n`);
//                 cb(res);
//             })
//     },

//     deletePlayer: function (player, condition, cb) {
//         let queryString = `DELETE FROM ${player}`;
//         queryString += ' WHERE ';
//         queryString += condition;

//         connection.query(queryString, (err, result) => {
//             if (err) {
//                 throw err;
//             }

//             cb(result);
//         });
//     }
// }
// function closeORM(){
//     return connection.close()
// }

// module.exports = orm;