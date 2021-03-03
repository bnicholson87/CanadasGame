const orm = require('./orm');

function router( app ){
    app.get('/api/tasks/:due?', async function(req, res) {
        const due = req.params.due ? { due: req.params.due } : ''
        console.log( `[GET] getting list, due=${due}`)
        const list = await orm.getList( due )

        res.send( list )
    })

    app.post('/api/tasks', async function(req, res) {
        console.log( '[POST] we received this data:', req.body )
        const saveResult = await orm.insertTask( req.body.priority, req.body.info, req.body.due )
        console.log( `... insertId: ${saveResult.insertId} ` )

        res.send( { status: true, insertId: saveResult.insertId, message: 'Saved successfully' } )
    });

    app.put('/api/tasks', async function(req, res) {
        console.log( '[PUT] we received this data:', req.body )
        if( !req.body.id ) {
            res.status(404).send( { message: 'Invalid id' } )
        }

        const saveResult = await orm.updateTask( req.body.id, req.body.priority, req.body.info, req.body.due )
        console.log( '... ', saveResult )
        res.send( { status: true, message: 'Updated successfully' } )
    });

    app.delete('/api/tasks/:id', async function(req, res) {
        const taskId = req.params.id
        console.log( `[DELETE] id=${taskId}` )
        const deleteResult = await orm.deleteTask( taskId )
        console.log( '... ', deleteResult )

        res.send( { status: true, message: 'Deleted successfully' } )
    });
}

module.exports = router
