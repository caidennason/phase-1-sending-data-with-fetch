// Add your code here
function submitData(name, email) {
    return fetch('http://localhost:3000/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            email: email,
        })

    })
        .then((resp) => resp.json())
        .then((res) => 
        {
        let body = document.querySelector('body')
        body.innerHTML = res.id
        })
   .catch((error) => {
    let body = document.querySelector('body')
        body.innerHTML = error.message
   })
        
}



