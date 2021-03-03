
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
        lname: document.querySelector('#lname').value,
        dob: document.querySelector('#dob').value,
        email: document.querySelector('#email').value,
        street: document.querySelector('#street').value,
        city: document.querySelector('#city').value,
        prov: document.querySelector('#prov').value,
        postal: document.querySelector('#postal').value,
        friname1: document.querySelector('#friname1').value,
        pos: document.querySelector('#pos').value,
        skill: document.querySelector('#skill').value,
        coach: document.querySelector('#coach:checked')!==null,

    }

    const result = await formPost('/api/player/new', playerData )
    console.log(`got it`,result.message)
}   