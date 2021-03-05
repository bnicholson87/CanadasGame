const db = require('./connection')('hockey_db', 'SummerSummer1')





function newPlayer(firstName, lastName, birthDate, email, street, city, province, postalCode, friendName, position, skill, fieldname, originalname, encoding, mimetype, destination, filename, path){
    const sql = `INSERT INTO player (first_name, last_name, birth_date, email, street, city, province, postal_code, friend_first_name, position, experience_level, fieldname, originalname, encoding, mimetype, destination, filename, path) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    
    console.log(`about to save: `, sql)
    
    return db.query(sql, [firstName, lastName, birthDate, email, street, city, province, postalCode, friendName, position, skill, fieldname, originalname, encoding, mimetype, destination, filename, path])


}


// function editPlayer(id, firstName, lastName, position){
//     return db.query = `UPDATE player SET? WHERE id =?`, [{firstName,lastName, position}, id]
    
   
// }

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


// get one player information
function getPlayer(player){
    console.log(player)
    return db.query(`SELECT * FROM player WHERE id = ${player};`)
}


module.exports = {newPlayer, deletePlayer, getTeam, getPlayer}




