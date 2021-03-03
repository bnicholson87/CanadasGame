
function formPost( url, data={} ){
    // post requires header, method + data to be sent
    const postData = { 
        headers: { 'Content-Type': 'application/json' },
        method: 'post',
        body: JSON.stringify( data )
    }
    return fetch( url,postData ).then( res=>res.json() )
}	


async function addPlayer( event ){
    event.preventDefault()
    console.log(`button clicked`)

    const playerData = {
        fname: document.querySelector('#fname').value,

    }

    const result = await formPost('/api/player/new', playerData )
    console.log(`got it`,result.message)
}   