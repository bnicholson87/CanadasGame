const db = require('./connection')('hockey_db', 'Summer77')





function newPlayer(firstName, lastName, birthDate, email, street, city, province, postalCode, friendName, position, skill, fieldname, originalname, encoding, mimetype, destination, filename, path){
    const sql = `INSERT INTO player (first_name, last_name, birth_date, email, street, city, province, postal_code, friend_first_name, position, experience_level, fieldname, originalname, encoding, mimetype, destination, filename, path) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    
    console.log(`about to save: `, sql)
    
    return db.query(sql, [firstName, lastName, birthDate, email, street, city, province, postalCode, friendName, position, skill, fieldname, originalname, encoding, mimetype, destination, filename, path])


}


// function updatePlayer(firstName, lastName, birthDate, email, street, city, province, postalCode, friendName, position, skill, fieldname, originalname, encoding, mimetype, destination, filename, path){
//     const sql = `UDPATE player SET (first_name, last_name, birth_date, email, street, city, province, postal_code, friend_first_name, position, experience_level, fieldname, originalname, encoding, mimetype, destination, filename, path) VALUES (?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)`
    
//     console.log(`about to save: `, sql)
    
//     return db.query(sql, [firstName, lastName, birthDate, email, street, city, province, postalCode, friendName, position, skill, fieldname, originalname, encoding, mimetype, destination, filename, path])


// }




function updatePlayer( id, firstname, lastname ){
    const sql = `UPDATE player SET ? WHERE id = ?`
    return db.query( sql, [ firstname, lastname, id] )
}

function deletePlayer( id ){
    console.log(`ormid`,id)
    return db.query( 'DELETE FROM player WHERE id=?', [ id ] )
}


// grab by team
function getTeam(Larry){
    return db.query(`SELECT player.id, player.first_name, player.last_name, player.position, player.filename, team.name
    FROM player LEFT JOIN team ON player.coach_id = team.id
    WHERE team.name = "${Larry}";` )

}


// get one player information
 async function getPlayer(player){
    console.log(`orm player id`, player)
    const sql = `SELECT * FROM player WHERE id = ${player};`
    let a = await db.query(`SELECT * FROM player WHERE id = ${player};`) 
    console.log(a)
    return a
    
}

// grab by team
function getAvailable(){
  return db.query('SELECT id, first_name, last_name, position, filename FROM player WHERE coach_id IS NULL;')
}



module.exports = {newPlayer, deletePlayer, getTeam, getPlayer, getAvailable, updatePlayer}




