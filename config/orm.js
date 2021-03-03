const connection = require('./connection.js')

// DISPLAY Teams on each of their pages
// ADD a player to player table using the registration page
// ADD a player to a team
// EDIT a player on a team
// REMOVE a player from a team

const orm = {
    selectAll: function (player, cb) {
        connection.query(`SELECT * FROM ${player}`, (err, res) => {
            if (err) {
                throw err;
            }
            cb(res);
        });
    },
    addPlayer: function (player, newPlayer, cb) {
        connection.query(
            `INSERT INTO ${player} SET ?`,
            newPlayer,
            (err, res) => {
                if (err) {
                    throw err;
                }
                console.log(`${res.affectedRows} Player added\n`);
                cb(res);
            })
    },
    newPlayer: function (firstName, lastName){
        connection.query(
            `INSERT INTO player VALUES (${firstName}, ${lastName})`, (err, res) => {
                if (err) {
                    throw err;
                }
                console.log(res);
            });
    },

    editPlayerInfo: function (player, updateArray, cb) {
        const query = connection.query(
            `UPDATE ${player} SET ? WHERE ?`,
            updateArray,
            (err, res) => {
                if (err) {
                    throw err;
                }
                console.log(`${res.affectedRows} Player info updated\n`);
                cb(res);
            })
    },

    deletePlayer: function (player, condition, cb) {
        let queryString = `DELETE FROM ${player}`;
        queryString += ' WHERE ';
        queryString += condition;

        connection.query(queryString, (err, result) => {
            if (err) {
                throw err;
            }

            cb(result);
        });
    }
}

module.exports = orm;